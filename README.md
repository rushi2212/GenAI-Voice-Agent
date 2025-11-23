# GenAI Voice Agent

A modern voice AI assistant built with React, TypeScript, and Vapi AI. This project implements a LangChain RAG (Retrieval-Augmented Generation) knowledge agent that can answer questions using your custom knowledge base.

## Features

- 🎙️ **Voice Interaction** - Real-time voice conversations powered by Vapi AI
- 🧠 **RAG Knowledge Base** - LangChain integration with Google knowledge base provider
- 🎯 **Smart Responses** - GPT-4o model with custom system prompts
- 📝 **Live Transcription** - Deepgram Nova-2 transcription
- 🎨 **Modern UI** - Built with React and Tailwind CSS
- 🔊 **Voice Controls** - Mute/unmute, start/end call controls

## Assistant Configuration

The assistant is configured with:

- **Model**: GPT-4o (OpenAI)
- **Voice**: Elliot (Vapi)
- **Transcriber**: Nova-2 (Deepgram, English)
- **Knowledge Base**: Google provider with LangChain RAG pipeline
- **First Message**: "Hello. How are you?"
- **End Call Message**: "Goodbye."

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Vapi AI account and API key

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd GenAI-Voice-Agent
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

4. Add your Vapi credentials to `.env`:

```env
VITE_VAPI_PUBLIC_KEY=your_vapi_public_key_here
VITE_VAPI_ASSISTANT_ID=f11b859c-b835-43ec-8765-85eabc3b0a7f
```

## Usage

1. Start the development server:

```bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:5173`

3. Click the "Start Call" button to begin a voice conversation

4. The assistant will greet you and answer questions based on your knowledge base

## Project Structure

```text
src/
├── components/         # React components
│   ├── CallControls.tsx       # Call control buttons
│   ├── StatusIndicator.tsx    # Connection status display
│   └── TranscriptDisplay.tsx  # Conversation transcript
├── config/            # Configuration files
│   └── vapi.ts        # Vapi AI configuration
├── hooks/             # Custom React hooks
│   └── useVapi.ts     # Vapi integration hook
├── types/             # TypeScript type definitions
│   └── vapi.ts        # Vapi-related types
└── App.tsx            # Main application component
```

## Configuration

The assistant configuration is defined in `src/config/vapi.ts` and includes:

- **System Prompt**: Specialized knowledge assistant behavior
- **Model Settings**: GPT-4o with LangChain RAG integration
- **Voice Settings**: Elliot voice from Vapi
- **Transcriber Settings**: Deepgram Nova-2 for accurate transcription
- **Knowledge Base**: Google provider with file IDs for RAG retrieval

## Technologies Used

- **React** - UI framework
- **TypeScript** - Type-safe development
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Vapi AI** - Voice AI platform
- **LangChain** - RAG implementation
- **GPT-4o** - Language model
- **Deepgram** - Speech-to-text transcription

## License

MIT

