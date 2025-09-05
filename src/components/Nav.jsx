import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DataCareerLogo from "../assets/DataCareerLogo.png";
import { REGISTRATION_URL, LOGIN_URL } from "../api";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      setTimeout(() => {
        const delayedElement = document.getElementById(id);
        if (delayedElement) {
          delayedElement.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.hash = id;
        }
      }, 100);
    }
    setIsOpen(false);
  };

  const navigateToHome = () => {
    navigate('/');
    setIsOpen(false);
  };

  const scrollToTop = () => {
    // Multiple fallback methods for different environments
    try {
      // Method 1: Try smooth scroll
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } catch (error) {
      try {
        // Method 2: Try instant scroll
        window.scrollTo(0, 0);
      } catch (error2) {
        try {
          // Method 3: Try scrollIntoView on body
          document.body.scrollIntoView({ behavior: 'smooth' });
        } catch (error3) {
          try {
            // Method 4: Try scrollIntoView on html
            document.documentElement.scrollIntoView({ behavior: 'smooth' });
          } catch (error4) {
            // Method 5: Final fallback - use jQuery-like approach
            if (document.documentElement && document.documentElement.scrollTop !== undefined) {
              document.documentElement.scrollTop = 0;
            } else if (document.body && document.body.scrollTop !== undefined) {
              document.body.scrollTop = 0;
            } else {
              // Method 6: Use window.scroll
              window.scroll(0, 0);
            }
          }
        }
      }
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: "Interview Questions", id: "simulations" },
    { label: "Simulations", id: "domains" },
    { label: "How it works", id: "how-it-works" }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <button
          onClick={navigateToHome}
          className="flex items-center hover:opacity-80 transition-opacity cursor-pointer"
        >
          <img src={DataCareerLogo} alt="DataCareer" className="h-8 w-auto" />
        </button>

        {/* Desktop Navigation - Only on large screens (lg: and above) */}
        <nav className="hidden lg:flex items-center gap-6 text-gray-700">
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

        {/* Desktop CTA - Only on large screens (lg: and above) */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to={LOGIN_URL} className="px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition">
            SIGN IN
          </Link>
          <Link to={REGISTRATION_URL} className="px-6 py-2 text-sm text-white bg-[#e9724c] rounded-lg hover:bg-[#c45e41] transition">
            Start Free
          </Link>
        </div>

        {/* Mobile/Tablet Menu Button - Show on screens smaller than lg: */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile/Tablet Menu - Show on screens smaller than lg: */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 min-h-screen">
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
              <Link to={LOGIN_URL} className="block w-full text-center px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded-lg">
                SIGN IN
              </Link>
              <Link to={REGISTRATION_URL} className="block w-full text-center px-4 py-2 text-sm text-white bg-[#e9724c] rounded-lg hover:bg-[#c45e41] transition">
                Start Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Nav;
