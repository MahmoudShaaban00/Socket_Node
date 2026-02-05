# Socket.IO Real-Time Posts App 🚀

A simple project demonstrating how to build a **Real-Time Application** using  
**Node.js + Socket.IO + MongoDB + Mongoose**,  
with a clear separation between **client** and **server**.

Users can create **Posts** that appear **real-time** for all connected clients without page reload.

---

## ✨ Features

- Real-Time communication using Socket.IO  
- Create and display posts instantly  
- Store data in MongoDB  
- Use Mongoose for Schema & Models  
- Separate Frontend (Client) and Backend (Server)  
- Scalable and organized project architecture  

---

## ⚙️ Tech Stack

### Backend
- Node.js  
- Express  
- Socket.IO  
- MongoDB  
- Mongoose  

### Frontend
- HTML  
- CSS  
- JavaScript  
- Socket.IO Client  

---

## 🔄 How It Works (Flow)

1. User writes a post from the client  
2. Client sends the post to the server via Socket.IO  
3. Server validates the post  
4. Server saves the post to MongoDB  
5. Server broadcasts the post to all connected clients  
6. All clients see the post instantly 🔥

---

## 🔐 Security Note

Not every client should be able to use Socket.IO directly.  
Best practices:
- Use Authentication (JWT / Token)  
- Verify users during socket handshake  
- Control permissions for each event  

---

## ▶️ How to Run the Project

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/MahmoudShaaban00/Socket_Node.git
