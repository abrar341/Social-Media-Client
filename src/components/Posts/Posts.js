import React from "react";
import Post from "./Post/Post";
import "./Posts.css";
import { useSelector } from "react-redux";

const Posts = ({ setCurrentId }) => {
  const { data } = useSelector((state) => state.posts);
  // console.log(posts);
  // const posts = saved?.savedRecipes || [];

  const posts = data || [];

  console.log(posts);
  return !posts.length ? (
    "Nothing to show"
  ) : (
    <div className="posts">
      {posts?.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
