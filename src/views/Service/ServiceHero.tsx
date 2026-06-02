"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@components/ui/button";
import type { ServiceDetail } from "@types";

interface ServiceHeroProps {
  service: ServiceDetail;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="relative pt-24 pb-16 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.05),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-1.5 text-sm text-zinc-500 mb-10"
        >
          <Link href="/" className="hover:text-zinc-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link
            href="/services"
            className="hover:text-zinc-900 transition-colors"
          >
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-zinc-900 font-medium">{service.title}</span>
        </motion.nav>

        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-xs font-semibold tracking-widest uppercase text-primary mb-4"
          >
            Our Services
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-zinc-900 tracking-tight leading-[1.1] mb-6"
          >
            {service.tagline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg text-zinc-500 leading-relaxed mb-8"
          >
            {service.heroDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            <Button size="lg" asChild>
              <Link href="/#contact">
                Get Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
