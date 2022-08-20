import React, { useEffect, useState } from "react";
import PostItem from "../PostItem/PostItem";
import "./Home.css";
const Home = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div>
      <h1 className="Logo">WORLD POST </h1>
      <div className="card">
        {post.map((po) => (
          <PostItem key={po.id} post={po}></PostItem>
        ))}
      </div>
    </div>
  );
};

export default Home;
