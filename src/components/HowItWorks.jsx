import React from "react";
import { Link } from "react-router-dom";
import Section from "./Section";
import { REGISTRATION_URL } from "../api";
  function HowItWorks() {
  const steps = [
    { title: "Choose a Scenario", desc: "Pick from real-world business problems" },
    { title: "Write Queries", desc: "Solve challenges with SQL" },
    { title: "Get Feedback", desc: "Instant results and guidance" },
  ];

  return (
    <Section id="how-it-works" className="bg-white">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          How It Works
        </h2>
        <p className="text-gray-600">Simple learning process</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {steps.map((step, index) => (
            <div key={index} className="text-center p-6 bg-gray-100 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-lg font-bold mb-4 mx-auto">
              {index + 1}
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center">
              <Link to={REGISTRATION_URL} className="inline-block px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
          Start Learning
        </Link>  
      </div>
    </Section>
  );
}

export default HowItWorks;
