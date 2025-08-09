import React from "react";
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from "./components/Hero";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Hero />
      <Features />
      <Reviews />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
