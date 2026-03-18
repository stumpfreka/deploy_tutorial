import { Post } from "../models/post.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createPost = asyncHandler(async (req, res) => {
  const { name, description, age } = req.body;

  if (!name?.trim() || !description?.trim() || age == null) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const post = await Post.create({
    name,
    description,
    age,
  });

  res.status(201).json({ message: "Post created successfully", post });
});

const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({}).lean();
  res.status(200).json({ posts });
});

const updatePost = asyncHandler(async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({ message: "No data provided for update" });
  }

  const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.status(200).json({ message: "Post updated successfully", post });
});

const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findByIdAndDelete(req.params.id);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.status(200).json({ message: "Post deleted successfully" });
});

export { createPost, getPosts, updatePost, deletePost };
