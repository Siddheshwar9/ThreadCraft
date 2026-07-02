"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    title: "Men's Collection",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop",
    link: "/collections/mens",
    colSpan: "col-span-1 md:col-span-2"
  },
  {
    title: "Women's Collection",
    image: "https://images.unsplash.com/photo-1583391733959-f18c2136e0d9?q=80&w=1000&auto=format&fit=crop",
    link: "/collections/womens",
    colSpan: "col-span-1"
  },
  {
    title: "Wedding Attire",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop",
    link: "/collections/wedding",
    colSpan: "col-span-1"
  },
  {
    title: "Business Wear",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1000&auto=format&fit=crop",
    link: "/collections/business",
    colSpan: "col-span-1"
  },
  {
    title: "Casual Luxury",
    image: "https://images.unsplash.com/photo-1516826957135-700ede19c6ce?q=80&w=1000&auto=format&fit=crop",
    link: "/collections/casual",
    colSpan: "col-span-1"
  },
  {
    title: "Festive Collection",
    image: "https://images.unsplash.com/photo-1605763240000-7e93b172d754?q=80&w=1000&auto=format&fit=crop",
    link: "/collections/festive",
    colSpan: "col-span-1 md:col-span-2"
  }
];

export default function CollectionsPage() {
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
            Curated Collections
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-ivory/70 max-w-2xl mx-auto font-light"
          >
            Explore our diverse range of styles, from sharp business attire to elegant festive wear. 
            Each piece is a testament to our commitment to quality.
          </motion.p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[400px]">
            {collections.map((collection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative overflow-hidden cursor-pointer ${collection.colSpan}`}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url(${collection.image})` }}
                />
                <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/50 transition-colors duration-500" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-ivory">
                  <h3 className="font-playfair text-3xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{collection.title}</h3>
                  <Link 
                    href={collection.link}
                    className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
                  >
                    View Collection <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
