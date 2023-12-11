import React from "react";
import "./Post.css";
import { useDispatch } from "react-redux";
import { likePost, deletePost } from "../../../actions/posts";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  return (
    <div className="post">
      <div className="creator-name">{post.creator}</div>
      <div className="tags">{post.title}</div>
      <div className="image">{post.tags}</div>
      <div>
        <img src={post.selectedFile} alt={post.tag} />
      </div>
      <div className="likes">
        <button onClick={() => dispatch(likePost(post._id))}>Like</button>
        {post.likeCount}
      </div>
      <button onClick={() => dispatch(deletePost(post._id))}>Delete</button>
    </div>
  );
};

export default Post;
