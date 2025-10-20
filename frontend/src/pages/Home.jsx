import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, setPosts } from "../redux/postSlice";
import Post from "../components/Post";

const Home = () => {
  const [content, setContent] = useState("");
  const posts = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { content, likes: [] };
    dispatch(addPost(newPost));
    setContent("");
  };

  return (
    <div>
      <h2>Home Page</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>
      <div>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
