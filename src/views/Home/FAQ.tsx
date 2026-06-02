"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";
import { faqs } from "@config/data";

export default function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">
            FAQs
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
            Have questions? We have answers. Here are some of the most common
            questions we receive from clients.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-zinc-200"
              >
                <AccordionTrigger className="text-left text-zinc-900 hover:no-underline hover:text-primary font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12 p-8 bg-zinc-50 border border-zinc-200 rounded-2xl"
        >
          <p className="text-zinc-700 font-medium mb-2">
            Still have questions?
          </p>
          <p className="text-sm text-zinc-500 mb-5">
            Our team is here to help. Reach out and we&apos;ll respond within 24
            hours.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
