import React from "react";
import HeroPage from "./components/HeroPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroPage />
      <div className="h-screen w-screen"></div>
    </div>
  );
};

export default App;
