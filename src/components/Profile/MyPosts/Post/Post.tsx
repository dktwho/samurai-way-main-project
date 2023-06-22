import React from "react";
import styled from "./Post.module.css";

type  MessagePropTypes = {
    message: string;
}
export const Post = ({message}:MessagePropTypes ) => {

  return (
    <div className={styled.item}>
      <img src="https://rambabu.ca/assets/img/avatars/avatar.png" alt="logo" />
        {message}
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};
