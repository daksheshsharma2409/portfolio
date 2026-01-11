import React from "react";
import HeroPage from "./components/HeroPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-[#6b776b]">
      <Navbar />
      <main className="pt-20">
        <HeroPage />
      </main>
    </div>
  );
};

export default App;
