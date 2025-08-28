import React from "react";
import { Link } from "react-router-dom";
import Section from "./Section";
import BHPLogo from "../assets/BHP Group.png";
import TelstraLogo from "../assets/Telstra.png";
import WoolworthsLogo from "../assets/Woolworths.png";
import CommBankLogo from "../assets/CommBank.png";
import { REGISTRATION_URL } from "../api";

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
                onClick={() => window.open(REGISTRATION_URL, '_blank')}
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
            onClick={() => window.open(REGISTRATION_URL, '_blank')}
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
          to={REGISTRATION_URL} 
          className="inline-block px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
        >
          Start Practicing
        </Link>
      </div>
    </Section>
  );
}

export default InterviewQuestions;
