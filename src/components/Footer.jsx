import React from "react";
import { FaEnvelope, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer data-aos="fade-up" style={{ padding: "40px 20px", backgroundColor: "#333", color: "#fff", textAlign: "center" }}>
      <p>Contact: <FaEnvelope /> support@taskflow.com</p>
      <div style={{ marginTop: "10px" }}>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ marginRight: "15px", color: "#fff" }}>
          <FaTwitter />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: "#fff" }}>
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
