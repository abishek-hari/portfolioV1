import React from "react";
import {
  About,
  Collabration,
  Footer,
  Hero,
  Skills,
  Work,
} from "../components/components";

const Landing = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Work />
      <Collabration />
      <Footer />
    </>
  );
};

export default Landing;
