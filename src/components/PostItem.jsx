import React from "react";

const PostItem = ({ post }) => {
  return (
    <div style={{ marginBottom: "1rem", border: "1px solid #ccc", padding: "1rem" }}>
      <p><strong>{post.username}</strong></p>
      <p>{post.content}</p>
    </div>
  );
};

export default PostItem;