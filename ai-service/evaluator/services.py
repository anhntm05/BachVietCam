"""
Logic cham diem cao do.

Quy trinh:
  1. Trich f0 (tan so co ban) cua hoc vien va giao vien bang pYIN.
  2. C012n chinh hai chuoi theo thoi gian bang DTW de tru hao lech nhip,
     lech diem bat dau giua hoc vien va giao vien.
  3. So sai lech cao do tren cac frame da c012n, tinh bang cents.

Toan bo dung sai tinh bang cents chu khong phai Hz tuyet doi, vi cao do
la quan he ti le: 15 Hz o not tram la lech rat lon, o not cao lai khong
dang ke. 100 cents = 1 nua cung.
"""
import json

import librosa
import numpy as np


SAMPLE_RATE = 22050
HOP_LENGTH = 512

# Not moc de quy doi Hz sang thang cents tuyet doi khi chay DTW.
# Chi la diem tham chieu, khong anh huong ket qua so sanh cuoi cung.
_REF_HZ = 55.0


def extract_f0(audio_path, fmin, fmax, sr=SAMPLE_RATE, hop_length=HOP_LENGTH):
    """Trich chuoi f0 bang pYIN. Frame khong co cao do tra ve NaN."""
    y, sr = librosa.load(audio_path, sr=sr)
    f0, _, _ = librosa.pyin(
        y,
        fmin=fmin,
        fmax=fmax,
        sr=sr,
        hop_length=hop_length,
    )
    return f0


def cents_diff(f_student, f_teacher):
    """Sai lech cao do tinh bang cents. Ca hai tan so phai > 0."""
    return 1200.0 * np.log2(f_student / f_teacher)


def _to_cents_sequence(f0):
    """Doi chuoi f0 (Hz) sang cents tuyet doi. Frame im lang ve 0."""
    seq = np.zeros_like(f0, dtype=float)
    voiced = ~np.isnan(f0)
    seq[voiced] = 1200.0 * np.log2(f0[voiced] / _REF_HZ)
    return seq


def align_dtw(f0_student, f0_teacher):
    """
    C012n chinh hai chuoi pitch bang DTW.
    Tra ve warping path: danh sach cap (student_idx, teacher_idx)
    theo thu tu thoi gian xuoi.
    """
    student_cents = _to_cents_sequence(f0_student)
    teacher_cents = _to_cents_sequence(f0_teacher)

    _, wp = librosa.sequence.dtw(
        X=student_cents.reshape(1, -1),
        Y=teacher_cents.reshape(1, -1),
        metric="euclidean",
    )
    # librosa tra path nguoc tu cuoi ve dau, dao lai cho xuoi thoi gian.
    return wp[::-1]


def score_pitch(f0_student, f0_teacher, tolerance_cents):
    """
    Cham diem cao do sau khi c012n DTW.
    Chi tinh tren cac frame giao vien thuc su phat ra am thanh.
    """
    wp = align_dtw(f0_student, f0_teacher)

    total = 0
    passed = 0
    deviations = []
    
    # Tracking cho error segments
    error_segments = []
    current_segment = None

    for s_idx, t_idx in wp:
        f_t = f0_teacher[t_idx]
        if np.isnan(f_t):
            # Frame giao vien im lang -> ket thuc segment loi hien tai neu co
            if current_segment is not None:
                error_segments.append(current_segment)
                current_segment = None
            continue
            
        total += 1
        f_s = f0_student[s_idx]
        if np.isnan(f_s):
            # Giao vien co tieng ma hoc vien im lang: tinh la sai, ket thuc segment
            if current_segment is not None:
                error_segments.append(current_segment)
                current_segment = None
            continue
            
        diff_raw = cents_diff(f_s, f_t) # diff_raw > 0 -> hoc vien danh cao hon (cang day)
        diff = abs(diff_raw)
        deviations.append(diff)
        
        time_sec = t_idx * HOP_LENGTH / SAMPLE_RATE
        
        if diff <= tolerance_cents:
            passed += 1
            if current_segment is not None:
                error_segments.append(current_segment)
                current_segment = None
        else:
            if current_segment is None:
                current_segment = {
                    "start_time": time_sec,
                    "end_time": time_sec,
                    "diffs": [diff_raw]
                }
            else:
                current_segment["end_time"] = time_sec
                current_segment["diffs"].append(diff_raw)
                
    if current_segment is not None:
        error_segments.append(current_segment)

    accuracy = (passed / total * 100.0) if total else 0.0
    mean_dev = float(np.mean(deviations)) if deviations else None
    
    # Process error segments: keep segments longer than 0.3s, compute avg
    processed_segments = []
    for seg in error_segments:
        duration = seg["end_time"] - seg["start_time"]
        if duration >= 0.3:
            avg_diff = float(np.mean(seg["diffs"]))
            processed_segments.append({
                "start_time": round(float(seg["start_time"]), 2),
                "end_time": round(float(seg["end_time"]), 2),
                "avg_cents_diff": round(avg_diff, 2)
            })
            
    # Sort by absolute severity and keep top 5
    processed_segments.sort(key=lambda x: abs(x["avg_cents_diff"]), reverse=True)
    top_segments = processed_segments[:5]

    # Phân tích nhịp (Rhythm analysis)
    rhythm_segments = []
    chunk_sec = 2.0
    chunk_frames = int(chunk_sec * SAMPLE_RATE / HOP_LENGTH)
    
    if len(wp) > 0:
        max_t_idx = max(t for s, t in wp)
        num_chunks = max_t_idx // chunk_frames + 1
        
        for i in range(num_chunks):
            start_t = i * chunk_frames
            end_t = (i + 1) * chunk_frames
            
            chunk_wp = [(s, t) for s, t in wp if start_t <= t < end_t]
            if not chunk_wp:
                continue
                
            t_voiced = sum(1 for s, t in chunk_wp if not np.isnan(f0_teacher[t]))
            if t_voiced < chunk_frames * 0.2:
                # Giao vien chu yeu im lang doan nay, bo qua
                continue
                
            s_indices = [s for s, t in chunk_wp]
            s_min, s_max = min(s_indices), max(s_indices)
            s_missing = sum(1 for s, t in chunk_wp if not np.isnan(f0_teacher[t]) and np.isnan(f0_student[s]))
            
            start_time = round(start_t * HOP_LENGTH / SAMPLE_RATE, 2)
            end_time = round(min(end_t, max_t_idx) * HOP_LENGTH / SAMPLE_RATE, 2)
            
            if s_missing > t_voiced * 0.5:
                rhythm_segments.append({
                    "start_time": start_time,
                    "end_time": end_time,
                    "status": "missing"
                })
                continue
            
            t_duration = len(set(t for s, t in chunk_wp))
            s_duration = s_max - s_min + 1
            if t_duration > 0:
                ratio = s_duration / t_duration
                if ratio > 1.3:
                    rhythm_segments.append({
                        "start_time": start_time,
                        "end_time": end_time,
                        "status": "slow"
                    })
                elif ratio < 0.75:
                    rhythm_segments.append({
                        "start_time": start_time,
                        "end_time": end_time,
                        "status": "fast"
                    })

    return {
        "pitch_accuracy_percent": round(accuracy, 2),
        "mean_deviation_cents": round(mean_dev, 2) if mean_dev is not None else None,
        "total_voiced_frames": total,
        "passed_frames": passed,
        "error_segments": top_segments,
        "rhythm_segments": rhythm_segments,
    }


def estimate_tempo(audio_path, sr=SAMPLE_RATE, hop_length=HOP_LENGTH):
    """Uoc luong tempo (BPM) cua ban ghi."""
    y, sr = librosa.load(audio_path, sr=sr)
    tempo, _ = librosa.beat.beat_track(y=y, sr=sr, hop_length=hop_length)
    return round(float(np.atleast_1d(tempo)[0]), 1)


def save_f0(f0, path):
    """Luu chuoi f0 ra JSON. NaN luu thanh null de doc lai duoc."""
    data = [None if np.isnan(x) else float(x) for x in f0]
    with open(path, "w", encoding="utf-8") as f:
        json.dump({"f0": data, "sr": SAMPLE_RATE, "hop_length": HOP_LENGTH}, f)


def load_f0(path):
    """Doc lai chuoi f0 da luu, chuyen null ve NaN."""
    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)
    return np.array(
        [np.nan if x is None else x for x in data["f0"]],
        dtype=float,
    )


def evaluate(student_audio_path, template_f0_path, instrument):
    """
    Diem vao chinh cho mot luot cham.
    instrument la dict cau hinh tu evaluator.instruments.
    """
    f0_student = extract_f0(
        student_audio_path,
        fmin=instrument["fmin"],
        fmax=instrument["fmax"],
    )
    f0_teacher = load_f0(template_f0_path)

    result = score_pitch(
        f0_student,
        f0_teacher,
        tolerance_cents=instrument["tolerance_cents"],
    )
    result["tempo_bpm"] = estimate_tempo(student_audio_path)
    result["instrument"] = instrument["name"]
    return result


def evaluate_pair(teacher_audio_path, student_audio_path, instrument):
    """
    Cham diem so truc tiep hai file: ban mau giao vien va ban hoc vien,
    khong dung template luu san. Trich f0 ca hai roi c012n DTW va cham cents.

    Tra ve them tempo cua ca hai ben de nguoi dung doi chieu nhip.
    """
    f0_teacher = extract_f0(
        teacher_audio_path,
        fmin=instrument["fmin"],
        fmax=instrument["fmax"],
    )
    f0_student = extract_f0(
        student_audio_path,
        fmin=instrument["fmin"],
        fmax=instrument["fmax"],
    )

    result = score_pitch(
        f0_student,
        f0_teacher,
        tolerance_cents=instrument["tolerance_cents"],
    )
    result["teacher_tempo_bpm"] = estimate_tempo(teacher_audio_path)
    result["student_tempo_bpm"] = estimate_tempo(student_audio_path)
    result["instrument"] = instrument["name"]
    return result
