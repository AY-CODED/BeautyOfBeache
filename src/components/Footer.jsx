import React from "react";
import { motion } from "framer-motion";
import {
  Waves,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";

function Footer() {
  const year = new Date().getFullYear();

  const links = {
    Explore: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Gallery", href: "#gallery" },
      { label: "Events", href: "#events" },
    ],
    Experience: [
      { label: "Amenities", href: "#amenities" },
      { label: "Tickets & Booking", href: "#tickets" },
      { label: "Safety", href: "#safety" },
      { label: "FAQs", href: "#faqs" },
    ],
    Company: [
      { label: "Our Story", href: "#story" },
      { label: "Careers", href: "#careers" },
      { label: "Contact", href: "#contact" },
      { label: "Press", href: "#press" },
    ],
  };

  return (
    <footer className="relative overflow-hidden text-white">
      <div className="absolute -top-8 left-0 right-0 h-16 pointer-events-none select-none">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,29,158,17.39C230.57,51.69,284.4,13.62,339.39,7.57c54.88-6,104.64,18.88,161.08,33.41,71.15,18.34,142.31,13.45,213.47-2C778.74,24.66,849.9,1.52,921.05,0,992.2-1.52,1063.36,20.62,1117.24,35.16,1146.16,43,1173.08,49,1200,52.47V0Z"
            className="fill-sky-200/70"
          />
        </svg>
      </div>

      <div className="relative bg-gradient-to-br from-sky-900 via-teal-800 to-cyan-700">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ rotate: -8, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 12 }}
                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur shadow-lg ring-1 ring-white/20"
              >
                <Waves className="h-6 w-6" />
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold tracking-wide">
                  Beauty of Beaches
                </h3>
                <p className="text-sm text-white/80">
                  Sun-kissed shores, unforgettable moments.
                </p>
              </div>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-2 w-full max-w-md rounded-2xl bg-white/10 p-2 backdrop-blur ring-1 ring-white/15 sm:mt-0"
            >
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  required
                  placeholder="Your email for tide updates"
                  className="flex-1 rounded-xl bg-white/90 px-4 py-3 text-slate-900 placeholder-slate-500 outline-none"
                />
                <button
                  type="submit"
                  className="rounded-xl px-4 py-3 font-medium shadow-lg transition hover:shadow-xl active:scale-[0.98] bg-cyan-300 text-slate-900"
                >
                  Subscribe
                </button>
              </div>
              <p className="px-1 pt-1 text-xs text-white/70">
                No spam. Just surf reports, deals & events.
              </p>
            </form>
          </div>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(links).map(([group, items]) => (
              <nav key={group} aria-label={group} className="min-w-0">
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/80">
                  {group}
                </h4>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="group inline-flex items-center gap-2 text-white/90 transition hover:text-white"
                      >
                        <span className="h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-4" />
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/80">
                Get in touch
              </h4>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  <a href="mailto:hello@beautyofbeaches.com" className="hover:underline">
                    hello@beautyofbeaches.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <a href="tel:+2348000000000" className="hover:underline">
                    +234 800 000 0000
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5" />
                  <span>Lagos Waterfront, Nigeria</span>
                </li>
              </ul>

              <div className="mt-6">
                <h5 className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/70">
                  Follow the vibes
                </h5>
                <div className="flex flex-wrap gap-3">
                  {[
                    { Icon: Instagram, label: "Instagram", href: "#" },
                    { Icon: Facebook, label: "Facebook", href: "#" },
                    { Icon: Twitter, label: "Twitter", href: "#" },
                    { Icon: Youtube, label: "YouTube", href: "#" },
                  ].map(({ Icon, label, href }) => (
                    <motion.a
                      key={label}
                      href={href}
                      aria-label={label}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center rounded-xl bg-white/10 p-2 ring-1 ring-white/15 backdrop-blur transition hover:bg-white/20"
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/15 pt-6 text-sm text-white/80">
            <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
              <p>© {year} Beauty of Beaches. All rights reserved.</p>
              <div className="flex flex-wrap items-center gap-4">
                <a href="#privacy" className="hover:text-white">Privacy Policy</a>
                <span aria-hidden>•</span>
                <a href="#terms" className="hover:text-white">Terms of Service</a>
                <span aria-hidden>•</span>
                <a href="#cookies" className="hover:text-white">Cookies</a>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2 }}
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
            backgroundPosition: "0 0, 9px 9px",
          }}
        />
      </div>
    </footer>
  );
}

export default Footer;
