## Fais-GPT Pro

- Fais-GPT Pro is a powerful AI assistant web application with a sleek React + Tailwind frontend and a Node.js backend. It offers interactive chat, file and image uploads, persistent chat history, theme switching, and export functionality. Designed to be modular, professional, and responsive, Fais-GPT Pro enhances user experience while integrating AI-powered chat capabilities.
  
---

# Features
- 💬 Real-time AI chat with user messages and AI responses
- 📂 File and image upload support inside chat
- 🌗 Light and Dark mode toggle
- 🗂 Persistent chat history using localStorage
- 📄 Export chat history as a .txt file
- 🎨 Modern, responsive UI with animated chat bubbles
- ⚡ Modular React components for maintainability

# Folder Structure
**Backend**
- fais-gpt-server/
 - ┣ config/
 - ┃ ┗ database.js           # MongoDB or other database connection setup
 - ┣ models/
 - ┃ ┗ Chat.js               # Mongoose model for storing chat history
 - ┣ utils/
 - ┃ ┗ GeminiAPI.js          # API wrapper or helper functions for AI responses
 - ┣ .env                    # Environment variables (e.g., DB URI, API keys)
 - ┣ .gitignore
 - ┣ package.json
 - ┗ package-lock.json

**Frontend (React + TailwindCSS)**
- fais-gpt-client/
 - ┣ src/
 - ┃ ┣ components/
 - ┃ ┃ ┣ ChatContainer.jsx    # Main chat container with header, messages, and input
-  ┃ ┃ ┣ ChatHeader.jsx       # Header with theme toggle, clear & export buttons
 - ┃ ┃ ┣ MessageList.jsx      # Scrollable area for chat messages
 - ┃ ┃ ┣ MessageBubble.jsx    # Individual chat bubble (text or file)
 - ┃ ┃ ┗ ChatInput.jsx        # Input field with text and file upload support
 - ┃ ┣ hooks/
 - ┃ ┃ ┣ useChatHistory.js    
 - ┃ ┃ ┗ useTheme.js
 - ┃ ┣ App.jsx                 
 - ┃ ┣ index.css             
 - ┃ ┗ main.jsx           
 - ┣ package.json
 - ┣ tailwind.config.js
 - ┗ vite.config.js

**Installation**
- Backend Setup
# Navigate to backend
- cd fais-gpt-server

# Install dependencies
- npm install

# Create a .env file with your environment variables
# Example:
# MONGO_URI=your_mongodb_connection_string
# PORT=3000
# GEMINI_API_KEY=your_api_key

# Run the server
- node index.js


- The backend server will run on http://localhost:3000.

- Frontend Setup
# Navigate to frontend
- cd fais-gpt-client

# Install dependencies
- npm install

# Run development server
- npm run dev


- The frontend runs on http://localhost:5173.

- How It Works
- Default Messages

- Welcome Message: Displayed when the app loads or localStorage is empty:

- Hello! I'm Fais-GPT Pro, your enhanced AI assistant. I now support file uploads and remember our conversation history!


- Clear Chat Message: When the user clears chat:

- Chat history has been cleared. How can I help you today?
