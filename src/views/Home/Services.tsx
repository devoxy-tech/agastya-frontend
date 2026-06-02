"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  Users,
  FileText,
  Receipt,
  TrendingUp,
  Building2,
  Shield,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import { services } from "@config/data";
import { cn } from "@lib/utils";

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Users,
  FileText,
  Receipt,
  TrendingUp,
  Building2,
  Shield,
  Lightbulb,
};

const iconColors = [
  "bg-indigo-50 text-indigo-600",
  "bg-violet-50 text-violet-600",
  "bg-blue-50 text-blue-600",
  "bg-emerald-50 text-emerald-600",
  "bg-amber-50 text-amber-600",
  "bg-rose-50 text-rose-600",
  "bg-cyan-50 text-cyan-600",
  "bg-orange-50 text-orange-600",
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
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
            What We Do
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-4 tracking-tight">
            Comprehensive Financial &amp; Tax Solutions
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg leading-relaxed">
            From day-to-day bookkeeping to strategic advisory, we cover every
            aspect of your financial and compliance requirements.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            const colorClass = iconColors[index % iconColors.length];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
              >
                <div className="group h-full bg-white border border-zinc-200 rounded-2xl p-6 hover:border-primary/30 hover:shadow-md transition-all duration-300 flex flex-col">
                  <div
                    className={cn(
                      "w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300",
                      colorClass
                    )}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-semibold text-zinc-900 mb-2 text-base">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed flex-1 mb-4">
                    {service.description}
                  </p>

                  <Link
                    href={service.href}
                    className="flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all duration-200 group-hover:underline"
                  >
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
