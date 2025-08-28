import React from "react";
import { Link } from "react-router-dom";
import Section from "./Section";
import { REGISTRATION_URL } from "../api";

function Hero() {
  const scrollToSimulations = () => {
    const element = document.getElementById('simulations');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#3D518C] to-[#7692FF] text-white">
      <Section className="text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Master SQL for Data Jobs
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Learn SQL through real-world simulations and stand out in the job market.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={REGISTRATION_URL} className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
            Start Learning Free
          </Link>
          <button 
            onClick={scrollToSimulations}
            className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition"
          >
            View Challenges
          </button>
        </div>
      </Section>
    </div>
  );
}

export default Hero;
