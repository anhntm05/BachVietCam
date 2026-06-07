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

    for s_idx, t_idx in wp:
        f_t = f0_teacher[t_idx]
        if np.isnan(f_t):
            continue
        total += 1
        f_s = f0_student[s_idx]
        if np.isnan(f_s):
            # Giao vien co tieng ma hoc vien im lang: tinh la sai.
            continue
        diff = abs(cents_diff(f_s, f_t))
        deviations.append(diff)
        if diff <= tolerance_cents:
            passed += 1

    accuracy = (passed / total * 100.0) if total else 0.0
    mean_dev = float(np.mean(deviations)) if deviations else None

    return {
        "pitch_accuracy_percent": round(accuracy, 2),
        "mean_deviation_cents": round(mean_dev, 2) if mean_dev is not None else None,
        "total_voiced_frames": total,
        "passed_frames": passed,
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
