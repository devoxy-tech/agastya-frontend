"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Textarea } from "@components/ui/textarea";
import { Label } from "@components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";
import { contactInfo } from "@config/data";

const serviceOptions = [
  "Accounting & Bookkeeping",
  "Payroll Management",
  "Tax Services (ITR)",
  "GST Services",
  "Financial Management",
  "Other",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-50">
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
            Get In Touch
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-4 tracking-tight">
            Let&apos;s Start a Conversation
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
            Ready to simplify your finances? Schedule a free consultation with
            our experts today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-white border border-zinc-200 rounded-2xl p-7 space-y-6">
              <div>
                <h3 className="font-bold text-zinc-900 text-lg mb-1">
                  Agastya Accounting
                </h3>
                <p className="text-sm text-zinc-500">
                  Chartered Accountants &amp; Business Advisors
                </p>
              </div>

              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 mb-0.5 font-medium uppercase tracking-wide">
                      Phone
                    </p>
                    <div className="space-y-1">
                      {contactInfo.phone.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone.replace(/\s/g, "")}`}
                          className="block text-sm font-medium text-zinc-800 hover:text-primary transition-colors"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 mb-0.5 font-medium uppercase tracking-wide">
                      Email
                    </p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-sm font-medium text-zinc-800 hover:text-primary transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 mb-0.5 font-medium uppercase tracking-wide">
                      Location
                    </p>
                    <p className="text-sm font-medium text-zinc-800">
                      {contactInfo.city}, {contactInfo.state}
                    </p>
                    <p className="text-xs text-zinc-500">India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business hours */}
            <div className="bg-white border border-zinc-200 rounded-2xl p-6">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                Business Hours
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Monday – Friday</span>
                  <span className="text-zinc-800 font-medium">
                    9:00 AM – 6:30 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Saturday</span>
                  <span className="text-zinc-800 font-medium">
                    10:00 AM – 4:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Sunday</span>
                  <span className="text-zinc-500">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="bg-white border border-zinc-200 rounded-2xl p-7 lg:p-9">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-zinc-500 max-w-sm">
                    Thank you for reaching out. Our team will contact you within
                    24 hours to schedule your consultation.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-zinc-900 mb-6">
                    Schedule a Free Consultation
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Rajesh Patel"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="rajesh@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interested In</Label>
                        <Select>
                          <SelectTrigger id="service">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceOptions.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your business and what you need help with..."
                        rows={5}
                        className="resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={loading}
                    >
                      {loading ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-zinc-400 text-center">
                      We respect your privacy. Your information will never be
                      shared with third parties.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
