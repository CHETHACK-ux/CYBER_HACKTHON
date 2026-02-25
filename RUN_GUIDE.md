# Medi-Chain Secure: Run Guide

This guide provides instructions for setting up and running both the frontend and backend of the Medi-Chain Secure application.

## Prerequisites

- [Node.js](https://nodejs.org/) (Version 16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Project Structure

- `server/`: Express.js backend with SQLite.
- `client/`: React frontend built with Vite.

---

## 1. Backend Setup & Run

The backend handles authentication, data encryption, and meeting management.

### Steps:
1. Open a terminal and navigate to the `server/` directory:
   ```bash
   cd server
   ```
2. Install dependencies (if not already done):
   ```bash
   npm install
   ```
3. Start the server:
   - **For Development (with auto-reload):**
     ```bash
     npm run dev
     ```
   - **For Production:**
     ```bash
     npm start
     ```

> [!NOTE]
> The server will run on [http://localhost:5000](http://localhost:5000). The database (`medichain.db`) will be automatically initialized on the first run.

---

## 2. Frontend Setup & Run

The frontend is a modern React application that communicates with the backend API.

### Steps:
1. Open a **new** terminal window and navigate to the `client/` directory:
   ```bash
   cd client
   ```
2. Install dependencies (if not already done):
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

> [!NOTE]
> The application will typically be accessible at [http://localhost:5173](http://localhost:5173) (or the URL shown in your terminal).

---

## Summary of Commands

| Component | Directory | Install Command | Run Command |
| :--- | :--- | :--- | :--- |
| **Backend** | `server/` | `npm install` | `npm run dev` |
| **Frontend** | `client/` | `npm install` | `npm run dev` |

## Troubleshooting

- **Port in Use:** If port 5000 or 5173 is already in use, you may need to stop the conflicting process or change the port configuration in `server/server.js` or `client/vite.config.js`.
- **Database Issues:** If the database fails to initialize, ensure the `server/medichain.db` file is writable or try deleting it to force a fresh initialization.
