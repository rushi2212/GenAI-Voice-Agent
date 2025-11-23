export interface TranscriptMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export type CallStatus = 'idle' | 'connecting' | 'active' | 'ended';

export interface VapiAssistantConfig {
  name?: string;
  model?: {
    provider?: string;
    model?: string;
    messages?: Array<{
      role: string;
      content: string;
    }>;
    knowledgeBase?: {
      provider?: string;
      fileIds?: string[];
    };
  };
  voice?: {
    provider?: string;
    voiceId?: string;
  };
  transcriber?: {
    provider?: string;
    model?: string;
    language?: string;
  };
  firstMessage?: string;
  endCallMessage?: string;
  voicemailMessage?: string;
}

export interface VapiConfig {
  publicKey: string;
  assistantId: string;
  assistantConfig?: VapiAssistantConfig;
}
