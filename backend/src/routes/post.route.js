import { Router } from "express";
import {
  createPost,
  deletePost,
  getPosts,
  updatePost,
} from "../controllers/post.controller.js";
import { validateObjectId } from "../middlewares/validateObjectId.js";

const postRouter = Router();

postRouter.post("/", createPost);
postRouter.get("/", getPosts);

postRouter.patch("/:id", validateObjectId("id"), updatePost);
postRouter.delete("/:id", validateObjectId("id"), deletePost);

export default postRouter;
