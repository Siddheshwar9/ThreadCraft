"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight, Scissors } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on background image
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          yPercent: 25,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Stagger entry timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        iconRef.current,
        { opacity: 0, scale: 0, rotation: -180 },
        { opacity: 1, scale: 1, rotation: 0, duration: 0.8 }
      );

      // Split heading into lines for staggered reveal
      if (headingRef.current) {
        const lines = headingRef.current.querySelectorAll(".hero-line");
        tl.fromTo(
          lines,
          { opacity: 0, y: 60, skewY: 3 },
          { opacity: 1, y: 0, skewY: 0, duration: 0.9, stagger: 0.15 },
          "-=0.3"
        );
      }

      tl.fromTo(
        subRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.4"
      );

      if (ctaRef.current) {
        const buttons = ctaRef.current.querySelectorAll(".hero-btn");
        tl.fromTo(
          buttons,
          { opacity: 0, y: 20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12 },
          "-=0.3"
        );
      }

      // Scroll indicator bounce
      if (scrollIndicatorRef.current) {
        tl.fromTo(
          scrollIndicatorRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          "-=0.2"
        );
        gsap.to(scrollIndicatorRef.current, {
          y: 10,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          duration: 1.2,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=2080&auto=format&fit=crop')" }}
      />
      
      {/* Overlay with gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />

      {/* Decorative gold corner accents */}
      <div className="absolute top-8 left-8 z-20 w-16 h-16 border-t-2 border-l-2 border-gold/30" />
      <div className="absolute top-8 right-8 z-20 w-16 h-16 border-t-2 border-r-2 border-gold/30" />
      <div className="absolute bottom-8 left-8 z-20 w-16 h-16 border-b-2 border-l-2 border-gold/30" />
      <div className="absolute bottom-8 right-8 z-20 w-16 h-16 border-b-2 border-r-2 border-gold/30" />

      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 text-center text-ivory">
        <div ref={iconRef} className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center backdrop-blur-sm bg-white/5">
            <Scissors className="h-8 w-8 text-gold" />
          </div>
        </div>
        
        <h1 
          ref={headingRef}
          className="font-playfair text-5xl md:text-7xl font-bold mb-6 tracking-tight overflow-hidden"
        >
          <span className="hero-line block">Crafted to Fit.</span>
          <span className="hero-line block text-gold italic">Designed to Impress.</span>
        </h1>
        
        <p 
          ref={subRef}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-ivory/90 font-light"
        >
          Experience the pinnacle of bespoke tailoring. We blend traditional craftsmanship 
          with modern elegance to create garments that define your personal style.
        </p>
        
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/appointment" 
            className="hero-btn group flex items-center gap-2 bg-gold text-charcoal px-8 py-4 text-sm font-bold tracking-wider hover:bg-ivory transition-all duration-300 w-full sm:w-auto justify-center"
          >
            BOOK APPOINTMENT
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/collections" 
            className="hero-btn group flex items-center gap-2 bg-transparent border border-ivory text-ivory px-8 py-4 text-sm font-bold tracking-wider hover:bg-ivory/10 transition-all duration-300 w-full sm:w-auto justify-center"
          >
            EXPLORE COLLECTIONS
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollIndicatorRef} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-ivory/50 text-xs uppercase tracking-[0.3em] font-light">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  );
}
