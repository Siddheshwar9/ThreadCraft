"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-ivory/70 max-w-2xl mx-auto font-light"
          >
            Whether you have a question about our services, want to check on an order, or need style advice, we're here for you.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-playfair text-3xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-beige text-gold flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Our Studio</h4>
                    <p className="text-charcoal/70 font-light leading-relaxed">
                      123 Tailor's Avenue, Fashion District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-beige text-gold flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-charcoal/70 font-light">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-beige text-gold flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-charcoal/70 font-light">info@threadcraft.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-beige text-gold flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Business Hours</h4>
                    <p className="text-charcoal/70 font-light leading-relaxed">
                      Mon - Fri: 10:00 AM - 7:00 PM<br />
                      Saturday: 10:00 AM - 5:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-10">
                <h4 className="font-bold mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 border border-charcoal/20 flex items-center justify-center hover:bg-gold hover:text-white hover:border-gold transition-colors font-medium text-xs tracking-wider">IG</a>
                  <a href="#" className="w-10 h-10 border border-charcoal/20 flex items-center justify-center hover:bg-gold hover:text-white hover:border-gold transition-colors font-medium text-xs tracking-wider">FB</a>
                  <a href="#" className="w-10 h-10 border border-charcoal/20 flex items-center justify-center hover:bg-gold hover:text-white hover:border-gold transition-colors font-medium text-xs tracking-wider">TW</a>
                  <a href="#" className="w-10 h-10 border border-charcoal/20 flex items-center justify-center hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-colors"><MessageCircle className="w-5 h-5" /></a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-64 bg-charcoal/5 border border-charcoal/10 flex items-center justify-center">
                <span className="text-charcoal/40 font-medium tracking-widest uppercase">Google Maps Placeholder</span>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white p-8 md:p-12 shadow-lg border border-charcoal/5 h-full">
                <h2 className="font-playfair text-3xl font-bold mb-8">Send a Message</h2>
                
                {submitted ? (
                  <div className="text-center py-12">
                    <h3 className="font-playfair text-2xl font-bold text-gold mb-4">Message Sent</h3>
                    <p className="text-charcoal/70 mb-6">Thank you for contacting us. We will get back to you as soon as possible.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-sm font-semibold uppercase tracking-wider text-charcoal hover:text-gold transition-colors underline"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col h-full">
                    <div className="mb-6">
                      <label className="block text-sm font-semibold mb-2" htmlFor="name">Full Name</label>
                      <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-beige/30 border border-charcoal/20 px-4 py-3 focus:outline-none focus:border-gold rounded-none" />
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-semibold mb-2" htmlFor="email">Email Address</label>
                      <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-beige/30 border border-charcoal/20 px-4 py-3 focus:outline-none focus:border-gold rounded-none" />
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-semibold mb-2" htmlFor="subject">Subject</label>
                      <input required type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full bg-beige/30 border border-charcoal/20 px-4 py-3 focus:outline-none focus:border-gold rounded-none" />
                    </div>
                    
                    <div className="mb-8 flex-grow">
                      <label className="block text-sm font-semibold mb-2" htmlFor="message">Message</label>
                      <textarea required id="message" name="message" value={formData.message} onChange={handleChange} rows={6} className="w-full h-[calc(100%-2rem)] min-h-[150px] bg-beige/30 border border-charcoal/20 px-4 py-3 focus:outline-none focus:border-gold rounded-none resize-none"></textarea>
                    </div>
                    
                    <button type="submit" className="w-full bg-charcoal text-ivory px-8 py-4 font-bold tracking-wider uppercase hover:bg-gold hover:text-charcoal transition-colors duration-300 mt-auto">
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
