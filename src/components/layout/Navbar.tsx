"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/collections", label: "Collections" },
    { href: "/gallery", label: "Gallery" },
    { href: "/appointment", label: "Appointment" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-ivory/80 dark:bg-charcoal/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="font-playfair text-2xl font-bold tracking-wider text-charcoal dark:text-ivory">
              THREADCRAFT
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <Link href="/appointment" className="bg-charcoal dark:bg-ivory text-ivory dark:text-charcoal px-6 py-2 rounded-none hover:bg-gold hover:text-charcoal transition-colors duration-300">
              Book Now
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none text-charcoal dark:text-ivory"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-b border-white/10 bg-ivory dark:bg-charcoal"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm font-medium hover:text-gold transition-colors py-2 border-b border-charcoal/5 dark:border-white/5"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  href="/appointment"
                  onClick={() => setIsOpen(false)}
                  className="block text-center bg-charcoal dark:bg-ivory text-ivory dark:text-charcoal px-6 py-3 rounded-none hover:bg-gold hover:text-charcoal transition-colors duration-300 font-bold"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
