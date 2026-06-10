import React from 'react';

export interface EvaluationResult {
    instrument: string;
    pitch_accuracy_percent: number;
    mean_deviation_cents: number | null;
    total_voiced_frames: number;
    passed_frames: number;
    teacher_tempo_bpm: number;
    student_tempo_bpm: number;
}

export function getScoreTheme(score: number) {
    if (score >= 80) return { 
        borderClass: 'border-green-500', 
        shadowClass: 'shadow-[0_0_20px_rgba(34,197,94,0.15)]', 
        textClass: 'text-green-500',
        bgClass: 'bg-green-500/10',
        label: 'Xuất sắc' 
    };
    if (score >= 50) return { 
        borderClass: 'border-yellow-500', 
        shadowClass: 'shadow-[0_0_20px_rgba(234,179,8,0.15)]', 
        textClass: 'text-yellow-500',
        bgClass: 'bg-yellow-500/10',
        label: 'Khá tốt' 
    };
    return { 
        borderClass: 'border-error', 
        shadowClass: 'shadow-[0_0_20px_rgba(186,26,26,0.15)]', 
        textClass: 'text-error',
        bgClass: 'bg-error/10',
        label: 'Cần cố gắng' 
    };
}

interface EvaluationMetricsProps {
    result: EvaluationResult;
}

export default function EvaluationMetrics({ result }: EvaluationMetricsProps) {
    const scoreTheme = getScoreTheme(result.pitch_accuracy_percent);

    return (
        <div className={`bg-surface-container-lowest border-2 rounded-xl p-gutter relative overflow-hidden lacquer-motif transition-all duration-300 ${scoreTheme.borderClass} ${scoreTheme.shadowClass}`}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                {/* Left: Metrics */}
                <div className="flex-grow w-full md:w-auto">
                    <div className="flex items-center gap-4 mb-6">
                        <span className={`px-4 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-widest border ${scoreTheme.borderClass} ${scoreTheme.textClass} ${scoreTheme.bgClass}`}>
                            {scoreTheme.label}
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                            {result.instrument.replace(/_/g, ' ').toUpperCase()}
                        </span>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <div className="flex justify-between items-center border-b border-dashed border-outline-variant/40 pb-2">
                            <span className="text-on-surface-variant font-medium">Nhịp giáo viên:</span>
                            <span className="font-bold text-on-background">{result.teacher_tempo_bpm} BPM</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-dashed border-outline-variant/40 pb-2">
                            <span className="text-on-surface-variant font-medium">Nhịp học viên:</span>
                            <span className="font-bold text-on-background">{result.student_tempo_bpm} BPM</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-dashed border-outline-variant/40 pb-2">
                            <span className="text-on-surface-variant font-medium">Sai lệch TB:</span>
                            <span className="font-bold text-on-background">
                              {result.mean_deviation_cents !== null ? `${result.mean_deviation_cents} cents` : '—'}
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-on-surface-variant font-medium">Khung khớp:</span>
                            <span className="font-bold text-on-background">{result.passed_frames}/{result.total_voiced_frames}</span>
                        </div>
                    </div>
                </div>

                {/* Right: Circular Indicator */}
                <div className="shrink-0 flex flex-col items-center justify-center">
                    <div className="w-48 h-48 rounded-full border-4 border-outline-variant/20 flex flex-col items-center justify-center relative bg-surface-container shadow-sm">
                        {/* Dynamic circular border overlay */}
                        <div className={`absolute inset-0 rounded-full border-4 border-t-transparent rotate-45 ${scoreTheme.borderClass}`}></div>
                        <span className={`text-4xl font-bold font-display-lg ${scoreTheme.textClass}`}>
                          {result.pitch_accuracy_percent}%
                        </span>
                        <span className="text-[10px] font-label-sm uppercase tracking-widest text-on-surface-variant mt-2 font-semibold">
                          Độ chính xác
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
