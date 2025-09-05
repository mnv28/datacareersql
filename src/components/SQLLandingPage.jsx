import React, { useEffect } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import InterviewQuestions from "./InterviewQuestions";
import Domains from "./Domains";
import HowItWorks from "./HowItWorks";
import Footer from "./Footer";

function SQLLandingPage() {
  useEffect(() => {
    const forceScrollToTop = () => {
      try {
        window.scrollTo({ 
          top: 0, 
          left: 0,
          behavior: 'smooth'
        });
      } catch (error) {
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

    forceScrollToTop();

    const timer = setTimeout(forceScrollToTop, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main>
        <InterviewQuestions />
        {/* <WhySQL /> */}
        <Domains />
        <Hero />  
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}

export default SQLLandingPage;