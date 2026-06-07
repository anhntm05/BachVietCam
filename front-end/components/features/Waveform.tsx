'use client';

import React, { useRef, useEffect } from 'react';

interface WaveformProps {
    analyserNode: AnalyserNode | null;
    isRecording: boolean;
}

export function Waveform({ analyserNode, isRecording }: WaveformProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const animationRef = useRef<number | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const dpr = window.devicePixelRatio || 1;
        canvas.width = canvas.clientWidth * dpr;
        canvas.height = canvas.clientHeight * dpr;
        ctx.scale(dpr, dpr);

        const width = canvas.clientWidth;
        const height = canvas.clientHeight;

        const bufferLength = analyserNode ? analyserNode.frequencyBinCount : 128;
        const dataArray = new Uint8Array(bufferLength);
        
        let idlePhase = 0;

        const draw = () => {
            animationRef.current = requestAnimationFrame(draw);

            // Nền sáng theo theme Bách Việt Cầm (surface-container-lowest: #ffffff)
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, width, height);

            // Vẽ lưới ma trận nền siêu nhẹ (primary/5)
            ctx.strokeStyle = 'rgba(115, 92, 0, 0.05)';
            ctx.lineWidth = 0.5;
            const gridSize = 15;
            for (let x = 0; x < width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }
            for (let y = 0; y < height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }

            if (isRecording && analyserNode) {
                analyserNode.getByteTimeDomainData(dataArray);

                ctx.lineWidth = 2.5;
                ctx.shadowBlur = 8;
                // Ánh vàng (primary-container)
                ctx.shadowColor = 'rgba(212, 175, 55, 0.6)';
                ctx.strokeStyle = '#d4af37';
                ctx.beginPath();

                const sliceWidth = width / bufferLength;
                let x = 0;

                for (let i = 0; i < bufferLength; i++) {
                    const v = dataArray[i] / 128.0;
                    const y = (v * height) / 2;

                    if (i === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                    x += sliceWidth;
                }

                ctx.lineTo(width, height / 2);
                ctx.stroke();
                ctx.shadowBlur = 0;
            } else {
                // Sóng động vàng nhạt ở trạng thái chờ
                ctx.lineWidth = 1.5;
                ctx.shadowBlur = 4;
                ctx.shadowColor = 'rgba(212, 175, 55, 0.3)';
                ctx.strokeStyle = 'rgba(212, 175, 55, 0.4)';
                ctx.beginPath();

                for (let x = 0; x < width; x++) {
                    const y = height / 2 + Math.sin(x * 0.02 + idlePhase) * 12 * Math.sin(x * 0.004);
                    if (x === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }
                ctx.stroke();
                ctx.shadowBlur = 0;
                idlePhase += 0.04;
            }
        };

        draw();

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [analyserNode, isRecording]);

    return (
        <div className="relative w-full h-[120px] rounded-lg overflow-hidden border border-primary/20 shadow-sm">
            <canvas ref={canvasRef} className="w-full h-full block" />
            {isRecording && <div className="pulse-gold-dot absolute top-3 right-3 w-2 h-2 rounded-full bg-primary-container" />}
        </div>
    );
}