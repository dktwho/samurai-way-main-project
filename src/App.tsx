import React from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1> Social Network</h1>
      <Technologies />
      <Header />
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <a href="#s">Home</a>
      <a href="#s">New Feed</a>
      <a href="#s">Messages</a>
    </div>
  );
};

const Technologies = () => {
  return (
    <div>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>React</li>
      </ul>
    </div>
  );
};

export default App;
