import React from "react";
import Hero from "../component/banner/Hero";
import ButtonSection from "../component/banner/ButtonSection";
import Friends from "../component/friends/Friends";
import { useLoaderData } from "react-router";

const Home = () => {
    
  return (
    <>
      <Hero />
      <ButtonSection />
      <Friends/>
    </>
    
  );
};

export default Home;
