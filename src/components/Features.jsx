import React from "react";
import { FaCheckCircle, FaCalendarAlt, FaBell } from "react-icons/fa";

const features = [
  { icon: <FaCheckCircle size={32} />, title: "Easy Task Creation", desc: "Quickly add and organize tasks with just a few clicks." },
  { icon: <FaCalendarAlt size={32} />, title: "Smart Scheduling", desc: "Stay on top of deadlines with built-in calendar sync." },
  { icon: <FaBell size={32} />, title: "Reminders", desc: "Never miss a task with custom alerts and reminders." }
];

const Features = () => {
  return (
    <section data-aos="fade-up" style={{ padding: "60px 20px", backgroundColor: "#eef6fb", textAlign: "center" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "40px" }}>Features</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap" }}>
        {features.map((f, i) => (
          <div key={i} style={{ maxWidth: "250px" }}>
            <div style={{ marginBottom: "10px" }}>{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
