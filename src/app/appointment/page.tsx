"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    homeVisit: false,
    measurementRequest: false,
    instructions: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="bg-beige text-charcoal min-h-screen py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-playfair text-4xl md:text-5xl font-bold mb-4"
          >
            Book an Appointment
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-charcoal/70"
          >
            Schedule a private consultation with our master tailors.
          </motion.p>
        </div>

        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-12 text-center shadow-lg border border-gold/30"
          >
            <h2 className="font-playfair text-3xl font-bold text-gold mb-4">Request Received</h2>
            <p className="text-charcoal/80 mb-6">
              Thank you for choosing ThreadCraft. We will contact you shortly to confirm your appointment details.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="text-sm font-semibold uppercase tracking-wider text-charcoal hover:text-gold transition-colors underline"
            >
              Book Another Appointment
            </button>
          </motion.div>
        ) : (
          <motion.form 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="bg-white p-8 md:p-12 shadow-lg border border-charcoal/5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold mb-2" htmlFor="firstName">First Name</label>
                <input required type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full bg-beige/30 border border-charcoal/20 px-4 py-3 focus:outline-none focus:border-gold rounded-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" htmlFor="lastName">Last Name</label>
                <input required type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full bg-beige/30 border border-charcoal/20 px-4 py-3 focus:outline-none focus:border-gold rounded-none" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
                <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-beige/30 border border-charcoal/20 px-4 py-3 focus:outline-none focus:border-gold rounded-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" htmlFor="phone">Phone Number</label>
                <input required type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-beige/30 border border-charcoal/20 px-4 py-3 focus:outline-none focus:border-gold rounded-none" />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2" htmlFor="service">Service Required</label>
              <select required id="service" name="service" value={formData.service} onChange={handleChange} className="w-full bg-beige/30 border border-charcoal/20 px-4 py-3 focus:outline-none focus:border-gold rounded-none appearance-none">
                <option value="">Select a service...</option>
                <option value="bespoke-suit">Bespoke Suit Tailoring</option>
                <option value="custom-shirts">Custom Shirts</option>
                <option value="wedding-wear">Wedding Wear</option>
                <option value="alterations">Premium Alterations</option>
                <option value="other">Other / Consultation</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-semibold mb-2" htmlFor="date">Preferred Date</label>
                <input required type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="w-full bg-beige/30 border border-charcoal/20 px-4 py-3 focus:outline-none focus:border-gold rounded-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" htmlFor="time">Preferred Time</label>
                <input required type="time" id="time" name="time" value={formData.time} onChange={handleChange} className="w-full bg-beige/30 border border-charcoal/20 px-4 py-3 focus:outline-none focus:border-gold rounded-none" />
              </div>
            </div>

            <div className="flex flex-col space-y-4 mb-8">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" name="homeVisit" checked={formData.homeVisit} onChange={handleChange} className="w-5 h-5 text-gold accent-gold focus:ring-gold border-charcoal/20 rounded-none" />
                <span className="text-sm font-medium">Request Home / Office Visit (Additional charges may apply)</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" name="measurementRequest" checked={formData.measurementRequest} onChange={handleChange} className="w-5 h-5 text-gold accent-gold focus:ring-gold border-charcoal/20 rounded-none" />
                <span className="text-sm font-medium">I need new measurements taken</span>
              </label>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-semibold mb-2" htmlFor="instructions">Special Instructions</label>
              <textarea id="instructions" name="instructions" value={formData.instructions} onChange={handleChange} rows={4} className="w-full bg-beige/30 border border-charcoal/20 px-4 py-3 focus:outline-none focus:border-gold rounded-none resize-none"></textarea>
            </div>

            <button type="submit" className="w-full bg-charcoal text-ivory px-8 py-4 font-bold tracking-wider uppercase hover:bg-gold hover:text-charcoal transition-colors duration-300">
              Submit Request
            </button>
          </motion.form>
        )}
      </div>
    </div>
  );
}
