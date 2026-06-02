"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { ServiceDetail } from "@types";

interface ServiceFeaturesProps {
  service: ServiceDetail;
}

export default function ServiceFeatures({ service }: ServiceFeaturesProps) {
  return (
    <section className="py-20 bg-zinc-50 border-y border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl font-bold text-zinc-900 mb-3 tracking-tight">
            Comprehensive {service.title} Solutions
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
            Everything your business needs — handled with precision,
            accountability, and expertise.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {service.subServices.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <div className="h-full bg-white border border-zinc-200 rounded-2xl p-7 hover:border-primary/30 hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <h3 className="font-semibold text-zinc-900">{item.title}</h3>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed pl-8">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
