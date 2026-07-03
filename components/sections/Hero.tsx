"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] items-center overflow-hidden pt-16"
    >
      {/* Background */}
      <div className="absolute -top-40 right-0 h-[550px] w-[550px] rounded-full bg-violet-600/10 blur-[170px]" />
      <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-blue-500/5 blur-[150px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-24 px-6 lg:grid-cols-[0.85fr_1fr]">
        {/* Left */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          {/* Badge */}

          <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
            AI Crime Intelligence
          </span>

          {/* Heading */}

          <h1 className="mt-8 text-6xl font-black leading-[1.05] tracking-[-0.05em] lg:text-7xl">
            Predict Crime
            <br />
            Before It
            <span className="text-violet-400"> Happens.</span>
          </h1>

          {/* Description */}

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            AI-powered crime prediction with intelligent analytics, interactive
            dashboards and geospatial visualization.
          </p>

          {/* Button */}

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
    hover:shadow-[0_0_40px_rgba(139,92,246,.45)]
  "
          >
            Launch Portal
            <ArrowRight size={18} />
          </a>
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center lg:-mt-6 lg:justify-end"
        >
          <div
            className="
              group
              w-full
              max-w-[450px]
              rounded-[28px]
              border
              border-white/10
              bg-white/[0.03]
              p-[3px]
              shadow-[0_40px_100px_rgba(0,0,0,.45)]
              backdrop-blur-xl
            "
          >
            <Image
              src="/images/dashboard.png"
              alt="CrimeVision Dashboard"
              width={1800}
              height={900}
              priority
              className="
                w-full
                rounded-[24px]
                transition-all
                duration-500
                group-hover:scale-[1.01]
              "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
