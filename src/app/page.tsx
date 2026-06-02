import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Hero from "@views/Home/Hero";
import Stats from "@views/Home/Stats";
import Services from "@views/Home/Services";
import WhyChooseUs from "@views/Home/WhyChooseUs";
import Industries from "@views/Home/Industries";
import Process from "@views/Home/Process";
import About from "@views/Home/About";
import Testimonials from "@views/Home/Testimonials";
import FAQ from "@views/Home/FAQ";
import CTA from "@views/Home/CTA";
import Contact from "@views/Home/Contact";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Industries />
      <Process />
      <About />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
