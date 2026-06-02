"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@components/ui/button";
import { services } from "@config/data";
import type { ServiceDetail } from "@types";

interface ServiceCTAProps {
  service: ServiceDetail;
}

const otherServicesLimit = 4;

export default function ServiceCTA({ service }: ServiceCTAProps) {
  const related = services
    .filter((s) => s.id !== service.id)
    .slice(0, otherServicesLimit);

  return (
    <>
      {/* Related services */}
      <section className="py-16 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl font-bold text-zinc-900 mb-2">
              Explore Our Other Services
            </h2>
            <p className="text-zinc-500">
              We offer a full spectrum of accounting and advisory solutions.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {related.map((s, index) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
              >
                <Link
                  href={s.href}
                  className="block h-full bg-white border border-zinc-200 rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
                >
                  <p className="font-semibold text-zinc-900 group-hover:text-primary transition-colors mb-1 text-sm">
                    {s.title}
                  </p>
                  <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed">
                    {s.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs text-primary font-medium mt-3 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Bottom CTA band */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
              Ready to Get Started with {service.title}?
            </h2>
            <p className="text-indigo-200 mb-8">
              Talk to our experts today. Free consultation, no obligations.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-zinc-50"
                asChild
              >
                <Link href="/#contact">
                  Book Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <a
                href="tel:+919726132813"
                className="flex items-center gap-2 text-white border border-white/30 hover:border-white/60 px-6 py-3 rounded-lg text-sm font-semibold transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call: +91 97261 32813
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
