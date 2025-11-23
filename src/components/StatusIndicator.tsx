import { CallStatus } from '../types/vapi';

interface StatusIndicatorProps {
  status: CallStatus;
}

export const StatusIndicator = ({ status }: StatusIndicatorProps) => {
  const statusConfig = {
    idle: {
      text: 'Ready to start',
      color: 'bg-gray-500',
      animation: '',
    },
    connecting: {
      text: 'Connecting...',
      color: 'bg-yellow-500',
      animation: 'animate-pulse',
    },
    active: {
      text: 'Call in progress',
      color: 'bg-green-500',
      animation: 'animate-pulse',
    },
    ended: {
      text: 'Call ended',
      color: 'bg-red-500',
      animation: '',
    },
  };

  const config = statusConfig[status];

  return (
    <div className="flex items-center gap-1.5 sm:gap-2">
      <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${config.color} ${config.animation}`} />
      <span className="text-xs sm:text-sm font-medium text-gray-700">{config.text}</span>
    </div>
  );
};
