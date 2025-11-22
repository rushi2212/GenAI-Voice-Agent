import { useEffect, useRef } from 'react';
import { User, Bot } from 'lucide-react';
import { TranscriptMessage } from '../types/vapi';

interface TranscriptDisplayProps {
  transcript: TranscriptMessage[];
}

export const TranscriptDisplay = ({ transcript }: TranscriptDisplayProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [transcript]);

  if (transcript.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-500">
        <p>Start a call to see the conversation transcript</p>
      </div>
    );
  }

  return (
    <div
      ref={scrollRef}
      className="flex-1 overflow-y-auto space-y-4 p-6 bg-gray-50 rounded-lg"
    >
      {transcript.map((message, index) => (
        <div
          key={index}
          className={`flex gap-3 ${
            message.role === 'user' ? 'justify-end' : 'justify-start'
          }`}
        >
          {message.role === 'assistant' && (
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
          )}
          <div
            className={`max-w-2xl p-4 rounded-lg ${
              message.role === 'user'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-800 border border-gray-200'
            }`}
          >
            <p className="text-sm leading-relaxed">{message.content}</p>
            <span className="text-xs opacity-70 mt-2 block">
              {message.timestamp.toLocaleTimeString()}
            </span>
          </div>
          {message.role === 'user' && (
            <div className="flex-shrink-0 w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
