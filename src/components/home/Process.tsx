"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "Meet with our master tailors to discuss your style, preferences, and the occasion."
  },
  {
    number: "02",
    title: "Fabric Selection",
    description: "Choose from our curated collection of premium fabrics from the world's finest mills."
  },
  {
    number: "03",
    title: "Measurement",
    description: "We take over 30 precise measurements to ensure a flawless, second-skin fit."
  },
  {
    number: "04",
    title: "Fittings",
    description: "Multiple fitting sessions guarantee perfection before the final masterpiece is delivered."
  }
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
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
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Connecting line draw animation
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            duration: 1.5,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 75%",
            },
          }
        );
      }

      // Steps staggered reveal
      if (gridRef.current) {
        const stepEls = gridRef.current.querySelectorAll(".process-step");

        stepEls.forEach((step, i) => {
          const el = step as HTMLElement;
          const circle = el.querySelector(".step-circle") as HTMLElement;
          const content = el.querySelector(".step-content") as HTMLElement;

          // Circle pop-in
          if (circle) {
            gsap.fromTo(
              circle,
              { opacity: 0, scale: 0, rotation: -90 },
              {
                opacity: 1,
                scale: 1,
                rotation: 0,
                duration: 0.6,
                delay: i * 0.2,
                ease: "back.out(1.7)",
                scrollTrigger: {
                  trigger: gridRef.current,
                  start: "top 75%",
                },
              }
            );
          }

          // Content fade-in
          if (content) {
            gsap.fromTo(
              content,
              { opacity: 0, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: i * 0.2 + 0.2,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: gridRef.current,
                  start: "top 75%",
                },
              }
            );
          }

          // Hover glow on circle
          if (circle) {
            el.addEventListener("mouseenter", () => {
              gsap.to(circle, {
                boxShadow: "0 0 30px rgba(201,162,39,0.4)",
                borderColor: "#C9A227",
                duration: 0.3,
                ease: "power2.out",
              });
            });
            el.addEventListener("mouseleave", () => {
              gsap.to(circle, {
                boxShadow: "0 0 15px rgba(201,162,39,0.15)",
                borderColor: "rgba(201,162,39,0.3)",
                duration: 0.3,
                ease: "power2.out",
              });
            });
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-charcoal text-ivory">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-gold font-medium tracking-widest uppercase text-sm mb-3">How It Works</h2>
          <h3 className="font-playfair text-4xl md:text-5xl font-bold mb-6">The Tailoring Process</h3>
          <p className="max-w-2xl mx-auto text-ivory/70 font-light">
            Every garment we create undergoes a rigorous process of design, construction, and refinement.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line (visible on lg screens) – animated */}
          <div
            ref={lineRef}
            className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] z-0"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(201,162,39,0.4), rgba(201,162,39,0.4), transparent)",
            }}
          />

          {steps.map((step, index) => (
            <div
              key={index}
              className="process-step relative z-10 flex flex-col items-center text-center px-4 cursor-default"
            >
              <div className="step-circle w-24 h-24 rounded-full bg-charcoal border border-gold/30 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(201,162,39,0.15)] transition-colors">
                <span className="font-playfair text-3xl font-bold text-gold">{step.number}</span>
              </div>
              <div className="step-content">
                <h4 className="font-playfair text-2xl font-bold mb-3">{step.title}</h4>
                <p className="text-ivory/70 font-light leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
