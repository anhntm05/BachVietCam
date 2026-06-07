'use client';

import React, { useState, useRef } from 'react';
import { useAudio } from '../hooks/useAudio';
import { Waveform } from './Waveform';

// Khop dung response cua Django /api/evaluate-pair
interface EvaluationResult {
    instrument: string;
    pitch_accuracy_percent: number;
    mean_deviation_cents: number | null;
    total_voiced_frames: number;
    passed_frames: number;
    teacher_tempo_bpm: number;
    student_tempo_bpm: number;
}

const GATEWAY_URL =
    (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_GATEWAY_URL) ||
    'http://127.0.0.1:4000';

const INSTRUMENTS = [
    { id: 'dan_bau', label: 'Đàn Bầu (Monochord)' },
    { id: 'dan_nhi', label: 'Đàn Nhị (Two-string Fiddle)' },
    { id: 'dan_nguyet', label: 'Đàn Nguyệt (Moon Lute)' },
    { id: 'dan_tranh', label: 'Đàn Tranh (Zither)' },
    { id: 'dan_ty_ba', label: 'Đàn Tỳ Bà (Lute)' },
    { id: 'sao_truc', label: 'Sáo Trúc (Bamboo Flute)' },
];

export function AudioRecorder() {
    const { isRecording, audioBlob, analyserNode, startRecording, stopRecording, resetAudio, setAudioBlob } = useAudio();
    // Tab quyet dinh ban hoc vien lay tu dau: ghi truc tiep hay tai file
    const [studentMode, setStudentMode] = useState<'record' | 'upload'>('record');
    const [instrumentId, setInstrumentId] = useState('dan_bau');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<EvaluationResult | null>(null);

    // File mau giao vien (luon tai len, khong ghi truc tiep)
    const [teacherFile, setTeacherFile] = useState<File | null>(null);
    // Ten file hoc vien khi tai len (che do upload)
    const [studentFileName, setStudentFileName] = useState<string | null>(null);

    const teacherInputRef = useRef<HTMLInputElement | null>(null);
    const studentInputRef = useRef<HTMLInputElement | null>(null);

    const handleTeacherChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setResult(null);
            setTeacherFile(file);
        }
    };

    const handleTeacherDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const file = e.dataTransfer.files?.[0];
        if (file && file.type.startsWith('audio/')) {
            setResult(null);
            setTeacherFile(file);
        } else {
            alert('Vui lòng chỉ kéo thả tệp âm thanh.');
        }
    };

    const handleStudentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setResult(null);
            setStudentFileName(file.name);
            setAudioBlob(file);
        }
    };

    const handleStudentDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const file = e.dataTransfer.files?.[0];
        if (file && file.type.startsWith('audio/')) {
            setResult(null);
            setStudentFileName(file.name);
            setAudioBlob(file);
        } else {
            alert('Vui lòng chỉ kéo thả tệp âm thanh.');
        }
    };

    const handleSubmit = async () => {
        if (!teacherFile) {
            alert('Vui lòng tải lên bản mẫu của giáo viên trước.');
            return;
        }
        if (!audioBlob) {
            alert('Vui lòng ghi âm hoặc tải lên bản của học viên.');
            return;
        }

        setLoading(true);
        setResult(null);

        const formData = new FormData();
        formData.append('teacher', teacherFile, teacherFile.name);
        formData.append('student', audioBlob, studentFileName || 'student_take.webm');
        formData.append('instrument_id', instrumentId);

        try {
            const response = await fetch(`${GATEWAY_URL}/api/evaluate-pair`, {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || 'Yêu cầu chấm điểm thất bại.');
            }
            setResult(data as EvaluationResult);
        } catch (error) {
            const msg = error instanceof Error ? error.message : 'Lỗi kết nối tới Gateway.';
            alert(msg);
        } finally {
            setLoading(false);
        }
    };

    const handleResetStudent = () => {
        resetAudio();
        setStudentFileName(null);
        setResult(null);
        if (studentInputRef.current) studentInputRef.current.value = '';
    };

    const handleResetTeacher = () => {
        setTeacherFile(null);
        setResult(null);
        if (teacherInputRef.current) teacherInputRef.current.value = '';
    };

    const getScoreTheme = (score: number) => {
        if (score >= 85) return { color: '#18E3F3', glow: 'rgba(24,227,243,0.15)', label: 'Xuất sắc' };
        if (score >= 70) return { color: '#f59e0b', glow: 'rgba(245,158,11,0.15)', label: 'Khá tốt' };
        return { color: '#ef4444', glow: 'rgba(239,68,68,0.15)', label: 'Cần cố gắng' };
    };

    const scoreTheme = result ? getScoreTheme(result.pitch_accuracy_percent) : null;
    const canSubmit = !!teacherFile && !!audioBlob && !isRecording && !loading;

    return (
        <div style={styles.card} className="glass-panel">
            <style>{`
                @keyframes pulseDot {
                    0% { transform: scale(0.9); opacity: 0.6; box-shadow: 0 0 0 0 rgba(24, 227, 243, 0.5); }
                    70% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 10px rgba(24, 227, 243, 0); }
                    100% { transform: scale(0.9); opacity: 0.6; box-shadow: 0 0 0 0 rgba(24, 227, 243, 0); }
                }
                @keyframes breatheGlow {
                    0% { box-shadow: 0 0 16px rgba(24, 227, 243, 0.25); }
                    100% { box-shadow: 0 0 36px rgba(24, 227, 243, 0.65); }
                }
                .breathe-neon-btn { animation: breatheGlow 1.8s infinite alternate; }
            `}</style>

            {/* Header */}
            <div style={styles.cardHeader}>
                <span style={styles.headerTitle}>Chấm điểm đối chiếu</span>
                <span style={styles.liveBadge}>SO TRỰC TIẾP 2 BẢN</span>
            </div>

            {/* Bo chon nhac cu */}
            <div style={styles.field}>
                <label style={styles.label}>Nhạc cụ đối chiếu</label>
                <select
                    value={instrumentId}
                    onChange={(e) => {
                        setInstrumentId(e.target.value);
                        setResult(null);
                    }}
                    style={styles.select}
                    disabled={isRecording || loading}
                >
                    {INSTRUMENTS.map((it) => (
                        <option key={it.id} value={it.id}>{it.label}</option>
                    ))}
                </select>
            </div>

            {/* O 1: BAN MAU GIAO VIEN */}
            <div style={styles.field}>
                <label style={styles.label}>
                    <span style={styles.stepNum}>1</span> Bản mẫu của giáo viên
                </label>
                {!teacherFile ? (
                    <div
                        style={styles.uploadAreaSmall}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={handleTeacherDrop}
                        onClick={() => teacherInputRef.current?.click()}
                    >
                        <span style={styles.uploadText}>Tải lên bản thu chuẩn của giáo viên</span>
                        <span style={styles.uploadSubText}>MP3, WAV, WebM — tối đa 25MB</span>
                        <input
                            type="file"
                            ref={teacherInputRef}
                            onChange={handleTeacherChange}
                            accept="audio/*"
                            style={{ display: 'none' }}
                        />
                    </div>
                ) : (
                    <div style={styles.fileInfo}>
                        <span style={styles.fileIcon}>♪</span>
                        <div style={styles.fileMeta}>
                            <span style={styles.fileName}>{teacherFile.name}</span>
                            <span style={styles.fileReadyBadge}>Bản mẫu đã sẵn sàng</span>
                        </div>
                        <button style={styles.btnRemoveFile} onClick={handleResetTeacher} aria-label="Xóa">✕</button>
                    </div>
                )}
            </div>

            {/* O 2: BAN HOC VIEN (ghi truc tiep hoac tai len) */}
            <div style={styles.field}>
                <label style={styles.label}>
                    <span style={styles.stepNum}>2</span> Bản trình diễn của học viên
                </label>

                <div style={styles.subTabContainer}>
                    <button
                        style={{ ...styles.subTab, ...(studentMode === 'record' ? styles.subTabActive : {}) }}
                        onClick={() => { setStudentMode('record'); handleResetStudent(); }}
                    >
                        Thu trực tiếp
                    </button>
                    <button
                        style={{ ...styles.subTab, ...(studentMode === 'upload' ? styles.subTabActive : {}) }}
                        onClick={() => { setStudentMode('upload'); handleResetStudent(); }}
                    >
                        Tải tệp lên
                    </button>
                </div>

                {studentMode === 'record' ? (
                    <div>
                        <div style={styles.waveformWrapper}>
                            <Waveform analyserNode={analyserNode} isRecording={isRecording} />
                        </div>
                        <div style={styles.actions}>
                            {!isRecording ? (
                                <button onClick={startRecording} disabled={loading} style={styles.btnRecord}>
                                    {audioBlob ? 'Ghi lại' : 'Ghi âm mới'}
                                </button>
                            ) : (
                                <button onClick={stopRecording} style={styles.btnStop}>
                                    Dừng ghi
                                </button>
                            )}
                        </div>
                    </div>
                ) : (
                    !audioBlob ? (
                        <div
                            style={styles.uploadAreaSmall}
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={handleStudentDrop}
                            onClick={() => studentInputRef.current?.click()}
                        >
                            <span style={styles.uploadText}>Tải lên bản thu của học viên</span>
                            <span style={styles.uploadSubText}>MP3, WAV, WebM — tối đa 25MB</span>
                            <input
                                type="file"
                                ref={studentInputRef}
                                onChange={handleStudentChange}
                                accept="audio/*"
                                style={{ display: 'none' }}
                            />
                        </div>
                    ) : (
                        <div style={styles.fileInfo}>
                            <span style={styles.fileIcon}>♪</span>
                            <div style={styles.fileMeta}>
                                <span style={styles.fileName}>{studentFileName}</span>
                                <span style={styles.fileReadyBadge}>Đã sẵn sàng phân tích</span>
                            </div>
                            <button style={styles.btnRemoveFile} onClick={handleResetStudent} aria-label="Xóa">✕</button>
                        </div>
                    )
                )}
            </div>

            {/* NUT CHAM DIEM */}
            <button
                onClick={handleSubmit}
                disabled={!canSubmit}
                style={{ ...styles.btnSubmitFull, opacity: canSubmit ? 1 : 0.45, cursor: canSubmit ? 'pointer' : 'not-allowed' }}
                className={canSubmit ? 'breathe-neon-btn' : undefined}
            >
                {loading ? 'Đang chấm điểm...' : 'Chấm điểm'}
            </button>

            {/* BANG KET QUA */}
            {result && scoreTheme && (
                <div style={{ ...styles.resultBox, borderColor: scoreTheme.color, boxShadow: `0 0 20px ${scoreTheme.glow}` }}>
                    <div style={styles.resultHeader}>
                        <span style={{ ...styles.scoreLabelBadge, color: scoreTheme.color, borderColor: scoreTheme.color }}>
                            {scoreTheme.label.toUpperCase()}
                        </span>
                        <span style={styles.metaInstrument}>{result.instrument.toUpperCase()}</span>
                    </div>

                    <div style={styles.resultContent}>
                        <div style={styles.metrics}>
                            <div style={styles.metricRow}>
                                <span style={styles.metricLabel}>Nhịp giáo viên:</span>
                                <span style={styles.metricValue}>{result.teacher_tempo_bpm} BPM</span>
                            </div>
                            <div style={styles.metricRow}>
                                <span style={styles.metricLabel}>Nhịp học viên:</span>
                                <span style={styles.metricValue}>{result.student_tempo_bpm} BPM</span>
                            </div>
                            <div style={styles.metricRow}>
                                <span style={styles.metricLabel}>Sai lệch TB:</span>
                                <span style={styles.metricValue}>
                                    {result.mean_deviation_cents !== null ? `${result.mean_deviation_cents} cents` : '—'}
                                </span>
                            </div>
                            <div style={{ ...styles.metricRow, borderBottom: 'none' }}>
                                <span style={styles.metricLabel}>Khung khớp:</span>
                                <span style={styles.metricValue}>{result.passed_frames}/{result.total_voiced_frames}</span>
                            </div>
                        </div>

                        <div style={styles.circularBadge}>
                            <span style={{ ...styles.circularValue, color: scoreTheme.color }}>
                                {result.pitch_accuracy_percent}%
                            </span>
                            <span style={styles.circularText}>ĐỘ CHÍNH XÁC</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

const styles: Record<string, React.CSSProperties> = {
    card: {
        width: '100%',
        maxWidth: '520px',
        margin: '0 auto',
        backgroundColor: 'rgba(23, 14, 23, 0.65)',
        border: '1px solid rgba(24, 227, 243, 0.16)',
        borderRadius: '20px',
        padding: '32px',
        boxShadow: '0 20px 40px -15px rgba(0,0,0,0.5)',
        position: 'relative',
        zIndex: 10,
    },
    cardHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px',
        paddingBottom: '16px',
        borderBottom: '1px solid rgba(24, 227, 243, 0.08)',
    },
    headerTitle: {
        fontFamily: "'Archivo', sans-serif",
        fontSize: '16px',
        fontWeight: 600,
        color: '#eef4f8',
    },
    liveBadge: {
        fontSize: '9px',
        fontWeight: 800,
        color: '#18E3F3',
        backgroundColor: 'rgba(24, 227, 243, 0.13)',
        padding: '4px 10px',
        borderRadius: '30px',
        letterSpacing: '0.08em',
    },
    field: { marginBottom: '22px' },
    label: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '11px',
        fontWeight: 700,
        color: '#7a9ab0',
        textTransform: 'uppercase',
        letterSpacing: '0.04em',
        marginBottom: '10px',
    },
    stepNum: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '18px',
        height: '18px',
        borderRadius: '50%',
        backgroundColor: 'rgba(24, 227, 243, 0.15)',
        color: '#18E3F3',
        fontSize: '10px',
        fontWeight: 800,
    },
    select: {
        width: '100%',
        padding: '12px 16px',
        borderRadius: '10px',
        border: '1px solid rgba(24, 227, 243, 0.18)',
        backgroundColor: '#170E17',
        fontSize: '14px',
        color: '#f8fafc',
        outline: 'none',
        cursor: 'pointer',
    },
    subTabContainer: {
        display: 'flex',
        gap: '8px',
        marginBottom: '14px',
    },
    subTab: {
        flex: 1,
        padding: '8px 12px',
        borderRadius: '8px',
        border: '1px solid rgba(24, 227, 243, 0.16)',
        backgroundColor: 'transparent',
        color: '#64748b',
        fontFamily: "'Poppins', sans-serif",
        fontSize: '12px',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        outline: 'none',
    },
    subTabActive: {
        backgroundColor: 'rgba(24, 227, 243, 0.1)',
        color: '#18E3F3',
        borderColor: 'rgba(24, 227, 243, 0.4)',
    },
    waveformWrapper: { marginBottom: '16px' },
    actions: { display: 'flex', gap: '12px' },
    btnRecord: {
        flex: 1,
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        color: '#ef4444',
        border: '1px solid rgba(239, 68, 68, 0.4)',
        padding: '14px 20px',
        borderRadius: '10px',
        fontWeight: 700,
        fontSize: '13px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
    },
    btnStop: {
        flex: 1,
        backgroundColor: '#ef4444',
        color: '#ffffff',
        border: 'none',
        padding: '14px 20px',
        borderRadius: '10px',
        fontWeight: 700,
        fontSize: '13px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
    },
    uploadAreaSmall: {
        width: '100%',
        minHeight: '90px',
        border: '2px dashed rgba(24, 227, 243, 0.3)',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '18px',
        cursor: 'pointer',
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
        transition: 'all 0.25s ease',
        gap: '4px',
    },
    uploadText: {
        display: 'block',
        width: '100%',
        fontSize: '13px',
        fontWeight: 600,
        color: '#eef4f8',
        textAlign: 'center',
        lineHeight: 1.4,
    },
    uploadSubText: {
        display: 'block',
        width: '100%',
        fontSize: '11px',
        color: '#7a9ab0',
        textAlign: 'center',
        lineHeight: 1.4,
    },
    fileInfo: {
        display: 'flex',
        alignItems: 'center',
        padding: '14px 16px',
        backgroundColor: '#170E17',
        border: '1px solid rgba(24, 227, 243, 0.16)',
        borderRadius: '10px',
        position: 'relative',
    },
    fileIcon: {
        fontSize: '20px',
        color: '#18E3F3',
        marginRight: '12px',
    },
    fileMeta: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        overflow: 'hidden',
    },
    fileName: {
        fontSize: '13px',
        fontWeight: 700,
        color: '#f8fafc',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        paddingRight: '24px',
    },
    fileReadyBadge: {
        fontSize: '10px',
        color: '#18E3F3',
        fontWeight: 600,
        marginTop: '2px',
    },
    btnRemoveFile: {
        position: 'absolute',
        top: '50%',
        right: '14px',
        transform: 'translateY(-50%)',
        background: 'none',
        border: 'none',
        color: '#ef4444',
        cursor: 'pointer',
        fontSize: '14px',
        outline: 'none',
    },
    btnSubmitFull: {
        width: '100%',
        backgroundColor: '#18E3F3',
        color: '#170E17',
        border: 'none',
        padding: '15px 20px',
        borderRadius: '10px',
        fontWeight: 700,
        fontSize: '13px',
        transition: 'all 0.2s ease',
        marginTop: '4px',
    },
    resultBox: {
        borderRadius: '14px',
        borderWidth: '1px',
        borderStyle: 'solid',
        padding: '24px',
        backgroundColor: 'rgba(23, 14, 23, 0.8)',
        marginTop: '24px',
    },
    resultHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
    },
    scoreLabelBadge: {
        fontSize: '10px',
        fontWeight: 800,
        padding: '4px 12px',
        borderRadius: '30px',
        border: '1px solid',
        backgroundColor: 'rgba(23, 14, 23, 0.3)',
    },
    metaInstrument: {
        fontSize: '10px',
        fontWeight: 700,
        color: '#7a9ab0',
        letterSpacing: '0.06em',
    },
    resultContent: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '24px',
    },
    metrics: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
    },
    metricRow: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '12px',
        color: '#cbd5e1',
        borderBottom: '1px dashed rgba(24, 227, 243, 0.16)',
        paddingBottom: '7px',
    },
    metricLabel: { fontWeight: 500, color: '#7a9ab0' },
    metricValue: { fontWeight: 700 },
    circularBadge: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '92px',
        height: '92px',
        flexShrink: 0,
        backgroundColor: '#170E17',
        border: '1px solid rgba(24, 227, 243, 0.2)',
        borderRadius: '50%',
        boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
    },
    circularValue: {
        fontSize: '20px',
        fontWeight: 900,
        letterSpacing: '-0.02em',
    },
    circularText: {
        fontSize: '8px',
        color: '#7a9ab0',
        fontWeight: 700,
        marginTop: '3px',
        letterSpacing: '0.04em',
    },
};