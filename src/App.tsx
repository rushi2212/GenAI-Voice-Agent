import { Brain } from 'lucide-react';
import { useVapi } from './hooks/useVapi';
import { CallControls } from './components/CallControls';
import { TranscriptDisplay } from './components/TranscriptDisplay';
import { StatusIndicator } from './components/StatusIndicator';

function App() {
  const { callStatus, transcript, error, isMuted, startCall, endCall, toggleMute } = useVapi();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8 max-w-6xl">
        <div className="bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <Brain className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
              </div>
              <div className="min-w-0">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white truncate">GenAI Mentor</h1>
                <p className="text-blue-100 text-xs sm:text-sm truncate">Your Generative AI Knowledge Expert</p>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 sm:mb-6">
              <StatusIndicator status={callStatus} />
              <CallControls
                callStatus={callStatus}
                isMuted={isMuted}
                onStartCall={startCall}
                onEndCall={endCall}
                onToggleMute={toggleMute}
              />
            </div>

            {error && (
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-xs sm:text-sm font-medium">Error: {error}</p>
                <p className="text-red-600 text-xs mt-1">
                  Make sure you have configured your Vapi public key in the .env file
                </p>
              </div>
            )}

            <div className="h-[400px] sm:h-[450px] lg:h-[500px] flex flex-col">
              <TranscriptDisplay transcript={transcript} />
            </div>
          </div>

          <div className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 border-t border-gray-200">
            <div className="text-xs sm:text-sm text-gray-600">
              <p className="font-medium mb-1 sm:mb-2">About this assistant:</p>
              <ul className="list-disc list-inside space-y-0.5 sm:space-y-1 text-xs">
                <li>Specialized in Generative AI concepts and technologies</li>
                <li>Powered by GPT-5.1 with custom knowledge base</li>
                <li>Voice interaction with real-time transcription</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
