import React from "react";
import Button from "../../utils/Button";

import bgVideo from "../../assets/beachVid.mp4";

function Home() {
  return (
    <div>
      <header className="w-screen h-screen relative">
        <video
          src={bgVideo}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
        />
        <div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center">
            <h1 className="text-white mb-2">HYSCALER ROOM ALLOCATION</h1>
            <h2 className="text-white mb-4">
              To start allocating rooms click below
            </h2>
            <a href="/home">Click Here!!</a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
