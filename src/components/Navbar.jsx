import React, { useEffect, useState } from "react";
import { Waves } from "lucide-react";

function Navbar() {
  const [visitorCount, setVisitorCount] = useState(1);

  useEffect(() => {
    setVisitorCount((prev) => prev + Math.floor(Math.random() * 100));
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-cyan-600 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Waves className="h-6 w-6" /> BeautyOfBeaches
        </div>
        <ul className="flex gap-6 font-medium">
          <li><a href="#home" className="hover:text-yellow-200">Home</a></li>
          <li><a href="#zones" className="hover:text-yellow-200">Zones</a></li>
          <li><a href="#gallery" className="hover:text-yellow-200">Gallery</a></li>
          <li><a href="#about" className="hover:text-yellow-200">About Us</a></li>
          <li><a href="#contact" className="hover:text-yellow-200">Contact</a></li>
          <li><a href="#feedback" className="hover:text-yellow-200">Feedback</a></li>
        </ul>
        <div className="text-sm">Visitors: {visitorCount}</div>
      </div>
    </nav>
  );
}

export default Navbar;
