import React, { useState } from "react";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [postText, setPostText] = useState("");

  const handlePost = () => {
    if (!postText.trim()) return;
    setPosts([
      ...posts,
      {
        id: Date.now(),
        text: postText,
        comments: [],
      },
    ]);
    setPostText("");
  };

  const handleComment = (postId, commentText) => {
    if (!commentText.trim()) return;
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                {
                  id: Date.now(),
                  text: commentText,
                  replies: [],
                },
              ],
            }
          : post
      )
    );
  };

  const handleReply = (postId, commentId, replyText) => {
    if (!replyText.trim()) return;
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.map((comment) =>
                comment.id === commentId
                  ? {
                      ...comment,
                      replies: [
                        ...comment.replies,
                        { id: Date.now(), text: replyText },
                      ],
                    }
                  : comment
              ),
            }
          : post
      )
    );
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Post Something</h1>
      <textarea
        className="w-full border border-gray-300 rounded p-2 mb-2"
        rows="3"
        placeholder="What's on your mind?"
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
      />
      <button
        onClick={handlePost}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Post
      </button>

      <div className="mt-8 space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded shadow">
            <p className="mb-4">{post.text}</p>

            {/* Comments */}
            <CommentSection post={post} onComment={handleComment} onReply={handleReply} />
          </div>
        ))}
      </div>
    </div>
  );
};

const CommentSection = ({ post, onComment, onReply }) => {
  const [commentText, setCommentText] = useState("");
  const [replyInputs, setReplyInputs] = useState({}); // { commentId: replyText }

  return (
    <div className="mt-4">
      <textarea
        className="w-full border rounded p-2 mb-2"
        rows="2"
        placeholder="Write a comment..."
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <button
        onClick={() => {
          onComment(post.id, commentText);
          setCommentText("");
        }}
        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
      >
        Comment
      </button>

      <div className="mt-4 space-y-3">
        {post.comments.map((comment) => (
          <div key={comment.id} className="border-l-4 border-gray-400 pl-4">
            <p>{comment.text}</p>

            {/* Replies */}
            <div className="ml-4 mt-2 space-y-2">
              {comment.replies.map((reply) => (
                <div key={reply.id} className="text-sm text-gray-700">
                  ↳ {reply.text}
                </div>
              ))}

              <textarea
                className="w-full border rounded p-1 text-sm"
                rows="1"
                placeholder="Write a reply..."
                value={replyInputs[comment.id] || ""}
                onChange={(e) =>
                  setReplyInputs({ ...replyInputs, [comment.id]: e.target.value })
                }
              />
              <button
                onClick={() => {
                  onReply(post.id, comment.id, replyInputs[comment.id]);
                  setReplyInputs({ ...replyInputs, [comment.id]: "" });
                }}
                className="text-sm text-blue-600 hover:underline"
              >
                Reply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
