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
        // Use smooth scrolling instead of instant scrolling
        window.scrollTo({ 
          top: 0, 
          left: 0,
          behavior: 'smooth'
        });
      } catch (error) {
        // Fallback to instant scroll if smooth scroll fails
        try {
          if (window.scrollTo) {
            window.scrollTo(0, 0);
          } else if (document.documentElement && document.documentElement.scrollTop !== undefined) {
            document.documentElement.scrollTop = 0;
          } else if (document.body && document.body.scrollTop !== undefined) {
            document.body.scrollTop = 0;
          }
        } catch (fallbackError) {
          console.warn('Scroll to top failed:', fallbackError);
        }
      }
    };

    // Execute immediately with smooth scroll
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