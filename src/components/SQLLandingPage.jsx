import React, { useEffect } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import WhySQL from "./WhySQL";
import InterviewQuestions from "./InterviewQuestions";
import Domains from "./Domains";
import HowItWorks from "./HowItWorks";
import Footer from "./Footer";

function SQLLandingPage() {
  // Handle scroll to top on page load for production environments
  useEffect(() => {
    // Force scroll to top on component mount (helps with production builds)
    const forceScrollToTop = () => {
      try {
        // Try multiple methods to ensure it works in all environments
        if (window.scrollTo) {
          window.scrollTo(0, 0);
        } else if (document.documentElement && document.documentElement.scrollTop !== undefined) {
          document.documentElement.scrollTop = 0;
        } else if (document.body && document.body.scrollTop !== undefined) {
          document.body.scrollTop = 0;
        }
      } catch (error) {
        console.warn('Scroll to top failed:', error);
      }
    };

    // Execute immediately
    forceScrollToTop();

    // Also try after a small delay to handle any rendering delays
    const timer = setTimeout(forceScrollToTop, 100);

    // Cleanup
    return () => clearTimeout(timer);
  }, []);

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