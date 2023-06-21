import React from "react";
import "./App.css";
import Header from "./Header";
import Technologies from "./Technologies";
import { Footer } from "./Footer";

const App = () => {
  return (
    <div>
      <h1> Social Network</h1>
      <Technologies />
      <Header />
      <Footer />
    </div>
  );
};

export default App;
