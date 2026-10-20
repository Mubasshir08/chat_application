# Chat Application

A full-stack, real-time chat application where users can sign up, log in and message each other instantly. Built from scratch with the MERN stack and Socket.IO.

🔗 **Live demo:** [chat-app-cool.vercel.app](https://chat-app-cool.vercel.app)

---

## Features

- 💬 **Real-time messaging** powered by Socket.IO
- 🔐 **Authentication** with JWT stored in cookies and bcrypt-hashed passwords
- 🖼️ **Image uploads** handled through Multer and Cloudinary
- 🔔 **Toast notifications** for instant feedback on actions
- 💾 **Persistent login state** across page refreshes with Redux Persist
- 🎨 **Clean, responsive UI** built with Tailwind CSS and DaisyUI

---

## Tech Stack

### Client

| Area | Technology |
| --- | --- |
| Framework | [React 18](https://react.dev) |
| Build tool | [Vite 6](https://vite.dev) |
| Routing | [React Router 7](https://reactrouter.com) |
| State management | [Redux Toolkit](https://redux-toolkit.js.org) + Redux Persist |
| Real-time | [Socket.IO Client](https://socket.io) |
| HTTP client | [Axios](https://axios-http.com) |
| Styling | [Tailwind CSS](https://tailwindcss.com) + [DaisyUI](https://daisyui.com) |
| Notifications | [React Hot Toast](https://react-hot-toast.com) |
| Icons | [React Icons](https://react-icons.github.io/react-icons/) |

### Server

| Area | Technology |
| --- | --- |
| Runtime | [Node.js](https://nodejs.org) |
| Framework | [Express 4](https://expressjs.com) |
| Database | [MongoDB](https://www.mongodb.com) with [Mongoose](https://mongoosejs.com) |
| Real-time | [Socket.IO](https://socket.io) |
| Authentication | [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken), [bcryptjs](https://github.com/dcodeIO/bcrypt.js), cookie-parser |
| File uploads | [Multer](https://github.com/expressjs/multer) + [Cloudinary](https://cloudinary.com) |
| Other | CORS, dotenv, uuid |

---

## Project Structure

```
chat_application/
├── client/     # React + Vite frontend
└── server/     # Node.js + Express + Socket.IO backend
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) 18 or newer
- npm
- A [MongoDB](https://www.mongodb.com/atlas) database (local or Atlas)
- A [Cloudinary](https://cloudinary.com) account for image uploads

### 1. Clone the repository

```bash
git clone https://github.com/Mubasshir08/chat_application.git
cd chat_application
```

### 2. Set up the server

```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder with your own values for:

- your MongoDB connection string
- a secret key used to sign JWT tokens
- your Cloudinary credentials (cloud name, API key and API secret)
- the port the server should run on

Then start the server:

```bash
npm start
```

### 3. Set up the client

Open a second terminal:

```bash
cd client
npm install
```

If the client reads its API or socket URL from an environment variable, add it to a `.env` file in the `client` folder and point it at your running server. Then start the app:

```bash
npm run dev
```

The client will start on the address shown in your terminal (usually `http://localhost:5173`).

---

## Available Scripts

### Client (`/client`)

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

### Server (`/server`)

| Command | Description |
| --- | --- |
| `npm start` | Start the Express and Socket.IO server |

---

## Deployment

The frontend is deployed on [Vercel](https://vercel.com). The backend needs a host that can run a long-lived Node.js server with WebSocket support, such as Render, Railway or a VPS.

---

## Author

This project was designed and built entirely by me.

**Mubasshir** — [@Mubasshir08](https://github.com/Mubasshir08)
