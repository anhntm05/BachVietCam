'use client';

import React, { useState, useRef, useEffect } from 'react';
import EvaluationMetrics, { EvaluationResult } from './EvaluationMetrics';
import { useAudio } from '../hooks/useAudio';
import { Waveform } from './Waveform';

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

export default function StudioWorkspace() {
    const { isRecording, audioBlob, analyserNode, startRecording, stopRecording, resetAudio } = useAudio();

    const [studentMode, setStudentMode] = useState<'record' | 'upload'>('record');
    const [instrumentId, setInstrumentId] = useState('dan_bau');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<EvaluationResult | null>(null);

    const evaluationRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (result && evaluationRef.current) {
            // Add a small delay to ensure rendering is complete before scrolling
            setTimeout(() => {
                evaluationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }, [result]);

    // Files
    const [teacherFile, setTeacherFile] = useState<File | null>(null);
    const [studentFileName, setStudentFileName] = useState<string | null>(null);
    const [studentUploadedFile, setStudentUploadedFile] = useState<File | null>(null);

    const teacherInputRef = useRef<HTMLInputElement | null>(null);
    const studentInputRef = useRef<HTMLInputElement | null>(null);

    // Handlers
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
        const isValid = file && (file.type.startsWith('audio/') || file.type.startsWith('video/mp4') || /\.(mp3|wav|m4a|ogg|flac|webm)$/i.test(file.name));
        if (isValid) {
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
            setStudentUploadedFile(file);
        }
    };

    const handleStudentDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const file = e.dataTransfer.files?.[0];
        const isValid = file && (file.type.startsWith('audio/') || file.type.startsWith('video/mp4') || /\.(mp3|wav|m4a|ogg|flac|webm)$/i.test(file.name));
        if (isValid) {
            setResult(null);
            setStudentFileName(file.name);
            setStudentUploadedFile(file);
        } else {
            alert('Vui lòng chỉ kéo thả tệp âm thanh.');
        }
    };

    const handleSubmit = async () => {
        if (!teacherFile) {
            alert('Vui lòng tải lên bản mẫu của giáo viên trước.');
            return;
        }

        const finalStudentBlob = studentMode === 'record' ? audioBlob : studentUploadedFile;
        const finalStudentName = studentMode === 'record' ? 'student_take.wav' : (studentFileName || 'student_take.wav');

        if (!finalStudentBlob) {
            alert('Vui lòng ghi âm hoặc tải lên bản của học viên.');
            return;
        }

        setLoading(true);
        setResult(null);

        const formData = new FormData();
        formData.append('teacher', teacherFile, teacherFile.name);
        formData.append('student', finalStudentBlob, finalStudentName);
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

    const handleResetStudentUpload = () => {
        setStudentUploadedFile(null);
        setStudentFileName(null);
        setResult(null);
        if (studentInputRef.current) studentInputRef.current.value = '';
    };

    const handleResetTeacher = () => {
        setTeacherFile(null);
        setResult(null);
        if (teacherInputRef.current) teacherInputRef.current.value = '';
    };

    const currentStudentBlob = studentMode === 'record' ? audioBlob : studentUploadedFile;
    const canSubmit = !!teacherFile && !!currentStudentBlob && !isRecording && !loading;

    return (
        <section className="grid grid-cols-1 gap-gutter">
            {/* Top Section: Unified Practice Area */}
            <div className="bg-surface-container-low border border-primary/20 rounded-xl p-gutter flex flex-col gap-6">

                {/* Instrument Selection Header */}
                <div className="relative z-20">
                    {/* Click outside overlay */}
                    {isDropdownOpen && (
                        <div
                            className="fixed inset-0 z-10"
                            onClick={() => setIsDropdownOpen(false)}
                        />
                    )}

                    <div
                        className="relative z-20 flex justify-between items-center border-b border-primary/10 pb-4 cursor-pointer group"
                        onClick={() => {
                            if (!isRecording && !loading) {
                                setIsDropdownOpen(!isDropdownOpen);
                            }
                        }}
                    >
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">music_note</span>
                            <span className="font-headline-sm text-headline-sm text-on-background">
                                {INSTRUMENTS.find(i => i.id === instrumentId)?.label}
                            </span>
                        </div>

                        <div className={`w-12 h-12 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center group-hover:bg-primary/10 transition-all duration-300 pointer-events-none ${isDropdownOpen ? 'rotate-90 bg-primary/10' : 'rotate-0'}`}>
                            <span className="material-symbols-outlined text-primary">settings_input_component</span>
                        </div>
                    </div>

                    {/* Custom Dropdown List */}
                    <div className={`absolute top-full left-0 right-0 mt-2 z-30 bg-surface/95 backdrop-blur-xl border border-primary/20 rounded-xl shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${isDropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                        <div className="flex flex-col py-2 max-h-[300px] overflow-y-auto">
                            {INSTRUMENTS.map((it) => (
                                <div
                                    key={it.id}
                                    className={`px-4 py-3 hover:bg-primary/10 transition-colors flex items-center justify-between cursor-pointer ${it.id === instrumentId ? 'bg-primary/5' : ''}`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setInstrumentId(it.id);
                                        setResult(null);
                                        setIsDropdownOpen(false);
                                    }}
                                >
                                    <span className={`text-base ${it.id === instrumentId ? 'text-primary font-bold' : 'text-on-background font-medium'}`}>{it.label}</span>
                                    {it.id === instrumentId && <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Two Column Audio Area */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">

                    {/* Teacher Column */}
                    <div className="bg-surface-container-lowest/60 backdrop-blur-xl border border-primary/10 rounded-lg p-4 flex flex-col gap-4 relative">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-[20px]">school</span>
                            <h3 className="font-label-sm text-label-sm uppercase tracking-wider">Bản mẫu của giáo viên</h3>
                        </div>

                        {!teacherFile ? (
                            <div
                                className="flex-grow flex flex-col items-center justify-center border-2 border-dashed border-primary/30 rounded-lg p-4 cursor-pointer hover:bg-primary/5 transition-colors"
                                onDragOver={(e) => e.preventDefault()}
                                onDrop={handleTeacherDrop}
                                onClick={() => teacherInputRef.current?.click()}
                            >
                                <span className="text-sm font-semibold text-on-background text-center">Tải lên bản thu chuẩn của giáo viên</span>
                                <span className="text-xs text-on-surface-variant mt-1 text-center">MP3, WAV, WebM — tối đa 25MB</span>
                                <input type="file" ref={teacherInputRef} onChange={handleTeacherChange} accept="audio/*" className="hidden" />
                            </div>
                        ) : (
                            <div className="flex items-center gap-4 bg-surface/50 p-3 rounded-lg border border-primary/5">
                                <span className="material-symbols-outlined text-primary">music_note</span>
                                <div className="flex-grow overflow-hidden">
                                    <div className="text-sm font-bold truncate">{teacherFile.name}</div>
                                    <div className="text-xs text-primary font-semibold">Bản mẫu đã sẵn sàng</div>
                                </div>
                                <button onClick={handleResetTeacher} className="text-error hover:bg-error/10 p-1 rounded-full transition-colors">
                                    <span className="material-symbols-outlined text-[18px]">close</span>
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Student Column */}
                    <div className="bg-surface-container-lowest/60 backdrop-blur-xl border border-primary/10 rounded-lg p-4 flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-[20px]">mic</span>
                                <h3 className="font-label-sm text-label-sm uppercase tracking-wider">Bản thu của học viên</h3>
                            </div>
                            <div className="flex bg-surface-container-high rounded-lg p-1">
                                <button
                                    className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${studentMode === 'record' ? 'bg-primary-container text-on-primary-container shadow-sm' : 'text-on-surface-variant hover:text-primary'}`}
                                    onClick={() => { setStudentMode('record'); setResult(null); }}
                                >
                                    Thu trực tiếp
                                </button>
                                <button
                                    className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${studentMode === 'upload' ? 'bg-primary-container text-on-primary-container shadow-sm' : 'text-on-surface-variant hover:text-primary'}`}
                                    onClick={() => { setStudentMode('upload'); setResult(null); }}
                                >
                                    Tải tệp lên
                                </button>
                            </div>
                        </div>

                        {studentMode === 'record' ? (
                            <div className="flex flex-col gap-3">
                                <div className="w-full">
                                    <Waveform analyserNode={analyserNode} isRecording={isRecording} />
                                </div>

                                <div className="flex gap-3">
                                    {!isRecording ? (
                                        <button
                                            onClick={startRecording}
                                            disabled={loading}
                                            className="flex-1 py-2 px-4 rounded-lg bg-error/10 border border-error/20 text-error font-label-sm flex items-center justify-center gap-2 hover:bg-error/20 transition-colors disabled:opacity-50"
                                        >
                                            <span className="material-symbols-outlined text-[18px]">fiber_manual_record</span>
                                            {audioBlob ? 'Ghi âm lại' : 'Ghi âm mới'}
                                        </button>
                                    ) : (
                                        <button
                                            onClick={stopRecording}
                                            className="flex-1 py-2 px-4 rounded-lg bg-error border border-error text-white font-label-sm flex items-center justify-center gap-2 transition-colors hover:bg-error/90 shadow-lg shadow-error/20"
                                        >
                                            <span className="material-symbols-outlined text-[18px]">stop_circle</span>
                                            Dừng ghi
                                        </button>
                                    )}
                                </div>

                                {audioBlob && !isRecording && (
                                    <div className="flex flex-col gap-2 mt-2 p-3 bg-surface/30 rounded-lg border border-primary/10">
                                        <audio controls src={URL.createObjectURL(audioBlob)} className="w-full h-8 outline-none" />
                                        <div className="flex justify-between items-center mt-1">
                                            <a
                                                href={URL.createObjectURL(audioBlob)}
                                                download="student_take.wav"
                                                className="text-xs text-primary font-semibold hover:underline flex items-center gap-1"
                                            >
                                                <span className="material-symbols-outlined text-[16px]">download</span> Tải xuống
                                            </a>
                                            <button onClick={resetAudio} className="text-xs text-error font-semibold hover:underline flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[16px]">delete</span> Xóa bản thu
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="flex-grow flex flex-col justify-center">
                                {!studentUploadedFile ? (
                                    <div
                                        className="flex-grow flex flex-col items-center justify-center border-2 border-dashed border-primary/30 rounded-lg p-4 cursor-pointer hover:bg-primary/5 transition-colors min-h-[100px]"
                                        onDragOver={(e) => e.preventDefault()}
                                        onDrop={handleStudentDrop}
                                        onClick={() => studentInputRef.current?.click()}
                                    >
                                        <span className="text-sm font-semibold text-on-background text-center">Tải lên bản thu của học viên</span>
                                        <span className="text-xs text-on-surface-variant mt-1 text-center">MP3, WAV, WebM — tối đa 25MB</span>
                                        <input type="file" ref={studentInputRef} onChange={handleStudentChange} accept="audio/*" className="hidden" />
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-4 bg-surface/50 p-3 rounded-lg border border-primary/5">
                                        <span className="material-symbols-outlined text-primary">music_note</span>
                                        <div className="flex-grow overflow-hidden">
                                            <div className="text-sm font-bold truncate">{studentFileName}</div>
                                            <div className="text-xs text-primary font-semibold">Đã sẵn sàng phân tích</div>
                                        </div>
                                        <button onClick={handleResetStudentUpload} className="text-error hover:bg-error/10 p-1 rounded-full transition-colors">
                                            <span className="material-symbols-outlined text-[18px]">close</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                </div>

                {/* Submit Area */}
                <div className="mt-2">
                    <button
                        onClick={handleSubmit}
                        disabled={!canSubmit}
                        className={`w-full py-3 px-6 rounded-xl font-headline-sm text-base font-bold transition-all duration-300 flex items-center justify-center gap-2
                            ${canSubmit
                                ? 'bg-primary-container text-on-primary-container hover:shadow-lg hover:shadow-primary-container/30 cursor-pointer'
                                : 'bg-surface-variant text-on-surface-variant opacity-50 cursor-not-allowed'
                            }
                        `}
                    >
                        {loading ? (
                            <>
                                <span className="material-symbols-outlined animate-spin text-[20px]">progress_activity</span>
                                Đang xử lý chấm điểm...
                            </>
                        ) : (
                            <>
                                <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
                                Chấm Điểm Đối Chiếu
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Bottom Section: Full-width Evaluation */}
            {result && !loading && (
                <div ref={evaluationRef} className="scroll-mt-24">
                    <EvaluationMetrics result={result} />
                </div>
            )}

        </section>
    );
}
