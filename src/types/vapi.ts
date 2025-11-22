export interface TranscriptMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export type CallStatus = 'idle' | 'connecting' | 'active' | 'ended';

export interface VapiConfig {
  publicKey: string;
  assistantId: string;
}
