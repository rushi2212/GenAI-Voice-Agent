# GenAI Voice Agent 🎙️

A voice-enabled AI assistant powered by VAPI that specializes in Generative AI knowledge.

## Features ✨

- 🎤 **Voice Interaction** - Real-time voice conversations with AI
- 📝 **Live Transcription** - See conversation transcripts in real-time
- 🧠 **GenAI Expertise** - Specialized knowledge base on Generative AI
- 🎯 **GPT-5.1 Powered** - Using latest OpenAI model
- 🔇 **Mute Control** - Toggle microphone on/off during calls

## Quick Start 🚀

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure VAPI

Get your **VAPI Public Key** from [https://dashboard.vapi.ai/account](https://dashboard.vapi.ai/account)

Update `.env` file:
```env
VITE_VAPI_PUBLIC_KEY=your_actual_public_key_here
VITE_VAPI_ASSISTANT_ID=4a79350c-3c16-4df6-a09f-cc108f83405a
```

### 3. Run the App
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## How to Use 📖

1. **Start Call** - Click the "Start Call" button
2. **Speak** - Ask questions about Generative AI
3. **Mute/Unmute** - Use the microphone button to toggle audio
4. **End Call** - Click "End Call" when finished

## Assistant Configuration 🤖

**Voice**: Harry (VAPI)  
**Model**: GPT-5.1 Chat  
**Transcription**: Deepgram Nova-2  
**Language**: English

### Knowledge Base
The assistant uses a custom Generative AI PDF knowledge base and follows these principles:
- Prioritizes information from the knowledge base
- Generates answers when information isn't available in KB
- Maintains professional and courteous tone
- Provides concise, 2-4 sentence responses
- Offers helpful next steps after answering

## Troubleshooting 🔧

### "Vapi public key is not configured"
- Make sure you've added your public key to `.env`
- Restart the dev server after updating `.env`

### No Audio
- Check browser permissions for microphone access
- Ensure your microphone is working
- Try a different browser (Chrome recommended)

### Call Fails to Start
- Verify your VAPI public key is correct
- Check your internet connection
- Check browser console for error messages

## Tech Stack 💻

- **Frontend**: React + TypeScript + Vite
- **Voice AI**: VAPI
- **LLM**: OpenAI GPT-5.1
- **Transcription**: Deepgram Nova-2
- **Styling**: Tailwind CSS

## Project Structure 📁

```
src/
├── components/       # React components
│   ├── CallControls.tsx
│   ├── StatusIndicator.tsx
│   └── TranscriptDisplay.tsx
├── hooks/           # Custom React hooks
│   └── useVapi.ts
├── config/          # Configuration
│   └── vapi.ts
├── types/           # TypeScript types
│   └── vapi.ts
└── App.tsx          # Main app component
```

## License

MIT
