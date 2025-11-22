import { VapiConfig } from '../types/vapi';

export const vapiConfig: VapiConfig = {
  publicKey: import.meta.env.VITE_VAPI_PUBLIC_KEY || '',
  assistantId: import.meta.env.VITE_VAPI_ASSISTANT_ID || '',
};
