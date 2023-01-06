import Trainers from "../../components/Trainers";
import React from "react";
import Hero from "../../components/Hero";
import Pricing from "components/Pricing";
import AboutUs from "components/AboutUs";

type Props = {};

function Home() {
  return (
    <main>
      <Hero />
      <Trainers />
      <Pricing />
      <AboutUs />
    </main>
  );
}

export default Home;
