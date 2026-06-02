"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@config/data";

function useCountUp(target: number, duration = 2000, isActive = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration, isActive]);

  return count;
}

function StatCard({
  stat,
  index,
  isActive,
}: {
  stat: (typeof stats)[0];
  index: number;
  isActive: boolean;
}) {
  const count = useCountUp(stat.numericValue, 2000, isActive);

  const displayValue =
    stat.suffix === "%"
      ? `${count}${stat.suffix}`
      : `${count.toLocaleString()}${stat.suffix}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="bg-white border border-zinc-200 rounded-2xl p-8 hover:border-primary/30 hover:shadow-md transition-all duration-300 text-center h-full">
        <div className="text-4xl lg:text-5xl font-bold text-zinc-900 mb-2 tabular-nums">
          {displayValue}
        </div>
        <div className="text-base font-semibold text-zinc-700 mb-1">
          {stat.label}
        </div>
        <div className="text-sm text-zinc-500">{stat.description}</div>
      </div>
    </motion.div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-zinc-50 border-y border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-zinc-900 mb-3">
            Numbers That Speak for Themselves
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto">
            Over a decade of delivering excellence in accounting, taxation, and
            financial advisory services.
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              stat={stat}
              index={index}
              isActive={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
