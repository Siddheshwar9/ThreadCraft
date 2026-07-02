"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to make a custom suit?",
    answer: "Typically, a bespoke suit takes 4-6 weeks from the initial consultation to the final fitting. This allows for meticulous craftsmanship and multiple fittings to ensure a perfect result."
  },
  {
    question: "Do I need to make an appointment?",
    answer: "Yes, we work by appointment only to ensure that each client receives our undivided attention during their consultation and fitting sessions."
  },
  {
    question: "What is the price range for your bespoke suits?",
    answer: "Our bespoke suits start at $1,200. The final price depends on the fabric chosen, construction details, and specific customizations requested."
  },
  {
    question: "Do you offer alterations for garments not made by you?",
    answer: "Yes, we provide premium alteration services for off-the-rack garments to give them a custom-fit feel."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-charcoal text-ivory">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-gold font-medium tracking-widest uppercase text-sm mb-3">Any Questions?</h2>
          <h3 className="font-playfair text-4xl md:text-5xl font-bold">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-white/10 bg-white/5 overflow-hidden rounded-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
              >
                <span className="font-playfair font-semibold text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-gold flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gold flex-shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-ivory/70 font-light leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
