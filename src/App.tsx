import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          src="https://seeklogo.com/images/S/snapsvg-logo-8E936C9AE9-seeklogo.com.png"
          alt="logo"
        />
      </header>
      <nav className="nav">
        <div>
          <a href="">Profile</a>
        </div>
        <div>
          <a href="">Messages</a>
        </div>
        <div>
          <a href="">News</a>
        </div>
        <div>
          <a href="">Music</a>
        </div>
        <div>
          <a href="">Settings</a>
        </div>
      </nav>
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
