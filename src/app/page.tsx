import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import Fabrics from "@/components/home/Fabrics";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Fabrics />
      <Process />
      <Testimonials />
      <FAQ />
    </>
  );
}
