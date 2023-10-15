import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import OurTime from "../components/OurTime";
import MeetFamily from "../components/MeetFamily";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <OurTime />
      <MeetFamily />
    </div>
  );
};

export default Home;
