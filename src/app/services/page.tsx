import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Users,
  FileText,
  Receipt,
  TrendingUp,
  Building2,
  Shield,
  Lightbulb,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import { Button } from "@components/ui/button";
import { services } from "@config/data";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive accounting, taxation, GST, audit, and business advisory services in Mehsana, Gujarat. Expert financial solutions for businesses of all sizes.",
};

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Users,
  FileText,
  Receipt,
  TrendingUp,
  Building2,
  Shield,
  Lightbulb,
};

const iconColors = [
  "bg-indigo-50 text-indigo-600",
  "bg-violet-50 text-violet-600",
  "bg-blue-50 text-blue-600",
  "bg-emerald-50 text-emerald-600",
  "bg-amber-50 text-amber-600",
  "bg-rose-50 text-rose-600",
  "bg-cyan-50 text-cyan-600",
  "bg-orange-50 text-orange-600",
];

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.05),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm text-zinc-500 mb-10">
            <Link href="/" className="hover:text-zinc-900 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-zinc-900 font-medium">Services</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">
              What We Offer
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 tracking-tight leading-[1.1] mb-6">
              Comprehensive Financial &amp; Tax Solutions
            </h1>
            <p className="text-lg text-zinc-500 leading-relaxed mb-8">
              From day-to-day bookkeeping to strategic business advisory, we
              cover every aspect of your financial and compliance requirements —
              with expertise, precision, and a personal touch.
            </p>
            <Button size="lg" asChild>
              <Link href="/#contact">
                Book a Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              const colorClass = iconColors[index % iconColors.length];

              return (
                <Link key={service.id} href={service.href} className="group h-full">
                  <div className="h-full bg-white border border-zinc-200 rounded-2xl p-7 hover:border-primary/30 hover:shadow-md transition-all duration-300 flex flex-col">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${colorClass}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <h2 className="font-semibold text-zinc-900 mb-2 text-base group-hover:text-primary transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-sm text-zinc-500 leading-relaxed flex-1 mb-5">
                      {service.description}
                    </p>

                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-3 transition-all duration-200">
                      Learn More
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-indigo-200 mb-8 text-lg">
            Our experts will assess your requirements and recommend the right
            solution for your business — completely free.
          </p>
          <Button
            size="xl"
            className="bg-white text-primary hover:bg-zinc-50"
            asChild
          >
            <Link href="/#contact">
              Talk to an Expert
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
