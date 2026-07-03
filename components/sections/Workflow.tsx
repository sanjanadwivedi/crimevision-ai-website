"use client";

import { motion } from "framer-motion";
import { Database, BrainCircuit, BarChart3, Map } from "lucide-react";

const steps = [
  {
    icon: Database,
    title: "Collect Data",
    description: "Load historical NCRB crime records for analysis.",
  },
  {
    icon: BrainCircuit,
    title: "Analyze Patterns",
    description:
      "AI identifies trends and crime patterns from historical data.",
  },
  {
    icon: BarChart3,
    title: "Predict Trends",
    description: "Generate machine learning–based crime forecasts.",
  },
  {
    icon: Map,
    title: "Visualize Insights",
    description: "Explore dashboards, analytics and interactive heatmaps.",
  },
];

export default function Workflow() {
  return (
    <section id="how" className="py-28 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">
            How It Works
          </h2>

          <p className="mt-4 text-zinc-400">
            From raw crime data to AI-powered insights.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-gradient-to-b
                  from-white/[0.05]
                  to-white/[0.02]
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-violet-500/40
                  hover:shadow-[0_20px_50px_rgba(139,92,246,.18)]
                "
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-semibold">{step.title}</h3>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
