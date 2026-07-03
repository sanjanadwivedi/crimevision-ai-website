"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden py-36 scroll-mt-24">
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[180px]" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-4xl px-6 text-center"
      >
        <h2 className="text-4xl font-black tracking-tight md:text-5xl">
          Start Exploring Crime Intelligence
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
          Discover AI-powered crime prediction, analytics and interactive
          visualizations in one unified platform.
        </p>

        <a
          href="https://ai-crime-predictive-analysis.streamlit.app"
          target="_blank"
          rel="noopener noreferrer"
          className="
    mt-12
    inline-flex
    items-center
    gap-3
    rounded-full
    bg-violet-600
    px-8
    py-4
    font-semibold
    shadow-lg
    shadow-violet-600/30
    transition-all
    duration-300
    hover:scale-105
    hover:bg-violet-500
    hover:shadow-[0_0_45px_rgba(139,92,246,.45)]
  "
        >
          Launch Portal
          <ArrowRight size={18} />
        </a>
      </motion.div>
    </section>
  );
}
