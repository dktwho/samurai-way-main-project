import React from "react";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="content">
        <div>
          <img
            src="https://www.atlantictours.com/images/stories/com_form2content/p1/f103/nova-scotia-halifax-waterfront-harbour-hopper-purdys-wharf-875x375.jpg"
            alt=""
          />
        </div>
        <div>Ava + description</div>
        <div>
          My Posts
          <div>New post</div>
          <div>post1</div>
          <div>post2</div>
        </div>
      </div>
    </div>
  );
};

export default App;
