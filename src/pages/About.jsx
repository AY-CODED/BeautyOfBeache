import React from "react";
import { motion } from "framer-motion";
import { Globe, Heart, Umbrella } from "lucide-react";
import aboutImg from "../assets/images/east.jpg"; // ✅ add a nice beach image

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        
        {/* Left: Image with animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={aboutImg}
            alt="Beautiful beach"
            className="rounded-2xl shadow-lg w-full object-cover h-80"
          />
        </motion.div>

        {/* Right: Text with highlights */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl font-bold mb-6 text-cyan-700">About Us</h2>
          <p className="text-cyan-800 mb-6">
            <span className="font-semibold">BeautyOfBeaches</span> is a 
            tourism-focused portal providing curated information about the 
            most stunning beaches across the globe. Our mission is to make 
            your beach vacations simple, accessible, and unforgettable.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-cyan-50 rounded-xl shadow hover:shadow-md transition">
              <Globe className="mx-auto mb-2 text-cyan-600" size={28} />
              <h3 className="font-semibold text-cyan-700">Global</h3>
              <p className="text-sm text-cyan-600">Beaches worldwide</p>
            </div>
            <div className="p-4 bg-cyan-50 rounded-xl shadow hover:shadow-md transition">
              <Heart className="mx-auto mb-2 text-cyan-600" size={28} />
              <h3 className="font-semibold text-cyan-700">Memorable</h3>
              <p className="text-sm text-cyan-600">Unforgettable trips</p>
            </div>
            <div className="p-4 bg-cyan-50 rounded-xl shadow hover:shadow-md transition">
              <Umbrella className="mx-auto mb-2 text-cyan-600" size={28} />
              <h3 className="font-semibold text-cyan-700">Relax</h3>
              <p className="text-sm text-cyan-600">Stress-free planning</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
