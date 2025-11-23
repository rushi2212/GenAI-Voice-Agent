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
    <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 flex-wrap justify-end sm:justify-start">
      {!isCallActive ? (
        <button
          onClick={onStartCall}
          disabled={callStatus === 'connecting'}
          className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors text-sm sm:text-base"
        >
          <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="hidden xs:inline">{callStatus === 'connecting' ? 'Connecting...' : 'Start Call'}</span>
          <span className="xs:hidden">{callStatus === 'connecting' ? 'Connecting' : 'Start'}</span>
        </button>
      ) : (
        <>
          <button
            onClick={onToggleMute}
            className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base ${
              isMuted
                ? 'bg-yellow-600 hover:bg-yellow-700 text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
            }`}
          >
            {isMuted ? (
              <>
                <MicOff className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Unmute</span>
              </>
            ) : (
              <>
                <Mic className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Mute</span>
              </>
            )}
          </button>
          <button
            onClick={onEndCall}
            className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors text-sm sm:text-base"
          >
            <PhoneOff className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden xs:inline">End Call</span>
            <span className="xs:hidden">End</span>
          </button>
        </>
      )}
    </div>
  );
};
