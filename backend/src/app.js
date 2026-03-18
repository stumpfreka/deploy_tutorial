import express from "express";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import { notFound, errorHandler } from "./middlewares/error.middleware.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import {
  attachUser,
  logger,
  requireApiKey,
  requireLogin,
} from "./middlewares/test.middleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger);

//cookie-k olvasása
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "DELETE", "PATCH", "PUT", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.get("/health", (req, res) => res.json({ ok: true }));

app.get("/private", requireApiKey, (req, res) => {
  res.json({ secret: "Oszkár" });
});

app.get("/me", attachUser, (req, res) => {
  res.json({ user: req.user });
});

app.get("/dashboard", requireApiKey, attachUser, requireLogin, (req, res) => {
  res.json({ message: `Welcome ${req.user.name}` });
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

app.use(notFound);
app.use(errorHandler);

export default app;
