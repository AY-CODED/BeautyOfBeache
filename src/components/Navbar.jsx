import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Waves } from "lucide-react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Pages", href: "#pages" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-sky-900/90 via-teal-800/90 to-cyan-700/90 backdrop-blur border-b border-white/10">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-4">
                {/* Logo */}
                <motion.a
                    href="#home"
                    className="flex items-center gap-2 text-white font-bold text-lg tracking-wide"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <Waves className="h-6 w-6" />
                    BeautyOfBeaches
                </motion.a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8 text-white">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                className="transition hover:text-cyan-300 hover:underline underline-offset-4"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="#bookings"
                            className="rounded-xl bg-cyan-300 px-4 py-2 font-medium text-slate-900 shadow hover:shadow-lg transition"
                        >
                            Bookings
                        </a>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-white hover:text-cyan-300"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-sky-900/95 text-white p-4 space-y-4"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="block hover:text-cyan-300"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#bookings"
                        className="block rounded-xl bg-cyan-300 px-4 py-2 font-medium text-slate-900 text-center shadow hover:shadow-lg transition"
                        onClick={() => setIsOpen(false)}
                    >
                        Bookings
                    </a>
                </motion.div>
            )}
        </header>
    );
}

export default Navbar;
