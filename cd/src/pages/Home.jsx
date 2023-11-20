import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import OurTime from "../components/OurTime";
import MeetFamily from "../components/MeetFamily";
import Fons from "../components/Fons";
import Shop from "../components/Shop";
import './Home.scss'
const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <OurTime />
      <MeetFamily />
      <Fons />
      <Shop/>
    </div>
  );
};

export default Home;
