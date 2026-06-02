"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@components/ui/button";

export default function CTA() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
            Ready to Simplify Your Finances?
          </h2>
          <p className="text-indigo-200 text-lg mb-8 max-w-2xl mx-auto">
            Join 500+ businesses that trust Agastya Accounting for their
            accounting, taxation, and financial advisory needs. Let&apos;s start
            with a free consultation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="xl"
              variant="secondary"
              className="bg-white text-primary hover:bg-zinc-50"
              asChild
            >
              <Link href="#contact">
                Book Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <a
              href="tel:+919726132813"
              className="flex items-center gap-2 text-white border border-white/30 hover:border-white/60 px-6 py-3.5 rounded-lg text-sm font-semibold transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now: +91 97261 32813
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
