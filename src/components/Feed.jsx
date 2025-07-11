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
    <div className="w-full max-w-xl mx-auto mt-4 px-4">
      <form
        onSubmit={handleSubmit}
        className="mb-6 bg-white p-4 rounded-lg shadow"
      >
        <textarea
          rows="3"
          placeholder="Write a post..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Post
        </button>
      </form>

      <div className="space-y-4">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
