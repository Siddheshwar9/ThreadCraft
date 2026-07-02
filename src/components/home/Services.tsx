"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Shirt, Scissors, Briefcase, Heart } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Bespoke Suits",
    description: "Handcrafted suits tailored to your exact measurements and style preferences.",
    icon: <Briefcase className="w-6 h-6" />,
    link: "/services/bespoke-suits"
  },
  {
    title: "Custom Shirts",
    description: "Premium cotton shirts designed for perfect fit and all-day comfort.",
    icon: <Shirt className="w-6 h-6" />,
    link: "/services/custom-shirts"
  },
  {
    title: "Wedding Wear",
    description: "Elegant Sherwanis and tuxedos to make your special day unforgettable.",
    icon: <Heart className="w-6 h-6" />,
    link: "/services/wedding"
  },
  {
    title: "Premium Alterations",
    description: "Expert alterations to breathe new life into your favorite garments.",
    icon: <Scissors className="w-6 h-6" />,
    link: "/services/alterations"
  }
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section heading reveal
      if (headingRef.current) {
        const children = headingRef.current.children;
        gsap.fromTo(
          children,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Cards staggered reveal with 3D tilt
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".service-card");
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60, rotateX: 8 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );

        // Add magnetic hover effect to each card
        cards.forEach((card) => {
          const el = card as HTMLElement;
          const iconEl = el.querySelector(".service-icon") as HTMLElement;
          
          el.addEventListener("mouseenter", () => {
            gsap.to(el, {
              y: -8,
              boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
              duration: 0.4,
              ease: "power2.out",
            });
            if (iconEl) {
              gsap.to(iconEl, {
                scale: 1.2,
                rotation: 10,
                duration: 0.4,
                ease: "back.out(1.7)",
              });
            }
          });

          el.addEventListener("mouseleave", () => {
            gsap.to(el, {
              y: 0,
              boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
              duration: 0.4,
              ease: "power2.out",
            });
            if (iconEl) {
              gsap.to(iconEl, {
                scale: 1,
                rotation: 0,
                duration: 0.4,
                ease: "power2.out",
              });
            }
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-ivory text-charcoal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-gold font-medium tracking-widest uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="font-playfair text-4xl md:text-5xl font-bold">Craftsmanship at Its Finest</h3>
          </div>
          <Link href="/services" className="hidden md:flex items-center gap-2 font-medium hover:text-gold transition-colors">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ perspective: "800px" }}>
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group bg-white p-8 border border-charcoal/5 hover:border-gold/50 transition-colors duration-300 shadow-sm rounded-sm"
              data-cursor-text="VIEW"
            >
              <div className="service-icon w-12 h-12 bg-charcoal text-gold flex items-center justify-center rounded-full mb-6">
                {service.icon}
              </div>
              <h4 className="font-playfair text-2xl font-bold mb-3 group-hover:text-gold transition-colors">{service.title}</h4>
              <p className="text-charcoal/70 mb-6 font-light leading-relaxed">{service.description}</p>
              <Link href={service.link} className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-charcoal group-hover:text-gold transition-colors">
                Explore <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link href="/services" className="inline-flex items-center gap-2 font-medium hover:text-gold transition-colors">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
