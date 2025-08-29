import React from "react";
import { Link } from "react-router-dom";
import Section from "./Section";
import { REGISTRATION_URL } from "../api";

function Domains() {
  const categories = [
    { label: "Card usage", tag: "Banking", bg: "#ffc8aa", text: "#662400" },
    { label: "Loyalty & rewards", tag: "Retail", bg: "#ffe5a0", text: "#3d2d00" },
    { label: "Mobile usage", tag: "Telecom", bg: "#bfe1f6", text: "#082436" },
    { label: "Mining energy", tag: "Mining", bg: "#d4edbc", text: "#1e300d" },
    { label: "IoT sensors", tag: "IoT", bg: "#e6cff2", text: "#240d30" },
    { label: "Vehicle pricing", tag: "Auto", bg: "#ffc8aa", text: "#662400" },
    { label: "Network data", tag: "Networks", bg: "#bfe1f6", text: "#082436" },
    { label: "Patient outcomes", tag: "Healthcare", bg: "#e6cff2", text: "#240d30" },
    { label: "Flight delays", tag: "Airlines", bg: "#ffe5a0", text: "#3d2d00" },
    { label: "Renewable energy", tag: "Energy", bg: "#d4edbc", text: "#1e300d" },
    { label: "Insurance claims", tag: "Insurance", bg: "#ffc8aa", text: "#662400" },
    { label: "Sales forecasts", tag: "Sales", bg: "#bfe1f6", text: "#082436" },
  ];

  return (
    <Section id="domains" className="bg-white">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Real-World Challenges
        </h2>
        <p className="text-gray-600">Practice with industry-specific scenarios</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={REGISTRATION_URL}
            className="block p-6 rounded-lg hover:shadow-md transition"
            style={{ backgroundColor: category.bg, color: category.text }}
          >
            <span className="text-xs font-medium px-2 py-1 bg-white/50 rounded">
              {category.tag}
            </span>
            <h3 className="font-semibold mt-3">{category.label}</h3>
          </Link>
        ))}
      </div>
    </Section>
  );
}

export default Domains;
