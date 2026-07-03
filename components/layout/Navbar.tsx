"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  {
    title: "Features",
    href: "#platform",
  },
  {
    title: "How It Works",
    href: "#how",
  },
  {
    title: "GitHub",
    href: "https://github.com/sanjanadwivedi/AI-Crime-Intelligence-Portal",
    external: true,
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/50 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}

        <Link href="/" className="text-3xl font-black tracking-tight">
          CrimeVision
          <span className="text-violet-400">AI</span>
        </Link>

        {/* Navigation */}

        <nav className="hidden items-center gap-12 md:flex">
          {links.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="group relative text-sm font-medium text-zinc-400 transition hover:text-white"
            >
              {item.title}

              <span className="absolute -bottom-1 left-0 h-px w-0 bg-violet-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA */}

        <a
          href="https://ai-crime-predictive-analysis.streamlit.app"
          target="_blank"
          rel="noopener noreferrer"
          className="
  inline-flex
  items-center
  rounded-full
  bg-violet-600
  px-6
  py-2.5
  text-sm
  font-semibold
  shadow-lg
  shadow-violet-600/20
  transition-all
  duration-300
  hover:scale-105
  hover:bg-violet-500
  hover:shadow-[0_0_35px_rgba(139,92,246,.45)]
  "
        >
          Launch Portal
        </a>
      </div>
    </motion.header>
  );
}
