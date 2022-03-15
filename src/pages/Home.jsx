import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Slide from "../components/Slide";

const Home = () => {
  return (
    <div>
      <Announcement></Announcement>
      <Navbar />
      <Slide></Slide>
    </div>
  );
};

export default Home;
