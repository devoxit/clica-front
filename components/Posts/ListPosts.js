import { useState, useEffect } from "react";
import Post from "./Post";

export const fetchPosts = async () => {
  const resp = await fetch("https://dummyjson.com/posts?limit=10");
  const posts = await resp.json();
  return posts.posts;
};

const ListPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      const data = await fetchPosts();
      setPosts(data);
    };
    dataFetch();
  }, []);

  return (
    <>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </>
  );
};

export default ListPosts;
