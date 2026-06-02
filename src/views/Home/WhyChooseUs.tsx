"use client";

import { motion } from "framer-motion";
import { Award, Target, Eye } from "lucide-react";
import { features } from "@config/data";

const iconMap: Record<string, React.ElementType> = {
  Award,
  Target,
  Eye,
};

const cardStyles = [
  {
    accent: "border-l-indigo-500",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    accent: "border-l-violet-500",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    accent: "border-l-blue-500",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">
            Why Agastya Accounting
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-4 tracking-tight">
            The Agastya Difference
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
            We don&apos;t just handle numbers — we build lasting partnerships
            grounded in expertise, trust, and results.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            const style = cardStyles[index];

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`group h-full bg-white border border-zinc-200 border-l-4 ${style.accent} rounded-2xl p-8 hover:shadow-md transition-all duration-300`}
                >
                  <div
                    className={`w-12 h-12 ${style.iconBg} rounded-xl flex items-center justify-center mb-6`}
                  >
                    <Icon className={`w-6 h-6 ${style.iconColor}`} />
                  </div>

                  <h3 className="text-xl font-bold text-zinc-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
