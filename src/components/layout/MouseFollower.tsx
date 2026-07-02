"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MouseFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring || !label) return;

    // Use quickTo for silky smooth following
    const xDot = gsap.quickTo(dot, "x", { duration: 0.15, ease: "power2.out" });
    const yDot = gsap.quickTo(dot, "y", { duration: 0.15, ease: "power2.out" });
    const xRing = gsap.quickTo(ring, "x", { duration: 0.4, ease: "power3.out" });
    const yRing = gsap.quickTo(ring, "y", { duration: 0.4, ease: "power3.out" });

    const handleMove = (e: MouseEvent) => {
      xDot(e.clientX);
      yDot(e.clientY);
      xRing(e.clientX);
      yRing(e.clientY);
    };

    const handleEnterLink = () => {
      gsap.to(ring, {
        width: 60,
        height: 60,
        borderColor: "#C9A227",
        backgroundColor: "rgba(201,162,39,0.08)",
        duration: 0.35,
        ease: "power2.out",
      });
      gsap.to(dot, { scale: 0, duration: 0.2, ease: "power2.out" });
    };

    const handleLeaveLink = () => {
      gsap.to(ring, {
        width: 40,
        height: 40,
        borderColor: "rgba(201,162,39,0.5)",
        backgroundColor: "transparent",
        duration: 0.35,
        ease: "power2.out",
      });
      gsap.to(dot, { scale: 1, duration: 0.2, ease: "power2.out" });
      gsap.to(label, { opacity: 0, scale: 0.5, duration: 0.2 });
    };

    const handleEnterView = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      const text = el.getAttribute("data-cursor-text") || "VIEW";
      label.textContent = text;
      gsap.to(ring, {
        width: 80,
        height: 80,
        borderColor: "#C9A227",
        backgroundColor: "rgba(201,162,39,0.12)",
        duration: 0.4,
        ease: "back.out(1.4)",
      });
      gsap.to(dot, { scale: 0, duration: 0.2 });
      gsap.to(label, { opacity: 1, scale: 1, duration: 0.3, delay: 0.1 });
    };

    const handleLeaveView = () => {
      handleLeaveLink();
    };

    window.addEventListener("mousemove", handleMove);

    // Attach hover behaviours
    const links = document.querySelectorAll("a, button");
    const viewTargets = document.querySelectorAll("[data-cursor-text]");

    links.forEach((el) => {
      el.addEventListener("mouseenter", handleEnterLink);
      el.addEventListener("mouseleave", handleLeaveLink);
    });

    viewTargets.forEach((el) => {
      el.addEventListener("mouseenter", handleEnterView);
      el.addEventListener("mouseleave", handleLeaveView);
    });

    // Hide on touch devices
    const mql = window.matchMedia("(pointer: coarse)");
    if (mql.matches) {
      dot.style.display = "none";
      ring.style.display = "none";
    }

    // Observe DOM changes to reattach listeners
    const observer = new MutationObserver(() => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", handleEnterLink);
        el.removeEventListener("mouseleave", handleLeaveLink);
        el.addEventListener("mouseenter", handleEnterLink);
        el.addEventListener("mouseleave", handleLeaveLink);
      });
      document.querySelectorAll("[data-cursor-text]").forEach((el) => {
        el.removeEventListener("mouseenter", handleEnterView);
        el.removeEventListener("mouseleave", handleLeaveView);
        el.addEventListener("mouseenter", handleEnterView);
        el.addEventListener("mouseleave", handleLeaveView);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      links.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnterLink);
        el.removeEventListener("mouseleave", handleLeaveLink);
      });
      viewTargets.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnterView);
        el.removeEventListener("mouseleave", handleLeaveView);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "#C9A227",
        }}
      />
      {/* Outer ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1.5px solid rgba(201,162,39,0.5)",
          backgroundColor: "transparent",
        }}
      >
        <div
          ref={labelRef}
          className="pointer-events-none text-[10px] font-bold tracking-widest uppercase"
          style={{
            color: "#C9A227",
            opacity: 0,
            transform: "scale(0.5)",
          }}
        />
      </div>
    </>
  );
}
