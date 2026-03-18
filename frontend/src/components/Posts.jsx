import { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isRefreshed, setIsRefreshed] = useState(false);
  const [loading, setLoading] = useState(false);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch(API_URL);
        if (!res.ok) {
          throw new Error("Fetch error");
        }
        const data = await res.json();
        setPosts(data);
        console.log(data);
        setIsRefreshed(false);
      } catch (error) {
        console.error(error);
      } finally {
        await sleep(1000);
        setLoading(false);
      }
    };
    fetchPosts();
  }, [isRefreshed]);

  if (loading) {
    return <p>Loading....</p>;
  }

  return (
    <div>
      <button onClick={() => setIsRefreshed(!isRefreshed)}>REFRESH</button>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
