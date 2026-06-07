/**
 * Hook tùy biến quản lý ghi âm và cung cấp AnalyserNode
 * để trực quan hóa sóng âm thời gian thực bằng Web Audio API.
 */

import { useState, useRef, useEffect } from 'react';

export interface UseAudioReturn {
    isRecording: boolean;
    audioBlob: Blob | null;
    analyserNode: AnalyserNode | null;
    startRecording: () => Promise<void>;
    stopRecording: () => void;
    resetAudio: () => void;
    setAudioBlob: (blob: Blob | null) => void;
}

export function useAudio(): UseAudioReturn {
    const [isRecording, setIsRecording] = useState(false);
    const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
    const [analyserNode, setAnalyserNode] = useState<AnalyserNode | null>(null);

    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioContextRef = useRef<AudioContext | null>(null);
    const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
    const streamRef = useRef<MediaStream | null>(null);
    const chunksRef = useRef<Blob[]>([]);

    const startRecording = async () => {
        chunksRef.current = [];
        setAudioBlob(null);

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            streamRef.current = stream;

            // Thiết lập Web Audio API để phân tích sóng âm phục vụ vẽ đồ thị
            const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
            const audioCtx = new AudioContextClass();
            const analyser = audioCtx.createAnalyser();
            analyser.fftSize = 256; // Kích thước mẫu FFT cho dải tần số phẳng mượt

            const source = audioCtx.createMediaStreamSource(stream);
            source.connect(analyser);

            audioContextRef.current = audioCtx;
            sourceRef.current = source;
            setAnalyserNode(analyser);

            // Ghi âm tệp
            const mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    chunksRef.current.push(event.data);
                }
            };

            mediaRecorder.onstop = async () => {
                // Dữ liệu gốc là webm
                const webmBlob = new Blob(chunksRef.current, { type: 'audio/webm' });
                try {
                    // Chuyển đổi WebM sang WAV ngay trên trình duyệt
                    const wavBlob = await convertWebmToWav(webmBlob);
                    setAudioBlob(wavBlob);
                } catch (err) {
                    console.error('Lỗi chuyển đổi âm thanh sang WAV:', err);
                    setAudioBlob(webmBlob); // Fallback
                }
                cleanupAudioContext();
            };

            mediaRecorderRef.current = mediaRecorder;
            mediaRecorder.start();
            setIsRecording(true);
        } catch (err) {
            console.error('Không thể truy cập thiết bị Micro:', err);
            alert('Vui lòng cấp quyền truy cập thiết bị Micro để tiếp tục bài thực hành.');
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
    };

    const resetAudio = () => {
        setAudioBlob(null);
        setAnalyserNode(null);
    };

    const cleanupAudioContext = () => {
        if (sourceRef.current) sourceRef.current.disconnect();
        if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
            audioContextRef.current.close();
        }
    };

    // Đảm bảo tắt mọi kết nối phần cứng khi component bị hủy (unmount)
    useEffect(() => {
        return () => {
            if (streamRef.current) {
                streamRef.current.getTracks().forEach((track) => track.stop());
            }
            cleanupAudioContext();
        };
    }, []);

    return {
        isRecording,
        audioBlob,
        analyserNode,
        startRecording,
        stopRecording,
        resetAudio,
        setAudioBlob,
    };
}

// ==========================================
// WebM to WAV Conversion Utilities
// ==========================================

async function convertWebmToWav(webmBlob: Blob): Promise<Blob> {
    const arrayBuffer = await webmBlob.arrayBuffer();
    // Sử dụng Web Audio API để giải mã dữ liệu âm thanh
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    const audioContext = new AudioContextClass();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    
    // Đóng gói lại thành định dạng chuẩn WAV
    const wavBuffer = audioBufferToWav(audioBuffer);
    return new Blob([wavBuffer], { type: 'audio/wav' });
}

function audioBufferToWav(buffer: AudioBuffer): ArrayBuffer {
    const numChannels = buffer.numberOfChannels;
    const sampleRate = buffer.sampleRate;
    const format = 1; // PCM
    const bitDepth = 16;
    
    let result: Float32Array;
    if (numChannels === 2) {
        // Interleave channels
        const channel0 = buffer.getChannelData(0);
        const channel1 = buffer.getChannelData(1);
        const length = channel0.length + channel1.length;
        result = new Float32Array(length);
        for (let i = 0, j = 0; i < channel0.length; i++) {
            result[j++] = channel0[i];
            result[j++] = channel1[i];
        }
    } else {
        result = buffer.getChannelData(0);
    }
    
    return encodeWAV(result, format, sampleRate, numChannels, bitDepth);
}

function encodeWAV(samples: Float32Array, format: number, sampleRate: number, numChannels: number, bitDepth: number): ArrayBuffer {
    const bytesPerSample = bitDepth / 8;
    const blockAlign = numChannels * bytesPerSample;
    const buffer = new ArrayBuffer(44 + samples.length * bytesPerSample);
    const view = new DataView(buffer);
    
    // RIFF identifier
    writeString(view, 0, 'RIFF');
    // RIFF chunk length
    view.setUint32(4, 36 + samples.length * bytesPerSample, true);
    // RIFF type
    writeString(view, 8, 'WAVE');
    // format chunk identifier
    writeString(view, 12, 'fmt ');
    // format chunk length
    view.setUint32(16, 16, true);
    // sample format (raw)
    view.setUint16(20, format, true);
    // channel count
    view.setUint16(22, numChannels, true);
    // sample rate
    view.setUint32(24, sampleRate, true);
    // byte rate (sample rate * block align)
    view.setUint32(28, sampleRate * blockAlign, true);
    // block align (channel count * bytes per sample)
    view.setUint16(32, blockAlign, true);
    // bits per sample
    view.setUint16(34, bitDepth, true);
    // data chunk identifier
    writeString(view, 36, 'data');
    // data chunk length
    view.setUint32(40, samples.length * bytesPerSample, true);
    
    floatTo16BitPCM(view, 44, samples);
    
    return buffer;
}

function writeString(view: DataView, offset: number, string: string) {
    for (let i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
    }
}

function floatTo16BitPCM(output: DataView, offset: number, input: Float32Array) {
    for (let i = 0; i < input.length; i++, offset += 2) {
        let s = Math.max(-1, Math.min(1, input[i]));
        output.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
    }
}