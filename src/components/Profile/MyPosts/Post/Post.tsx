import React from "react";
import styled from "./Post.module.css";

export const Post = () => {
  return (
    <div className={styled.item}>
      <img src="https://rambabu.ca/assets/img/avatars/avatar.png" alt="logo" />
      post3
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};
