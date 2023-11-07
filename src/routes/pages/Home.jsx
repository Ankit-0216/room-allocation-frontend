import React from "react";
import bgVideo from "../../assets/beachVid.mp4";
import HomeCard from "../../utils/HomeCard";

function Home() {
  return (
    <div className="relative">
      <header className="w-screen h-screen relative">
        <video src={bgVideo} className="w-full h-full object-cover" autoPlay loop muted />
      </header>

      <div className="absolute top-0 right-0 m-4">
        <HomeCard />
      </div>
    </div>
  );
}

export default Home;
