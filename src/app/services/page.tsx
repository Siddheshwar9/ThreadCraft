"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, Shirt, Heart, Scissors, 
  MapPin, Users, Palette, Sparkles, 
  Crown, Store
} from "lucide-react";
import Link from "next/link";

const allServices = [
  {
    title: "Bespoke Suit Tailoring",
    description: "The ultimate expression of personal style. Handcrafted suits tailored specifically to your body's nuances and your personal taste.",
    icon: <Briefcase className="w-8 h-8" />
  },
  {
    title: "Custom Shirts",
    description: "Premium cotton and linen shirts designed for a perfect collar fit, precise sleeve length, and all-day comfort.",
    icon: <Shirt className="w-8 h-8" />
  },
  {
    title: "Sherwani & Wedding Wear",
    description: "Regal, hand-embroidered wedding attire that ensures you stand out on your most important day.",
    icon: <Crown className="w-8 h-8" />
  },
  {
    title: "Women's Ethnic Wear",
    description: "Elegant Lehengas, Anarkalis, and traditional suits crafted with intricate detailing and modern silhouettes.",
    icon: <Sparkles className="w-8 h-8" />
  },
  {
    title: "Blouse Stitching",
    description: "Designer blouse stitching with perfect fit guarantees, featuring contemporary necklines and back designs.",
    icon: <Heart className="w-8 h-8" />
  },
  {
    title: "Kurta & Traditional",
    description: "Everyday luxury and festive kurtas tailored from breathable, premium fabrics for supreme elegance.",
    icon: <Store className="w-8 h-8" />
  },
  {
    title: "Premium Alterations",
    description: "Expert restyling and alterations to breathe new life into your favorite off-the-rack or vintage garments.",
    icon: <Scissors className="w-8 h-8" />
  },
  {
    title: "Home Measurement",
    description: "Too busy to visit? Our master tailors will visit your home or office for consultations and measurements.",
    icon: <MapPin className="w-8 h-8" />
  },
  {
    title: "Corporate Uniforms",
    description: "Elevate your brand image with bespoke uniform solutions for hospitality, corporate, and luxury retail teams.",
    icon: <Users className="w-8 h-8" />
  },
  {
    title: "Fabric Consultation",
    description: "Not sure what you need? Book a session to explore fabrics, weights, and drapes with our textile experts.",
    icon: <Palette className="w-8 h-8" />
  }
];

export default function ServicesPage() {
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
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-ivory/70 max-w-2xl mx-auto font-light"
          >
            From full bespoke suits to meticulous alterations, discover the comprehensive range of sartorial services we offer.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-10 border border-charcoal/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group rounded-sm"
              >
                <div className="w-16 h-16 bg-beige text-gold flex items-center justify-center rounded-full mb-6 group-hover:bg-charcoal group-hover:text-gold transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="font-playfair text-2xl font-bold mb-4 group-hover:text-gold transition-colors">{service.title}</h3>
                <p className="text-charcoal/70 font-light leading-relaxed mb-8 h-24">
                  {service.description}
                </p>
                <Link href="/appointment" className="inline-block border-b-2 border-gold text-sm font-semibold tracking-wider uppercase pb-1 hover:text-gold transition-colors">
                  Book Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-beige py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl font-bold mb-6">Ready to elevate your wardrobe?</h2>
          <p className="text-charcoal/70 mb-10 max-w-xl mx-auto">
            Schedule a consultation with our experts today and experience the luxury of custom tailoring.
          </p>
          <Link 
            href="/appointment" 
            className="bg-charcoal text-ivory px-10 py-4 text-sm font-bold tracking-wider hover:bg-gold hover:text-charcoal transition-colors duration-300"
          >
            BOOK AN APPOINTMENT
          </Link>
        </div>
      </section>
    </div>
  );
}
