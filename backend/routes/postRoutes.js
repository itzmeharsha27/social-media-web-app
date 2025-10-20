import express from "express";
import Post from "../models/Post.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Create post
router.post("/", authMiddleware, async (req, res) => {
  try {
    const newPost = new Post({ userId: req.user.id, content: req.body.content });
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// TODO: Add edit, delete, like, comment routes later

export default router;
