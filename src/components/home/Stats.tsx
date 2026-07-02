"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Years of Experience", value: 25, suffix: "+" },
  { label: "Happy Customers", value: 10, suffix: "k+" },
  { label: "Custom Outfits", value: 50, suffix: "k+" },
  { label: "Expert Tailors", value: 40, suffix: "+" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const numRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = numRef.current;
    if (!el || hasAnimated) return;

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      onEnter: () => {
        setHasAnimated(true);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            if (el) el.textContent = Math.floor(obj.val) + suffix;
          },
        });
      },
    });

    return () => trigger.kill();
  }, [target, suffix, hasAnimated]);

  return (
    <span ref={numRef} className="font-playfair text-4xl md:text-5xl font-bold text-gold">
      0{suffix}
    </span>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = document.querySelectorAll(".stat-item");
      gsap.fromTo(
        items,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-charcoal text-ivory py-16 border-b border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-item flex flex-col items-center justify-center space-y-2"
            >
              <CountUp target={stat.value} suffix={stat.suffix} />
              <span className="text-sm md:text-base font-light tracking-wide text-ivory/80 uppercase">
                {stat.label}
              </span>
              {/* Decorative underline */}
              <div className="w-8 h-[1px] bg-gold/30 mt-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
