"use client";

import { motion } from "framer-motion";
import { processSteps } from "@config/data";

export default function Process() {
  return (
    <section className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-3 block">
            How We Work
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
            A Simple, Structured Process
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            We follow a proven four-step methodology that ensures clarity,
            precision, and exceptional outcomes for every client.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-zinc-700" />

          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative"
            >
              <div className="text-center lg:text-left">
                {/* Step number */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6">
                  <div className="absolute inset-0 bg-indigo-600/20 rounded-xl" />
                  <div className="relative w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {step.number}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
