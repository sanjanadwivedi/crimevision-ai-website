"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "50K+",
    label: "Crime Records",
  },
  {
    value: "95%",
    label: "Prediction Accuracy",
  },
  {
    value: "700+",
    label: "Districts Covered",
  },
  {
    value: "24/7",
    label: "AI Monitoring",
  },
];

export default function Stats() {
  return (
    <section id="stats" className="relative scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-2 divide-y divide-white/10 lg:grid-cols-4 lg:divide-y-0 lg:divide-x lg:divide-white/10">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                className="py-12 text-center"
              >
                <h2 className="text-5xl font-black tracking-tight md:text-6xl">
                  {stat.value}
                </h2>

                <p className="mt-4 text-sm text-zinc-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
