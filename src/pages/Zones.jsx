import React from "react";
import { motion } from "framer-motion";
import { Compass, Sun, Map, Waves } from "lucide-react";

// ✅ Import images from src/assets/images/
import north from "../assets/images/north.jpg";
import south from "../assets/images/south.jpg";
import east from "../assets/images/east.jpg";
import west from "../assets/images/west.jpg";

const zones = [
  {
    name: "North",
    icon: <Compass size={28} className="text-white" />,
    img: north,
  },
  {
    name: "South",
    icon: <Sun size={28} className="text-white" />,
    img: south,
  },
  {
    name: "East",
    icon: <Map size={28} className="text-white" />,
    img: east,
  },
  {
    name: "West",
    icon: <Waves size={28} className="text-white" />,
    img: west,
  },
];

function Zones() {
  return (
    <section id="zones" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10 text-cyan-700">
        Explore by Zone
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        {zones.map((zone, i) => (
          <motion.div
            key={zone.name}
            className="relative h-48 rounded-xl shadow-lg flex items-end cursor-pointer overflow-hidden"
            style={{
              backgroundImage: `url(${zone.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 w-full p-4 text-left text-white">
              <div className="flex items-center gap-2 mb-2">
                {zone.icon}
                <h3 className="text-xl font-semibold">{zone.name} Beaches</h3>
              </div>
              <p className="text-sm">
                Discover famous {zone.name.toLowerCase()} beaches
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Zones;
