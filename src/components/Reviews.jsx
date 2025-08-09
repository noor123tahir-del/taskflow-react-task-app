import React from "react";

const reviews = [
  { name: "Aisha R.", quote: "TaskFlow changed how I plan my days. It's clean and super simple!" },
  { name: "Omar K.", quote: "I love the scheduling features. I never forget a deadline anymore!" },
  { name: "Zara M.", quote: "I use it daily for team tasks. TaskFlow is a must-have!" }
];

const Reviews = () => {
  return (
    <section data-aos="fade-up" style={{ padding: "60px 20px", backgroundColor: "#fffbe6", textAlign: "center" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "30px" }}>What Users Say</h2>
      {reviews.map((r, i) => (
        <blockquote key={i} style={{ marginBottom: "20px", fontStyle: "italic" }}>
          "{r.quote}"<br />
          <strong>- {r.name}</strong>
        </blockquote>
      ))}
    </section>
  );
};

export default Reviews;
