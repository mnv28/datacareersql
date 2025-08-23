import React, { useState } from "react";
import DataCareerLogo from "../assets/DataCareerLogo.png";

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

const levels = [
  {
    name: "Novice",
    color: "from-blue-800 to-blue-400",
    bullets: ["SELECT", "FROM", "DISTINCT", "ORDER"],
    example: `SELECT product_id FROM orders ORDER BY product_id;`,
  },
  {
    name: "Basic",
    color: "from-blue-700 to-blue-300",
    bullets: ["WHERE", "JOIN", "GROUP BY", "HAVING"],
    example: `SELECT country, COUNT(*) AS users FROM customers WHERE status = 'active' GROUP BY country;`,
  },
  {
    name: "Intermediate",
    color: "from-blue-600 to-blue-200",
    bullets: ["Subqueries", "CTEs", "String Functions"],
    example: `WITH recent_orders AS (SELECT * FROM orders WHERE date > NOW() - INTERVAL '30 days') SELECT customer_id, SUM(amount) FROM recent_orders GROUP BY customer_id;`,
  },
  {
    name: "Advanced",
    color: "from-blue-500 to-blue-100",
    bullets: ["Window Functions", "Partition By", "Pivot"],
    example: `SELECT date, AVG(amount) OVER(ORDER BY date ROWS 6 PRECEDING) AS avg_7d FROM sales;`,
  },
  {
    name: "Expert",
    color: "from-blue-900 to-blue-600",
    bullets: ["Recursion", "Correlated Queries", "Cursors"],
    example: `WITH RECURSIVE tree AS (SELECT id, name FROM employees WHERE manager_id IS NULL UNION ALL SELECT e.id, e.name FROM employees e JOIN tree t ON e.manager_id = t.id) SELECT * FROM tree;`,
  },
];

function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`py-12 md:py-16 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">{children}</div>
    </section>
  );
}

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const registrationUrl = import.meta.env.VITE_REGISTRATION_URL;

  const scrollTo = (id) => {
    console.log('Scrolling to:', id);
    const element = document.getElementById(id);
    if (element) {
      console.log('Element found, scrolling...');
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    } else {
      console.log('Element not found with ID:', id);
    }
  };

  const navItems = [
    { label: "Why SQL?", id: "why-sql" },
    { label: "Journey", id: "journey" },
    { label: "Simulations", id: "simulations" },
    { label: "How it works", id: "how-it-works" }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img src={DataCareerLogo} alt="DataCareer" className="h-8 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-gray-700">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(item.id);
              }}
              className="text-sm hover:text-blue-600 transition-colors cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href={registrationUrl} className="px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition">
            Explore
          </a>
          <a href={registrationUrl} className="px-4 py-2 text-sm text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition">
            Start Free
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 min-h-screen">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.id);
                }}
                className="block w-full text-left text-sm text-gray-700 py-2 hover:text-blue-600"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <a href={registrationUrl} className="block w-full text-center px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded-lg">
                Explore Challenges
              </a>
              <a href={registrationUrl} className="block w-full text-center px-4 py-2 text-sm text-white bg-orange-500 rounded-lg">
                Start Free
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const registrationUrl = import.meta.env.VITE_REGISTRATION_URL;

  return (
    <div className="bg-gradient-to-br from-blue-800 to-blue-400 text-white">
      <Section className="text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Master SQL for Data Jobs
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Learn SQL through real-world simulations and stand out in the job market.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={registrationUrl} className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
            Start Learning Free
          </a>
          <button 
            onClick={() => document.getElementById('simulations')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition"
          >
            View Challenges
          </button>
        </div>
      </Section>
    </div>
  );
}

function WhySQL() {
  const cards = [
    { title: "High Demand", desc: "70% of data jobs require SQL", icon: "📈" },
    { title: "Universal Skill", desc: "Works across all industries", icon: "🌐" },
    { title: "Career Growth", desc: "Unlock data roles", icon: "🚀" },
    { title: "Hands-On Learning", desc: "Learn by doing", icon: "🧩" },
  ];

  return (
    <Section id="why-sql" className="bg-white">
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
          <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-2xl mb-4">{card.icon}</div>
            <h3 className="font-semibold text-gray-900 mb-2">{card.title}</h3>
            <p className="text-gray-600 text-sm">{card.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Journey() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <Section id="journey" className="bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Learning Path
        </h2>
        <p className="text-gray-600">Progress from beginner to SQL expert</p>
      </div>
      <div className="space-y-4">
        {levels.map((level, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
            <button
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className="w-full text-left"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-gray-900">{level.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{level.bullets.join(" • ")}</p>
                </div>
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            {activeIndex === index && (
              <div className="mt-4 p-4 bg-gray-100 rounded">
                <pre className="text-sm text-gray-700 overflow-hidden whitespace-pre-wrap break-words">{level.example}</pre>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

function Domains() {
  const registrationUrl = import.meta.env.VITE_REGISTRATION_URL;

  return (
    <Section id="simulations" className="bg-white">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Real-World Challenges
        </h2>
        <p className="text-gray-600">Practice with industry-specific scenarios</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <a
            key={index}
            href={registrationUrl}
            className="block p-6 rounded-lg hover:shadow-md transition"
            style={{ backgroundColor: category.bg, color: category.text }}
          >
            <span className="text-xs font-medium px-2 py-1 bg-white/50 rounded">
              {category.tag}
            </span>
            <h3 className="font-semibold mt-3">{category.label}</h3>
            <p className="text-sm opacity-80 mt-2">View challenge →</p>
          </a>
        ))}
      </div>
    </Section>
  );
}

function HowItWorks() {
  const registrationUrl = import.meta.env.VITE_REGISTRATION_URL;
  const steps = [
    { title: "Choose a Scenario", desc: "Pick from real-world business problems" },
    { title: "Write Queries", desc: "Solve challenges with SQL" },
    { title: "Get Feedback", desc: "Instant results and guidance" },
  ];

  return (
    <Section id="how-it-works" className="bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          How It Works
        </h2>
        <p className="text-gray-600">Simple learning process</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {steps.map((step, index) => (
          <div key={index} className="text-center p-6 bg-white rounded-lg">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-lg font-bold mb-4 mx-auto">
              {index + 1}
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <a href={registrationUrl} className="inline-block px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
          Start Learning
        </a>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-sm">© {new Date().getFullYear()} DataCareer. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4 text-sm">
          <a href="#" className="hover:text-blue-300">Privacy</a>
          <a href="#" className="hover:text-blue-300">Terms</a>
          <a href="#" className="hover:text-blue-300">Contact</a>
        </div>
      </div>
    </footer>
  );
}

function SQLLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main>
        <Hero />
        <WhySQL />
        <Journey />
        <Domains />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}

export default SQLLandingPage;