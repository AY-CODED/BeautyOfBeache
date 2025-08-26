import React from "react";
import { motion } from "framer-motion";
import { Waves, Sun, Umbrella } from "lucide-react";
import beach1 from "../assets/images/beach1.jpg"; // adjust the path if needed

function Home() {
    return (
        <section
            id="home"
            className="relative flex items-center justify-center min-h-screen bg-cover bg-center overflow-hidden pt-20"
            style={{ backgroundImage: `url(${beach1})` }}
        >
            <motion.div
                className="text-center max-w-3xl px-6 rounded-2xl p-8"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="flex justify-center gap-3 text-cyan-800 mb-4">
                    <Sun className="h-10 w-10" />
                    <Waves className="h-10 w-10" />
                    <Umbrella className="h-10 w-10" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-cyan-900 mb-4">
                    Welcome to{" "}
                    <span className="text-cyan-600">Beauty Of Beaches</span>
                </h1>
                <p className="text-lg md:text-xl text-cyan-800 mb-6">
                    Discover breathtaking beaches, enjoy sunny vibes, and book
                    your next unforgettable getaway.
                </p>
                <a
                    href="#zones"
                    className="bg-cyan-500 text-white px-6 py-3 rounded-xl font-medium shadow hover:bg-cyan-600 transition"
                >
                    Explore Zones
                </a>
            </motion.div>
        </section>
    );
}

export default Home;
