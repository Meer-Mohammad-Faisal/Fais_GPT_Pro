# FaisGPT

## LLM-Powered Conversational Chat Assistant

GitHub: https://github.com/Meer-Mohammad-Faisal/Fais_GPT_Pro
Live Demo: [your-live-demo-link.com]
Python | Node.js | React | TypeScript | OpenAI API | PostgreSQL | Redis | Docker

---

## Overview

FaisGPT is a custom AI conversational assistant that provides intelligent, context-aware responses using Large Language Models. It supports multi-turn conversations with contextual memory, session continuity, and personalized responses based on user history. The platform is designed to be extensible for various use cases including customer support, personal assistant, and educational tutoring.

### Why I Built This

Most LLM chat interfaces treat each conversation as independent. FaisGPT adds contextual memory and session continuity, making conversations feel natural and coherent. The assistant remembers what was discussed earlier and uses that context to provide better responses.

---

## Key Features

Multi-turn Conversations: Maintains context across multiple messages
Contextual Memory: Reminds previous messages within a session
Session Continuity: Persistent chat history across browser sessions
Streaming Responses: Real-time token-by-token response generation
User Authentication: Secure JWT-based login
Chat History: View and revisit past conversations
Customizable Prompts: System prompts tailored for different use cases
Rate Limiting: Prevents abuse and manages API costs

---

## Tech Stack

### Frontend
React.js - UI framework
TypeScript - Type safety
Tailwind CSS - Styling
Axios - API calls
React Markdown - Render markdown responses

### Backend
Node.js - API gateway
Express.js - REST API framework
Python - LLM service
JWT - Authentication

### AI and LLM
OpenAI API - GPT-4 and GPT-3.5
Groq API - Fast inference
Prompt Engineering - System and user prompts

### Database
PostgreSQL - User data, chat history
Redis - Session caching, rate limiting

### DevOps
Docker - Containerization
AWS EC2 - Deployment
GitHub Actions - CI/CD

---

## Project Structure

FaisGPT/
├── frontend/
│   ├── src/
│   │   ├── components/     # ChatWindow, MessageList, InputBar
│   │   ├── pages/          # Chat, Login, Register, History
│   │   ├── services/       # API service layer
│   │   ├── store/          # Redux state
│   │   └── hooks/          # Custom React hooks
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── controllers/    # Auth, Chat, History handlers
│   │   ├── models/         # User, Conversation, Message schemas
│   │   ├── routes/         # API routes
│   │   ├── middleware/     # Auth, validation, rate limiting
│   │   └── services/       # LLM service client
│   └── package.json
├── llm-service/
│   ├── app.py              # FastAPI LLM service
│   ├── prompts/            # System prompt templates
│   ├── memory/             # Context management
│   └── requirements.txt
├── docker-compose.yml
├── .github/workflows/
└── README.md

---

## Getting Started

### Prerequisites

Node.js: 18.x or higher
Python: 3.9 or higher
PostgreSQL: 14.x or higher
Redis: 7.x or higher
Docker: 20.x or higher

### Installation

1. Clone the repository

git clone https://github.com/Meer-Mohammad-Faisal/FaisGPT.git
cd FaisGPT

2. Set up environment variables

cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
cp llm-service/.env.example llm-service/.env

Add your OpenAI API key, database URLs, and JWT secret to the .env files.

3. Run with Docker (Recommended)

docker-compose up --build

4. Or run manually

Backend:
cd backend
npm install
npm run dev

Frontend:
cd frontend
npm install
npm start

LLM Service:
cd llm-service
pip install -r requirements.txt
python app.py

---

## API Endpoints

Authentication

Method: POST
Endpoint: /api/auth/register
Description: Register new user

Method: POST
Endpoint: /api/auth/login
Description: Login user

Chat

Method: POST
Endpoint: /api/chat
Description: Send message and get response

Method: GET
Endpoint: /api/chat/history
Description: Get user chat history

Method: GET
Endpoint: /api/chat/:conversationId
Description: Get specific conversation

Method: DELETE
Endpoint: /api/chat/:conversationId
Description: Delete conversation

---

## Prompt Engineering

The system uses carefully designed prompts for different scenarios:

System Prompt (Default)
"You are FaisGPT, a helpful AI assistant. You are knowledgeable, friendly, and concise. You provide accurate information and admit when you don't know something."

Context Injection
Previous messages are formatted and injected into the prompt to maintain conversation continuity.

Structured Output
Responses are formatted with markdown for better readability, including code blocks, lists, and headings.

---

## Performance Metrics

PageSpeed (Mobile): 85+
LCP: Less than 2.5s
First Token Time: Less than 1s
Full Response Time: 2-5 seconds depending on length

---

## Testing

Backend tests:
cd backend
npm test

Frontend tests:
cd frontend
npm test

LLM Service tests:
cd llm-service
pytest

---

## Roadmap

- Add support for multiple LLM providers (Claude, Gemini, Local models)
- Implement file upload and analysis (PDF, images)
- Add voice input and output
- Customizable system prompts per user
- Team/organization accounts
- API access for third-party integration

---

## Contributing

1. Fork the repository
2. Create your feature branch (git checkout -b feature/amazing-feature)
3. Commit your changes (git commit -m 'Add amazing feature')
4. Push to the branch (git push origin feature/amazing-feature)
5. Open a Pull Request

---

## Contact

Meer Mohammad Faisal

GitHub: https://github.com/Meer-Mohammad-Faisal
LinkedIn: https://linkedin.com/in/meer-faisal/
Email: fmd35585@gmail.com

---

## License

This project is licensed under the MIT License.

---

## Acknowledgments

OpenAI for GPT API
Groq for fast inference
The open-source community

---

Built by Meer Mohammad Faisal
