import React from "react";

const plans = [
  { name: "Free", price: "$0", features: ["Basic Task Management", "1 Project", "Email Reminders"] },
  { name: "Pro", price: "$9/mo", features: ["Unlimited Projects", "Advanced Reports", "Priority Support"] },
  { name: "Team", price: "$25/mo", features: ["Team Collaboration", "Permissions", "Admin Dashboard"] }
];

const Pricing = () => {
  return (
    <section data-aos="fade-up" style={{ padding: "60px 20px", backgroundColor: "#e8f5e9", textAlign: "center" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "30px" }}>Pricing</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap" }}>
        {plans.map((plan, i) => (
          <div key={i} style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "20px", width: "220px" }}>
            <h3>{plan.name}</h3>
            <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{plan.price}</p>
            <ul style={{ textAlign: "left", paddingLeft: "20px" }}>
              {plan.features.map((f, j) => <li key={j}>{f}</li>)}
            </ul>
            <button style={{ marginTop: "15px", padding: "8px 16px", background: "#007bff", color: "white", border: "none", borderRadius: "4px" }}>
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
