"use client";

import { motion } from "framer-motion";
import { Award, Clock, Users, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-ivory text-charcoal min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1594938298596-107b53916298?q=80&w=2000&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 z-10 bg-charcoal/70" />
        <div className="container relative z-20 mx-auto px-4 text-center text-ivory">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-playfair text-5xl md:text-6xl font-bold mb-4"
          >
            Our Story
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto font-light text-ivory/80"
          >
            Bridging the gap between skilled local tailors and customers who value perfect fit and unique style.
          </motion.p>
        </div>
      </section>

      {/* Brand Story & Mission */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-gold font-medium tracking-widest uppercase text-sm mb-3">Why We Exist</h2>
              <h3 className="font-playfair text-4xl font-bold mb-6">The ThreadCraft Story</h3>
              <p className="text-charcoal/80 font-light leading-relaxed mb-6">
                Custom clothing has always held a special place in people&apos;s hearts — but for different reasons across generations. The <strong className="font-medium text-charcoal">new generation</strong> craves unique styling that reflects their individuality, while the <strong className="font-medium text-charcoal">older generation</strong> values the perfect fit that only a skilled tailor can achieve. Yet finding the right tailor has always been a challenge — relying on word of mouth, limited visibility, and no way to preview their work.
              </p>
              <p className="text-charcoal/80 font-light leading-relaxed mb-6">
                That&apos;s why we built <strong className="font-medium text-charcoal">ThreadCraft</strong> — a platform that bridges the gap between talented local tailors and the customers who need them. We connect you with the best artisans in your area, letting you browse their portfolios, see their craftsmanship online, read reviews from real customers, and book appointments — all from the comfort of your home.
              </p>
              <p className="text-charcoal/80 font-light leading-relaxed">
                Our mission is simple: to make bespoke tailoring accessible to everyone. Whether you&apos;re a young professional looking for a statement piece or someone who simply wants clothes that fit like they were made for you — because they <em>are</em> — ThreadCraft brings the tailor&apos;s craft to your fingertips.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center rounded-sm shadow-2xl"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1000&auto=format&fit=crop')" }}
              />
              <div className="absolute -bottom-8 -left-8 bg-charcoal text-ivory p-8 max-w-xs shadow-xl hidden md:block">
                <p className="font-playfair text-xl italic mb-2">&quot;Connecting skilled hands with those who appreciate the craft.&quot;</p>
                <p className="text-sm font-light text-gold uppercase tracking-wider">- The ThreadCraft Team</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-beige">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold mb-4">Why Choose ThreadCraft</h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">We combine heritage techniques with modern sensibilities to deliver an unparalleled tailoring experience.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Award />, title: "Master Artisans", desc: "Our tailors have decades of specialized experience." },
              { icon: <Clock />, title: "Timely Delivery", desc: "We respect your time and always meet our deadlines." },
              { icon: <ShieldCheck />, title: "Quality Guarantee", desc: "Flawless finish and premium materials guaranteed." },
              { icon: <Users />, title: "Personalized Service", desc: "Dedicated consultants for your wardrobe needs." },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 text-center shadow-sm hover:shadow-md transition-shadow border border-white/50"
              >
                <div className="w-16 h-16 mx-auto bg-charcoal text-gold flex items-center justify-center rounded-full mb-6">
                  {feature.icon}
                </div>
                <h4 className="font-playfair text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-charcoal/70 font-light text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Tailors */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gold font-medium tracking-widest uppercase text-sm mb-3">The Hands Behind The Craft</h2>
            <h3 className="font-playfair text-4xl font-bold">Meet Our Master Tailors</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Antonio Russo", role: "Head Pattern Maker", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" },
              { name: "Elena Volkov", role: "Master Seamstress", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop" },
              { name: "James Sterling", role: "Bespoke Consultant", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" },
            ].map((tailor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group overflow-hidden relative cursor-pointer"
              >
                <div 
                  className="aspect-[3/4] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${tailor.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-ivory">
                  <h4 className="font-playfair text-2xl font-bold mb-1">{tailor.name}</h4>
                  <p className="text-gold text-sm font-medium tracking-wider uppercase">{tailor.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
