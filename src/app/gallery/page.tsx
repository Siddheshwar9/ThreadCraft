"use client";

import { motion } from "framer-motion";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1594938298596-107b53916298?q=80&w=800&auto=format&fit=crop", category: "Completed Outfits" },
  { src: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop", category: "Tailoring Workshop" },
  { src: "https://images.unsplash.com/photo-1612423284934-2850a4eaea40?q=80&w=800&auto=format&fit=crop", category: "Premium Fabrics" },
  { src: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=800&auto=format&fit=crop", category: "Finished Attire" },
  { src: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=800&auto=format&fit=crop", category: "Designer Sketches" },
  { src: "https://images.unsplash.com/photo-1512445172230-087093229b47?q=80&w=800&auto=format&fit=crop", category: "Tailoring Workshop" },
  { src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop", category: "Customer Transformations" },
  { src: "https://images.unsplash.com/photo-1605763240000-7e93b172d754?q=80&w=800&auto=format&fit=crop", category: "Wedding Attire" },
  { src: "https://images.unsplash.com/photo-1599557457492-234ab1a8f98f?q=80&w=800&auto=format&fit=crop", category: "Premium Fabrics" },
];

export default function GalleryPage() {
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
            Our Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-ivory/70 max-w-2xl mx-auto font-light"
          >
            A visual journey through our craftsmanship, from the initial sketch to the final masterpiece.
          </motion.p>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Simple CSS columns based masonry */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="break-inside-avoid relative group overflow-hidden cursor-pointer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={img.src} 
                  alt={img.category} 
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-500" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-ivory">
                  <span className="font-playfair text-lg font-bold tracking-wide">{img.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
