import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import ServiceHero from "@views/Service/ServiceHero";
import ServiceFeatures from "@views/Service/ServiceFeatures";
import ServiceWhyUs from "@views/Service/ServiceWhyUs";
import ServiceCTA from "@views/Service/ServiceCTA";
import { getServiceBySlug, getAllServiceSlugs } from "@config/services-detail";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.title,
    description: service.metaDescription,
    openGraph: {
      title: `${service.title} | Agastya Accounting`,
      description: service.metaDescription,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <Navbar />
      <ServiceHero service={service} />
      <ServiceFeatures service={service} />
      <ServiceWhyUs service={service} />
      <ServiceCTA service={service} />
      <Footer />
    </main>
  );
}
