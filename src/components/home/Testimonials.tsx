"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alexander Wright",
    role: "CEO, TechVentures",
    content: "The level of craftsmanship is unmatched. My bespoke suit fits like a glove and the attention to detail is evident in every stitch. True masters of their trade.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop"
  },
  {
    name: "Sarah Jenkins",
    role: "Creative Director",
    content: "ThreadCraft transformed my vision into reality for my wedding. The custom gown was exactly what I dreamed of, elegant and uniquely mine.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop"
  },
  {
    name: "Michael Chen",
    role: "Architect",
    content: "I've been coming here for my business shirts for 5 years. The consistency, the fabric quality, and the personalized service keep me coming back.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-ivory text-charcoal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gold font-medium tracking-widest uppercase text-sm mb-3">Client Stories</h2>
          <h3 className="font-playfair text-4xl md:text-5xl font-bold">A Legacy of Trust</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 relative rounded-sm border border-charcoal/5"
            >
              <div className="flex gap-1 mb-6 text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-charcoal/80 font-light italic mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div 
                  className="w-12 h-12 rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${testimonial.image})` }}
                />
                <div>
                  <h4 className="font-bold text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-charcoal/60">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
