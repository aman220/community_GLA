import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Post from "../Post/Post";
import { useSelector } from "react-redux";
import "./Posts.css";
import { useParams } from "react-router-dom";

const Posts = () => {
  const params = useParams();
  const { user } = useSelector((state) => state.authReducer.authData);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchPosts = async (page) => {
      try {
        const response = await axios.get(`http://localhost:5000/post/${user._id}/timeline?page=${page}`);
        setPosts((prevPosts) => [...prevPosts, ...response.data]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts(page);
  }, [user._id, page]);

  useEffect(() => {
    const container = containerRef.current;
    const handleScroll = () => {
      if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
        setPage((prevPage) => prevPage + 1);
      }
    };
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!posts) return "No Posts";

  return (
    <div className="Posts" ref={containerRef}>
      {posts.map((post, id) => {
        return <Post data={post} key={id} />;
      })}
    </div>
  );
};

export default Posts;
