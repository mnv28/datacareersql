import React from "react";
import Section from "./Section";

function WhySQL() {
  const cards = [
    { title: "High Demand", desc: "70% of data jobs require SQL", icon: "📈" },
    { title: "Universal Skill", desc: "Works across all industries", icon: "🌐" },
    { title: "Career Growth", desc: "Unlock data roles", icon: "🚀" },
    { title: "Hands-On Learning", desc: "Learn by doing", icon: "🧩" },
  ];

  return (
    <Section id="why-sql" className="bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Why Learn SQL?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          SQL is the most essential skill for data professionals across all industries.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-2xl mb-4">{card.icon}</div>
            <h3 className="font-semibold text-gray-900 mb-2">{card.title}</h3>
            <p className="text-gray-600 text-sm">{card.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default WhySQL;
