import { Phone, PhoneOff, Mic, MicOff } from 'lucide-react';
import { CallStatus } from '../types/vapi';

interface CallControlsProps {
  callStatus: CallStatus;
  isMuted: boolean;
  onStartCall: () => void;
  onEndCall: () => void;
  onToggleMute: () => void;
}

export const CallControls = ({
  callStatus,
  isMuted,
  onStartCall,
  onEndCall,
  onToggleMute,
}: CallControlsProps) => {
  const isCallActive = callStatus === 'active' || callStatus === 'connecting';

  return (
    <div className="flex items-center gap-4">
      {!isCallActive ? (
        <button
          onClick={onStartCall}
          disabled={callStatus === 'connecting'}
          className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors"
        >
          <Phone className="w-5 h-5" />
          {callStatus === 'connecting' ? 'Connecting...' : 'Start Call'}
        </button>
      ) : (
        <>
          <button
            onClick={onToggleMute}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
              isMuted
                ? 'bg-yellow-600 hover:bg-yellow-700 text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
            }`}
          >
            {isMuted ? (
              <>
                <MicOff className="w-5 h-5" />
                Unmute
              </>
            ) : (
              <>
                <Mic className="w-5 h-5" />
                Mute
              </>
            )}
          </button>
          <button
            onClick={onEndCall}
            className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
          >
            <PhoneOff className="w-5 h-5" />
            End Call
          </button>
        </>
      )}
    </div>
  );
};
