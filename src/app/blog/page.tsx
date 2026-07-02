"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

const articles = [
  {
    title: "How to Choose the Perfect Suit for Your Body Type",
    excerpt: "A comprehensive guide to understanding proportions, cuts, and styles that flatter different body shapes.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop",
    date: "May 12, 2026",
    author: "James Sterling"
  },
  {
    title: "The Ultimate Fabric Guide: Wool vs. Linen vs. Cotton",
    excerpt: "Decode the world of tailoring fabrics and learn which materials suit different seasons and occasions.",
    image: "https://images.unsplash.com/photo-1612423284934-2850a4eaea40?q=80&w=800&auto=format&fit=crop",
    date: "April 28, 2026",
    author: "Antonio Russo"
  },
  {
    title: "Wedding Styling Tips for the Modern Groom",
    excerpt: "Stand out on your big day with these expert tips on coordinating colors, accessories, and fits.",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
    date: "April 15, 2026",
    author: "Elena Volkov"
  },
  {
    title: "Suit Care & Maintenance: Prolonging the Life of Your Garments",
    excerpt: "Essential care instructions to keep your bespoke pieces looking pristine for years to come.",
    image: "https://images.unsplash.com/photo-1584984558231-923f11d19ff5?q=80&w=800&auto=format&fit=crop",
    date: "March 30, 2026",
    author: "James Sterling"
  }
];

export default function BlogPage() {
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
            The ThreadCraft Journal
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-ivory/70 max-w-2xl mx-auto font-light"
          >
            Insights, guides, and stories from the world of bespoke fashion and sartorial elegance.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {articles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer flex flex-col"
              >
                <div className="overflow-hidden mb-6 rounded-sm">
                  <div 
                    className="aspect-video bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${article.image})` }}
                  />
                </div>
                <div className="flex items-center gap-4 text-sm text-charcoal/60 mb-3 font-medium">
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {article.date}</span>
                  <span className="flex items-center gap-1"><User className="w-4 h-4" /> {article.author}</span>
                </div>
                <h3 className="font-playfair text-2xl font-bold mb-3 group-hover:text-gold transition-colors">
                  {article.title}
                </h3>
                <p className="text-charcoal/70 mb-4 font-light leading-relaxed flex-grow">
                  {article.excerpt}
                </p>
                <Link href="#" className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-charcoal hover:text-gold transition-colors mt-auto pt-4 border-t border-charcoal/10">
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
