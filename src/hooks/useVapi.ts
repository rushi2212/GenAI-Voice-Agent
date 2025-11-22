import { useEffect, useRef, useState, useCallback } from 'react';
import Vapi from '@vapi-ai/web';
import { TranscriptMessage, CallStatus } from '../types/vapi';
import { vapiConfig } from '../config/vapi';

export const useVapi = () => {
  const vapiRef = useRef<Vapi | null>(null);
  const [callStatus, setCallStatus] = useState<CallStatus>('idle');
  const [transcript, setTranscript] = useState<TranscriptMessage[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (!vapiConfig.publicKey) {
      setError('Vapi public key is not configured');
      return;
    }

    vapiRef.current = new Vapi(vapiConfig.publicKey);

    const vapi = vapiRef.current;

    vapi.on('call-start', () => {
      setCallStatus('active');
      setError(null);
    });

    vapi.on('call-end', () => {
      setCallStatus('ended');
      setTimeout(() => {
        setCallStatus('idle');
      }, 2000);
    });

    vapi.on('speech-start', () => {
      console.log('Speech started');
    });

    vapi.on('speech-end', () => {
      console.log('Speech ended');
    });

    vapi.on('message', (message: { type: string; role?: string; transcript?: string; transcriptType?: string }) => {
      if (message.type === 'transcript' && message.transcript) {
        const role = message.role === 'user' ? 'user' : 'assistant';

        if (message.transcriptType === 'final') {
          setTranscript((prev) => [
            ...prev,
            {
              role,
              content: message.transcript!,
              timestamp: new Date(),
            },
          ]);
        }
      }
    });

    vapi.on('error', (err: Error) => {
      console.error('Vapi error:', err);
      setError(err.message || 'An error occurred during the call');
      setCallStatus('idle');
    });

    return () => {
      if (vapi) {
        vapi.stop();
      }
    };
  }, []);

  const startCall = useCallback(async () => {
    if (!vapiRef.current || !vapiConfig.assistantId) {
      setError('Vapi is not properly configured');
      return;
    }

    try {
      setCallStatus('connecting');
      setTranscript([]);
      setError(null);

      await vapiRef.current.start(vapiConfig.assistantId);
    } catch (err) {
      console.error('Failed to start call:', err);
      setError('Failed to start call. Please check your configuration.');
      setCallStatus('idle');
    }
  }, []);

  const endCall = useCallback(() => {
    if (vapiRef.current) {
      vapiRef.current.stop();
    }
  }, []);

  const toggleMute = useCallback(() => {
    if (vapiRef.current) {
      const newMutedState = !isMuted;
      vapiRef.current.setMuted(newMutedState);
      setIsMuted(newMutedState);
    }
  }, [isMuted]);

  return {
    callStatus,
    transcript,
    error,
    isMuted,
    startCall,
    endCall,
    toggleMute,
  };
};
