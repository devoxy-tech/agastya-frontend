"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Store,
  Factory,
  ShoppingBag,
  Briefcase,
  GraduationCap,
  BarChart3,
  Building,
} from "lucide-react";
import { industries } from "@config/data";

const iconMap: Record<string, React.ElementType> = {
  Rocket,
  Store,
  Factory,
  ShoppingBag,
  Briefcase,
  GraduationCap,
  BarChart3,
  Building,
};

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-white">
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
            Industries We Serve
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-4 tracking-tight">
            Expertise Across Every Sector
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
            From startups to large enterprises, we bring tailored financial
            expertise to businesses across every industry.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {industries.map((industry, index) => {
            const Icon = iconMap[industry.icon];

            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <div className="group flex flex-col items-center gap-3 p-5 bg-zinc-50 border border-zinc-200 rounded-2xl hover:border-primary/30 hover:bg-indigo-50/50 hover:shadow-sm transition-all duration-300 cursor-default text-center h-full">
                  <div className="w-10 h-10 bg-white border border-zinc-200 rounded-xl flex items-center justify-center group-hover:border-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-zinc-600 group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-xs font-medium text-zinc-700 group-hover:text-zinc-900 leading-tight">
                    {industry.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-zinc-500 text-sm mt-10"
        >
          Don&apos;t see your industry?{" "}
          <a
            href="#contact"
            className="text-primary font-medium hover:underline"
          >
            Contact us
          </a>{" "}
          — we work with businesses of all types.
        </motion.p>
      </div>
    </section>
  );
}
