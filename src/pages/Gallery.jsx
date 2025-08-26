import React from "react";
import { motion } from "framer-motion";

import beach1 from "../assets/images/beach1.jpg";
import beach2 from "../assets/images/beach2.jpg";
import beach3 from "../assets/images/beach3.jpg";
import beach4 from "../assets/images/beach4.jpg";

function Gallery() {
    const images = [beach1, beach2, beach3, beach4]; // ✅ all 4 images

    return (
        <section id="gallery" className="py-20 bg-sky-50 text-center">
            <h2 className="text-3xl font-bold mb-10 text-cyan-700">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto px-6">
                {images.map((src, i) => (
                    <motion.img
                        key={i}
                        src={src}
                        alt={`Beach ${i + 1}`}
                        className="rounded-xl shadow-lg w-full h-64 object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                        }}
                    />
                ))}
            </div>
        </section>
    );
}

export default Gallery;
