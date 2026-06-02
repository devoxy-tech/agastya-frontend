"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Target,
  Eye,
  Heart,
} from "lucide-react";
import { Button } from "@components/ui/button";
import { Separator } from "@components/ui/separator";

const values = [
  "Integrity in every engagement",
  "Precision and accuracy in all work",
  "Client-first approach always",
  "Continuous learning and growth",
  "Transparent communication",
  "Timely delivery, every time",
];

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To simplify financial complexities and empower businesses to focus on what truly matters — growth. We deliver dependable, accurate, and value-driven solutions.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the most trusted accounting and advisory firm in Gujarat, known for transforming businesses through expert guidance, innovation, and unwavering integrity.",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Honesty, transparency, and client success drive everything we do. We build relationships on trust and deliver excellence without compromise.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">
              About Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-6 tracking-tight">
              Who We Are
            </h2>

            <p className="text-zinc-600 leading-relaxed mb-6 text-lg">
              Agastya Accounting is a team of dedicated Chartered Accountants and
              finance professionals committed to providing comprehensive
              accounting, taxation, GST, audit, compliance, and business
              advisory services.
            </p>

            <p className="text-zinc-500 leading-relaxed mb-8">
              We blend technical expertise with personalized attention, ensuring
              every client receives strategic solutions that foster growth and
              financial stability. With over a decade of experience serving
              businesses across Gujarat, we understand the unique challenges
              faced by Indian businesses and deliver solutions that truly work.
            </p>

            {/* Values list */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-zinc-900 mb-4 uppercase tracking-wide">
                Core Values
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {values.map((value) => (
                  <div key={value} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-zinc-600">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button asChild>
              <Link href="#contact">
                Work With Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Right — pillars */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                >
                  <div className="flex gap-5 p-6 bg-zinc-50 border border-zinc-200 rounded-2xl hover:border-zinc-300 transition-colors">
                    <div
                      className={`w-11 h-11 ${pillar.bg} rounded-xl flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon className={`w-5 h-5 ${pillar.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 mb-1">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-zinc-500 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            <Separator />

            {/* Location badge */}
            <div className="flex items-center gap-4 p-5 bg-indigo-50 border border-indigo-100 rounded-2xl">
              <div className="text-3xl font-bold text-primary">10+</div>
              <div>
                <p className="font-semibold text-zinc-900">
                  Years Serving Gujarat
                </p>
                <p className="text-sm text-zinc-500">
                  Based in Mehsana · Serving all of Gujarat & beyond
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
