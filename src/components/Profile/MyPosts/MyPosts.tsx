import React from "react";
import styled from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = () => {
  return (
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className="posts">New post</div>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};
