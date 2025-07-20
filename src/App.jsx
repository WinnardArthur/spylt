import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { Navbar } from "./components/navbar";
import Hero from "./components/hero";
import MessageBlock from "./components/message-block";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <MessageBlock />
    </main>
  );
};

export default App;
