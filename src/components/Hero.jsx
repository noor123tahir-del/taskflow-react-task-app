import React from "react";

const Hero = () => {
  return (
    <section className="hero" data-aos="fade-up" style={{ padding: "80px 20px", textAlign: "center", backgroundColor: "#f9f9f9" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>TaskFlow</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>Organize your day effortlessly with our intuitive task manager.</p>
      <button style={{ padding: "10px 20px", fontSize: "1rem", background: "#007bff", color: "white", border: "none", borderRadius: "5px" }}>
        Get Started
      </button>
    </section>
  );
};

export default Hero;
