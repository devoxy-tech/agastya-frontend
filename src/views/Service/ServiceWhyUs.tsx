"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@components/ui/button";
import type { ServiceDetail } from "@types";

interface ServiceWhyUsProps {
  service: ServiceDetail;
}

export default function ServiceWhyUs({ service }: ServiceWhyUsProps) {
  const { whyUs } = service;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl font-bold text-zinc-900 mb-5 tracking-tight">
              {whyUs.heading}
            </h2>
            <p className="text-zinc-500 leading-relaxed mb-8 text-lg">
              {whyUs.body}
            </p>

            <Button asChild>
              <Link href="/#contact">
                Book a Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Right — bullets */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8">
              <ul className="space-y-4">
                {whyUs.bullets.map((bullet, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-zinc-700 font-medium">{bullet}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
