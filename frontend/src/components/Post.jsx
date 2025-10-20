import React from "react";

const Post = ({ post }) => {
  return (
    <div>
      <p>{post.content}</p>
      <small>Likes: {post.likes.length}</small>
    </div>
  );
};

export default Post;
