import React, { useState, useEffect } from "react";
import DataCareerLogo from "../assets/DataCareerLogo.png";
import BHPLogo from "../assets/BHP Group.png";
import TelstraLogo from "../assets/Telstra.png";
import WoolworthsLogo from "../assets/Woolworths.png";
import CommBankLogo from "../assets/CommBank.png";
import { Link } from "react-router-dom";

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
  const loginUrl = import.meta.env.VITE_LOGIN_URL;

  const scrollTo = (id) => {
    try {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        // Fallback: scroll to top if element not found
        window.scrollTo({ 
          top: 0, 
          behavior: 'smooth' 
        });
      }
      setIsOpen(false);
    } catch (error) {
      // Fallback for environments where smooth scroll might not work
      try {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        } else {
          window.scrollTo(0, 0);
        }
      } catch (fallbackError) {
        // Final fallback
        window.scrollTo(0, 0);
      }
      setIsOpen(false);
    }
  };

  const scrollToTop = () => {
    try {
      window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
      });
    } catch (error) {
      // Fallback for environments where smooth scroll might not work
      window.scrollTo(0, 0);
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: "Why SQL?", id: "why-sql" },
    { label: "Interview Questions", id: "simulations" },
    { label: "Simulations", id: "domains" },
    { label: "How it works", id: "how-it-works" }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <button
          onClick={scrollToTop}
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <img src={DataCareerLogo} alt="DataCareer" className="h-8 w-auto" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-gray-700">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm hover:text-blue-600 transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link to={loginUrl} className="px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition">
            Explore
          </Link>
          <Link to={registrationUrl} className="px-6 py-2 text-sm text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition">
            Start Free
          </Link>
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
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left text-sm text-gray-700 py-2 hover:text-blue-600"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 space-y-3">
              <Link to={loginUrl} className="block w-full text-center px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded-lg">
                Explore Challenges
              </Link>
              <Link to={registrationUrl} className="block w-full text-center px-4 py-2 text-sm text-white bg-orange-500 rounded-lg">
                Start Free
              </Link>
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
    <div className="bg-gradient-to-r from-[#3D518C] to-[#7692FF] text-white">
      <Section className="text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Master SQL for Data Jobs
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Learn SQL through real-world simulations and stand out in the job market.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={registrationUrl} className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
            Start Learning Free
          </Link>
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

function InterviewQuestions() {
  const questions = [
    {
      company: "Woolworths",
      logo: WoolworthsLogo,
      title: "Redeemed Points Analysis",
      difficulty: "Beginner",
      difficultyColor: "bg-green-100 text-green-800"
    },
    {
      company: "Woolworths",
      logo: WoolworthsLogo,
      title: "Best & Worst Performing Stores",
      difficulty: "Beginner",
      difficultyColor: "bg-green-100 text-green-800"
    },
    {
      company: "Woolworths",
      logo: WoolworthsLogo,
      title: "Loyalty Trends Over Time",
      difficulty: "Advanced",
      difficultyColor: "bg-red-100 text-red-800"
    },
    {
      company: "CommBank",
      logo: CommBankLogo,
      title: "Weekend vs Weekday Spending Patterns",
      difficulty: "Beginner",
      difficultyColor: "bg-green-100 text-green-800"
    },
    {
      company: "CommBank",
      logo: CommBankLogo,
      title: "Age-based Financial Behaviour",
      difficulty: "Intermediate",
      difficultyColor: "bg-yellow-100 text-yellow-800"
    },
    {
      company: "CommBank",
      logo: CommBankLogo,
      title: "Account Dormancy Risk Assessment",
      difficulty: "Advanced",
      difficultyColor: "bg-red-100 text-red-800"
    },
    {
      company: "Telstra",
      logo: TelstraLogo,
      title: "High-Traffic Network Asset",
      difficulty: "Beginner",
      difficultyColor: "bg-green-100 text-green-800"
    },
    {
      company: "Telstra",
      logo: TelstraLogo,
      title: "Highly Congested Network Assets",
      difficulty: "Intermediate",
      difficultyColor: "bg-yellow-100 text-yellow-800"
    },
    {
      company: "Telstra",
      logo: TelstraLogo,
      title: "Latency vs Packet Loss Correlation",
      difficulty: "Advanced",
      difficultyColor: "bg-red-100 text-red-800"
    },
    {
      company: "BHP Group",
      logo: BHPLogo,
      title: "High-Compliance Mining Workforce",
      difficulty: "Beginner",
      difficultyColor: "bg-green-100 text-green-800"
    },
    {
      company: "BHP Group",
      logo: BHPLogo,
      title: "Top Performing Employees",
      difficulty: "Intermediate",
      difficultyColor: "bg-yellow-100 text-yellow-800"
    },
    {
      company: "BHP Group",
      logo: BHPLogo,
      title: "Effectiveness of Safety Training",
      difficulty: "Advanced",
      difficultyColor: "bg-red-100 text-red-800"
    }
  ];

  const registrationUrl = import.meta.env.VITE_REGISTRATION_URL;

  return (
    <Section id="simulations" className="bg-white">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Ace the SQL & Data Science Interview
        </h2>
        <p className="text-lg text-gray-600 mb-2">
          Practice SQL Interview and Data Science Interview questions on DataCareer.
        </p>
        <p className="text-sm text-gray-500">
          Made by DataCareer Team, Best-Selling Author of Ace the Data Science Interview.
        </p>
      </div>
      
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse bg-white rounded-lg shadow-lg overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Company
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Difficulty
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {questions.map((question, index) => (
              <tr 
                key={index} 
                className="hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => window.open(registrationUrl, '_blank')}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img 
                      src={question.logo} 
                      alt={question.company} 
                      className="h-8 w-8 rounded-full mr-3"
                    />
                    <span className="text-sm font-medium text-gray-900">
                      {question.company}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-900">
                    {question.title}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${question.difficultyColor}`}>
                    {question.difficulty}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {questions.map((question, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg shadow-md p-4 border border-gray-200 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => window.open(registrationUrl, '_blank')}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <img 
                  src={question.logo} 
                  alt={question.company} 
                  className="h-10 w-10 rounded-full mr-3"
                />
                <span className="text-sm font-semibold text-gray-900">
                  {question.company}
                </span>
              </div>
              <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${question.difficultyColor}`}>
                {question.difficulty}
              </span>
            </div>
            <h3 className="text-sm text-gray-700 font-medium">
              {question.title}
            </h3>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Link 
          to={registrationUrl} 
          className="inline-block px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
        >
          Start Practicing
        </Link>
      </div>
    </Section>
  );
}

function Domains() {
  const registrationUrl = import.meta.env.VITE_REGISTRATION_URL;

  return (
    <Section id="domains" className="bg-gray-50">
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
            to={registrationUrl}
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
        <Link to={registrationUrl} className="inline-block px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
          Start Learning
        </Link>  
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center flex flex-col justify-between items-center sm:flex-row">
        <p className="text-sm">© {new Date().getFullYear()} DataCareer. All rights reserved.</p>
        <div className="flex justify-center space-x-6 text-sm mt-4 sm:mt-0">
          <Link to="#" className="hover:text-blue-300">Privacy</Link>
          <Link to="#" className="hover:text-blue-300">Terms</Link>
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
        <InterviewQuestions />
        <Domains />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}

export default SQLLandingPage;