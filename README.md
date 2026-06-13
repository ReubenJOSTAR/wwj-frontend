# WalkWithJesus Frontend

A modern Christian AI assistant built with Retrieval-Augmented Generation (RAG) to provide scripture-grounded encouragement, guidance, and biblical insights.

## Overview

WalkWithJesus is designed to help users find relevant Bible verses and receive compassionate, scripture-based responses through an AI-powered conversational experience.

The frontend provides an intuitive chat interface that communicates with the WalkWithJesus backend API, displaying AI responses alongside supporting biblical references.

---

## Features

### Current Planned Features

* Conversational AI chat interface
* Scripture-grounded responses
* Source attribution for retrieved Bible verses
* Responsive design for desktop and mobile
* Conversation history
* Real-time streaming responses
* Biblical reference display
* Loading and typing indicators

### Future Features

* User authentication
* Saved conversations
* Prayer journal integration
* Personalized devotional recommendations
* Daily verse notifications
* Multi-language support
* Church and ministry integrations

---

## Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS

### Backend

* Python
* FastAPI
* OpenAI API
* Vector Database (FAISS / future cloud vector store)

### AI Architecture

```text
User
  ↓
Frontend (Next.js)
  ↓
FastAPI Backend
  ↓
Retriever
  ↓
Vector Search
  ↓
Retrieved Scriptures
  ↓
OpenAI LLM
  ↓
Response Generation
  ↓
Frontend Display
```

---

## Project Structure

```text
frontend/
│
├── public/
│
├── src/
│   ├── app/
│   ├── components/
│   │   ├── Chat/
│   │   ├── Message/
│   │   ├── Sources/
│   │   └── Layout/
│   │
│   ├── hooks/
│   ├── lib/
│   ├── services/
│   ├── types/
│   └── utils/
│
├── .env.local
├── package.json
└── README.md
```

---

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

---

## API Integration

### Chat Endpoint

```http
POST /chat
```

Request:

```json
{
  "message": "I feel anxious about my future."
}
```

Response:

```json
{
  "response": "Philippians 4:6-7 reminds us...",
  "sources": [
    {
      "reference": "Philippians 4:6-7"
    },
    {
      "reference": "Isaiah 41:10"
    }
  ]
}
```

---

## User Experience Goals

The application should feel:

* Compassionate
* Calm
* Trustworthy
* Scripture-centered
* Easy to use
* Accessible

The interface should prioritize clarity and spiritual encouragement rather than overwhelming users with technical information.

---

## Design Principles

### Scripture First

Every response should be grounded in retrieved biblical content.

### Transparency

Users should always be able to see the scripture references used in a response.

### Simplicity

The UI should remain clean and distraction-free.

### Accessibility

The application should support users across devices and varying levels of technical ability.

---

## Development Roadmap

### Phase 1

* Chat interface
* API integration
* Response rendering

### Phase 2

* Source attribution UI
* Streaming responses
* Conversation history

### Phase 3

* User accounts
* Saved conversations
* Profile settings

### Phase 4

* Personalized recommendations
* Prayer journal
* Devotional features

### Phase 5

* Mobile application
* Notifications
* Advanced personalization

---

## Mission

WalkWithJesus exists to combine modern AI technology with biblical wisdom, helping people access scripture-based encouragement, guidance, and hope through a simple conversational experience.

The goal is not to replace pastors, churches, or spiritual communities, but to provide an accessible tool that helps users engage more deeply with God's Word.
