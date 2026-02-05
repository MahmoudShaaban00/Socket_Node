import express from 'express';
import { Server } from "socket.io";
import { dbConnection } from './db/dbconnection.js';
import { Post } from './db/models/post.model.js';

const app = express();
const PORT = 3000;
dbConnection();
const server = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

const io = new Server(server, {
    cors: { origin: "*" }
});

io.on("connection", (socket) => {
    console.log("New user connected:", socket.id);

    socket.on("new-post",async(post)=>{
        await Post.insertMany(post);

        let posts=await Post.find({});
        io.emit("all-posts",posts);
    })

    socket.on("load", async () => {
        let posts = await Post.find({});
        socket.emit("all-posts", posts);
    });

    socket.on("deletePost", async (postId) => {
        await Post.findByIdAndDelete(postId);
        let posts = await Post.find({});
        io.emit("all-posts", posts);
    });

        socket.on("search", async (value) => {
        let posts = await Post.find({ title: { $regex: value, $options: 'i' } });
        io.emit("all-posts", posts);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});
