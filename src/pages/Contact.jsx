import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-sky-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-cyan-700 mb-4"
        >
          Get in Touch
        </motion.h2>
        <p className="text-cyan-800 max-w-2xl mx-auto mb-12">
          Have questions, suggestions, or just want to say hello?  
          We’d love to hear from you!
        </p>

        {/* Contact Info Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {[
            { icon: <Mail size={28} />, label: "Email", value: "info@beautyofbeaches.com" },
            { icon: <Phone size={28} />, label: "Phone", value: "+234 800 123 4567" },
            { icon: <MapPin size={28} />, label: "Location", value: "Lagos, Nigeria" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="p-6 bg-white rounded-xl shadow hover:shadow-md transition text-cyan-700"
            >
              <div className="flex justify-center mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg">{item.label}</h3>
              <p className="text-sm text-cyan-600 mt-1">{item.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto"
        >
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-cyan-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border border-cyan-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border border-cyan-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 mb-4"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-cyan-600 text-white rounded-lg shadow hover:bg-cyan-700 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
