import { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FunFact from "@/components/FunFact";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import Clients from "@/components/Clients";
import Team from "@/components/Team";
import Services from "@/components/Services";
import Tools from "@/components/OpenSourcePartners";
import NoCodePartners from "@/components/NoCodePartners";
import AlPartners from "@/components/OpenSourcePartners";
import ToolsWeWorkWith from "@/components/ToolsWeWorkWith";
import HeroBanner from "@/components/HeroBanner";

export const metadata: Metadata = {
  title: "Appleseed.dev",
  description: "Transform Your Ideas into Powerful, Scalable Apps",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>
      <section id="brands">
        <ToolsWeWorkWith />
        <AlPartners />
        <NoCodePartners />
      </section>
      <HeroBanner />
      <section id="about">
        <About />
      </section>
      <section id="funfact">
        <FunFact />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="clients">
        <Clients />
      </section>
      {/* <FAQ /> */}
      {/* <Testimonial />
      <Pricing /> */}
      <section id="blog">
        <Blog />
      </section>
      <CTA />
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}