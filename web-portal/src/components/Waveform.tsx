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

            // Nền tối sẫm màu Obsidian
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = '#170E17';
            ctx.fillRect(0, 0, width, height);

            // Vẽ lưới ma trận nền siêu nhẹ
            ctx.strokeStyle = 'rgba(24, 227, 243, 0.04)';
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
                // Ánh neon xanh lơ của MatchTune
                ctx.shadowColor = '#18E3F3';
                ctx.strokeStyle = '#40ecf8';
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
                // Sóng động màu xanh lơ ở trạng thái chờ
                ctx.lineWidth = 1.5;
                ctx.shadowBlur = 4;
                ctx.shadowColor = '#18E3F3';
                ctx.strokeStyle = 'rgba(24, 227, 243, 0.3)';
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
        <div style={styles.container}>
            <canvas ref={canvasRef} style={styles.canvas} />
            {isRecording && <div className="pulse-teal-dot" style={styles.pulseIndicator} />}
        </div>
    );
}

const styles: Record<string, React.CSSProperties> = {
    container: {
        position: 'relative',
        width: '100%',
        height: '120px',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid rgba(24, 227, 243, 0.16)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.4)'
    },
    canvas: {
        width: '100%',
        height: '100%',
        display: 'block'
    },
    pulseIndicator: {
        position: 'absolute',
        top: '12px',
        right: '12px',
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: '#18E3F3'
    }
};