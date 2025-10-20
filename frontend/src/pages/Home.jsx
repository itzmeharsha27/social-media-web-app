import React from "react";
import Post from "../components/Post";

const Home = () => {
  const posts = [
    { content: "Hello World!", likes: [] },
    { content: "My first post!", likes: [] },
  ];

  return (
    <div>
      <h2>Home Page</h2>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default Home;
