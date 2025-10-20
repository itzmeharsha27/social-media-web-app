import React, { useState } from "react";
import Comment from "./Comment";

const Post = ({ post }) => {
  const [likes, setLikes] = useState(post.likes.length);
  const [comments, setComments] = useState(post.comments);
  const [commentText, setCommentText] = useState("");

  const handleLike = () => setLikes(likes + 1);

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!commentText) return;
    setComments([...comments, { text: commentText }]);
    setCommentText("");
  };

  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <p>{post.content}</p>
      <small>Likes: {likes}</small>
      <div>
        <button onClick={handleLike}>Like</button>
      </div>
      <div>
        <form onSubmit={handleAddComment}>
          <input
            type="text"
            placeholder="Add a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button type="submit">Comment</button>
        </form>
        {comments.map((c, idx) => (
          <Comment key={idx} comment={c} />
        ))}
      </div>
    </div>
  );
};

export default Post;
