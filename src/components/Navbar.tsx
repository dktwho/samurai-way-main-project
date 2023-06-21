import React from "react";
import styled from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styled.nav}>
      <div className={styled.item}>
        <a href="#s">Profile</a>
      </div>
      <div className={styled.item}>
        <a href="#s">Messages</a>
      </div>
      <div className={styled.item}>
        <a href="#s">News</a>
      </div>
      <div className={styled.item}>
        <a href="#s">Music</a>
      </div>
      <div className={styled.item}>
        <a href="#s">Settings</a>
      </div>
    </nav>
  );
};
