import React from "react";
import styled from "./Profile.module.css";

export const Profile = () => {
  return (
    <div className={styled.content}>
      <div>
        <img
          src="https://www.atlantictours.com/images/stories/com_form2content/p1/f103/nova-scotia-halifax-waterfront-harbour-hopper-purdys-wharf-875x375.jpg"
          alt=""
        />
      </div>
      <div>Ava + description</div>
      <div>
        My Posts
        <div className="posts">New post</div>
        <div className={styled.item}>post1</div>
        <div className={styled.item}>post2</div>
      </div>
    </div>
  );
};
