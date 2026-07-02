"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const fabrics = [
  { name: "Super 150s Wool", origin: "Italy", image: "https://images.unsplash.com/photo-1612423284934-2850a4eaea40?q=80&w=1000&auto=format&fit=crop" },
  { name: "Egyptian Cotton", origin: "Egypt", image: "https://images.unsplash.com/photo-1596756855110-67c858548c26?q=80&w=1000&auto=format&fit=crop" },
  { name: "Pure Silk", origin: "India", image: "https://images.unsplash.com/photo-1599557457492-234ab1a8f98f?q=80&w=1000&auto=format&fit=crop" },
];

export default function Fabrics() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Fabric cards with parallax image zoom
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll(".fabric-card");
        
        cards.forEach((card, i) => {
          const el = card as HTMLElement;
          const img = el.querySelector(".fabric-img") as HTMLElement;
          const info = el.querySelector(".fabric-info") as HTMLElement;

          // Card entrance
          gsap.fromTo(
            el,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: i * 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
              },
            }
          );

          // Parallax zoom on scroll
          if (img) {
            gsap.fromTo(
              img,
              { scale: 1.15 },
              {
                scale: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: el,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1.5,
                },
              }
            );
          }

          // Info slide up
          if (info) {
            gsap.fromTo(
              info,
              { opacity: 0, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: i * 0.15 + 0.3,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: el,
                  start: "top 80%",
                },
              }
            );
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-beige text-charcoal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-burgundy font-medium tracking-widest uppercase text-sm mb-3">Premium Materials</h2>
            <h3 className="font-playfair text-4xl md:text-5xl font-bold">The World&apos;s Finest Fabrics</h3>
          </div>
          <Link href="/about" className="hidden md:flex items-center gap-2 font-medium hover:text-burgundy transition-colors">
            Learn About Our Materials <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fabrics.map((fabric, index) => (
            <div
              key={index}
              className="fabric-card group cursor-pointer"
              data-cursor-text="EXPLORE"
            >
              <div className="overflow-hidden mb-6 aspect-[4/5] relative">
                <div 
                  className="fabric-img absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
                  style={{ backgroundImage: `url(${fabric.image})` }}
                />
                {/* Hover overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Origin badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-charcoal opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                  {fabric.origin}
                </div>
              </div>
              <div className="fabric-info">
                <h4 className="font-playfair text-2xl font-bold mb-2 group-hover:text-burgundy transition-colors duration-300">{fabric.name}</h4>
                <p className="text-charcoal/70 uppercase tracking-widest text-sm font-medium">From {fabric.origin}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
