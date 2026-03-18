import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      minlength: 2,
      maxlength: 200,
    },
    age: {
      type: Number,
      required: [true, "Age is required"],
      min: 1,
      max: 150,
    },
  },
  { timestamps: true },
);

export const Post = mongoose.model("Post", postSchema);
