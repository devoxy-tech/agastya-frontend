"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Award,
  TrendingUp,
  Scale,
} from "lucide-react";
import { Button } from "@components/ui/button";
import { Badge } from "@components/ui/badge";

const trustIndicators = [
  { icon: Award, label: "Expert Financial Guidance" },
  { icon: Scale, label: "GST & Tax Specialists" },
  { icon: TrendingUp, label: "Business Advisory Experts" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 bg-white overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.06),transparent)]" />
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeUp}
              className="mb-6"
            >
              <Badge
                variant="indigo"
                className="text-xs font-semibold tracking-wide px-3 py-1"
              >
                Chartered Accountants · Mehsana, Gujarat
              </Badge>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              custom={0.1}
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 tracking-tight leading-[1.1] mb-6"
            >
              Your Trusted{" "}
              <span className="text-primary">Accounting</span>{" "}
              &amp; Tax Partner
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={0.2}
              variants={fadeUp}
              className="text-lg text-zinc-500 leading-relaxed mb-8 max-w-lg"
            >
              Helping businesses simplify compliance, taxation, accounting, GST,
              audits, and financial management with expert guidance and
              personalized solutions.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.3}
              variants={fadeUp}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Button size="lg" asChild>
                <Link href="#contact">
                  Book Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#services">Explore Services</Link>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.4}
              variants={fadeUp}
              className="flex flex-wrap gap-4"
            >
              {trustIndicators.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 text-sm text-zinc-600"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-900 text-sm">
                      Financial Health Report
                    </p>
                    <p className="text-xs text-zinc-500">FY 2024–25</p>
                  </div>
                  <div className="ml-auto">
                    <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                      On Track
                    </span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: "Tax Savings", value: "₹2.4L", up: true },
                    { label: "Compliance", value: "100%", up: true },
                    { label: "Returns Filed", value: "48", up: true },
                    { label: "GST Returns", value: "24/24", up: true },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="bg-white border border-zinc-200 rounded-xl p-4"
                    >
                      <p className="text-xs text-zinc-500 mb-1">{m.label}</p>
                      <p className="text-xl font-bold text-zinc-900">
                        {m.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Progress bars */}
                <div className="space-y-3">
                  {[
                    { label: "Bookkeeping", pct: 100 },
                    { label: "GST Compliance", pct: 100 },
                    { label: "ITR Filing", pct: 100 },
                  ].map((bar) => (
                    <div key={bar.label}>
                      <div className="flex justify-between text-xs text-zinc-500 mb-1">
                        <span>{bar.label}</span>
                        <span>{bar.pct}%</span>
                      </div>
                      <div className="h-1.5 bg-zinc-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${bar.pct}%` }}
                          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                          className="h-full bg-primary rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="absolute -bottom-5 -left-5 bg-white border border-zinc-200 rounded-xl shadow-md px-4 py-3 flex items-center gap-3"
              >
                <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-900">
                    Zero Penalties
                  </p>
                  <p className="text-[10px] text-zinc-500">10+ Years Record</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="absolute -top-5 -right-5 bg-white border border-zinc-200 rounded-xl shadow-md px-4 py-3 flex items-center gap-3"
              >
                <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center">
                  <Award className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-900">
                    500+ Clients
                  </p>
                  <p className="text-[10px] text-zinc-500">Across Gujarat</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
