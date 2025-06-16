import React, { useEffect, useState } from "react";
import { fetchPosts, createPost } from "../api";
import PostItem from "./PostItem";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const data = await fetchPosts();
    setPosts(data.reverse());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    const newPost = {
      username: "Anonymous", // Replace with actual user later
      content: content.trim(),
    };

    await createPost(newPost);
    setContent("");
    loadPosts();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="3"
          placeholder="Write a post..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">Post</button>
      </form>

      <div>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;