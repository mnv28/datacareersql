  import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
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

export default Footer;
