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

            mediaRecorder.onstop = () => {
                // Dữ liệu ghi ra là webm, để đúng nhãn cho khớp nội dung thật
                const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
                setAudioBlob(blob);
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