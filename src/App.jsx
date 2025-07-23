import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";

import { Navbar } from "./components/navbar";
import Hero from "./components/hero";
import MessageBlock from "./components/message-block";
import FlavorBlock from "./components/flavor-block";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({ smooth: 2, effects: true });
  });

  return (
    <main className="">
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <MessageBlock />
          <FlavorBlock />
          <div className="h-screen"></div>
        </div>
      </div>
    </main>
  );
};

export default App;
