"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import TestimonialsComp from "@/components/home/Testimonials";

export default function TestimonialsPage() {
  return (
    <div className="bg-ivory text-charcoal min-h-screen">
      {/* Header Section */}
      <section className="bg-charcoal text-ivory py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-playfair text-5xl md:text-6xl font-bold mb-6"
          >
            Client Testimonials
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-ivory/70 max-w-2xl mx-auto font-light"
          >
            Don't just take our word for it. Read what our esteemed clients have to say about the ThreadCraft experience.
          </motion.p>
        </div>
      </section>

      {/* Reusing Home Component for now, in a real app we would map more reviews */}
      <TestimonialsComp />
    </div>
  );
}
