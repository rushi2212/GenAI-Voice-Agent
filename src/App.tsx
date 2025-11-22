import { Brain } from 'lucide-react';
import { useVapi } from './hooks/useVapi';
import { CallControls } from './components/CallControls';
import { TranscriptDisplay } from './components/TranscriptDisplay';
import { StatusIndicator } from './components/StatusIndicator';

function App() {
  const { callStatus, transcript, error, isMuted, startCall, endCall, toggleMute } = useVapi();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Brain className="w-7 h-7 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">GenAI Mentor</h1>
                <p className="text-blue-100 text-sm">Your Generative AI Knowledge Expert</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
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
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-sm font-medium">Error: {error}</p>
                <p className="text-red-600 text-xs mt-1">
                  Make sure you have configured your Vapi public key in the .env file
                </p>
              </div>
            )}

            <div className="h-[500px] flex flex-col">
              <TranscriptDisplay transcript={transcript} />
            </div>
          </div>

          <div className="bg-gray-50 px-8 py-4 border-t border-gray-200">
            <div className="text-sm text-gray-600">
              <p className="font-medium mb-2">About this assistant:</p>
              <ul className="list-disc list-inside space-y-1 text-xs">
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
