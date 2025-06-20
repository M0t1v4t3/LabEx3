import React from "react";

const PostItem = ({ post }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <p className="font-semibold text-blue-700">{post.username}</p>
      <p className="text-gray-800">{post.content}</p>
    </div>
  );
};

export default PostItem;
