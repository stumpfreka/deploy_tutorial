import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`${API_URL}/${id}`);
        if (!res.ok) {
          throw new Error("Fetch error");
        }
        const data = await res.json();
        setPost(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      } finally {
        await sleep(1000);
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (loading) {
    return <p>Loading....</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <h3>{post.body}</h3>
    </div>
  );
};

export default PostDetail;
