"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Expand, X } from "lucide-react";

const modules = [
  {
    title: "Dashboard",
    image: "/images/dashboard.png",
  },
  {
    title: "Prediction",
    image: "/images/prediction.png",
  },
  {
    title: "Analytics",
    image: "/images/analytics.png",
  },
  {
    title: "Heatmap",
    image: "/images/heatmap.png",
  },
];

export default function Platform() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="platform" className="relative scroll-mt-24 py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">
            Explore the Platform
          </h2>

          <p className="mt-4 text-zinc-400">
            AI-powered modules built for crime intelligence.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {modules.map((item, index) => (
            <motion.button
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              onClick={() => setActive(index)}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-gradient-to-b
                from-white/[0.05]
                to-white/[0.02]
                transition-all
                duration-300
                hover:border-violet-500/40
                hover:shadow-[0_25px_60px_rgba(139,92,246,.18)]
              "
            >
              {/* Glow */}

              <div className="absolute inset-0 bg-violet-500/0 transition duration-300 group-hover:bg-violet-500/5" />

              {/* Image */}

              <div className="overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={700}
                  height={500}
                  className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Footer */}

              <div className="flex items-center justify-between px-5 py-4">
                <h3 className="text-base font-semibold">{item.title}</h3>

                <Expand
                  size={16}
                  className="text-zinc-500 transition group-hover:text-violet-400"
                />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Preview */}

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => setActive(null)}
              className="absolute right-8 top-8 rounded-full border border-white/10 bg-white/5 p-3 hover:bg-white/10"
            >
              <X size={20} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-w-6xl overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={modules[active].image}
                alt={modules[active].title}
                width={1800}
                height={1100}
                className="w-full rounded-3xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
