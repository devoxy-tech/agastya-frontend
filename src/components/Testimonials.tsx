"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@config/data";

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="h-full"
    >
      <div className="h-full bg-white border border-zinc-200 rounded-2xl p-7 hover:border-primary/30 hover:shadow-md transition-all duration-300 flex flex-col">
        {/* Rating */}
        <div className="flex gap-0.5 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-amber-400 text-amber-400"
            />
          ))}
        </div>

        {/* Quote icon */}
        <Quote className="w-6 h-6 text-primary/20 mb-3" />

        {/* Content */}
        <p className="text-zinc-600 leading-relaxed text-sm flex-1 mb-6">
          &ldquo;{testimonial.content}&rdquo;
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-bold text-primary">
              {testimonial.initials}
            </span>
          </div>
          <div>
            <p className="font-semibold text-zinc-900 text-sm">
              {testimonial.name}
            </p>
            <p className="text-xs text-zinc-500">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-zinc-50">
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
            Client Stories
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-4 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
            Don&apos;t take our word for it — hear from the businesses we&apos;ve
            helped grow, stay compliant, and thrive.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
