# Real-Time Collaborative Editor

## Internship Details & Project Scope

* **Full Name:** (NAME-) RAKSHIT ARYAN
* **Intern ID:** CITS1620
* **Duration:** One Week
* **Project Name:** Real-Time Collaborative Editor
* **Project Objective:** Design and implement a fully functional, real-time collaborative text editing platform from scratch, focusing on a robust client-server architecture to handle concurrent multi-user interactions seamlessly.
  * **Backend Implementation:** Develop a custom backend server using Node.js and Express.js to   serve application assets.
  * **Network Architecture:** Implement persistent, bi-directional network communication using Socket.IO to broadcast document changes instantly across clients.
  * **Frontend Development:** Create a responsive, distraction-free interface using HTML5, CSS3, and vanilla JavaScript, complete with live connection state management (online/offline).
  * **Version Control:** Establish proper Git practices, including environment management (`.gitignore`), and deploy the clean codebase to GitHub.
    
---

## Key Features

* **Live Synchronization:** Text inputs are broadcasted in milliseconds to all active users without requiring page reloads or HTTP polling.
* **Persistent Connections:** Utilizes WebSockets to maintain an open, lightweight connection between the server and all contributors.
* **Connection Status UI:** Real-time visual indicators alerting users to their active network status.
* **Distraction-Free Interface:** A clean, dark-mode terminal-style editor optimized for developer notes and code drafting.

---

## Tech Stack

* **Backend:** Node.js, Express.js
* **Real-Time Engine:** Socket.IO
* **Frontend:** HTML5, CSS3, Vanilla JavaScript
* **Version Control:** Git, GitHub

---

## How to Run Locally

**1. Clone the repository**

```bash
git clone https://github.com/YOUR-USERNAME/real-time-collaborative-editor.git

```

**2. Navigate to the project directory**

```bash
cd real-time-collaborative-editor

```

**3. Install dependencies**

```bash
npm install

```

**4. Start the server**

```bash
node server.js

```

**5. Test the collaboration**
Open `http://localhost:3000` in multiple browser windows, tabs, or separate devices on your network to see the real-time synchronization in action.
