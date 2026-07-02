import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
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
              <Link href="/about" className="text-sm font-medium hover:text-gold transition-colors">About</Link>
              <Link href="/services" className="text-sm font-medium hover:text-gold transition-colors">Services</Link>
              <Link href="/collections" className="text-sm font-medium hover:text-gold transition-colors">Collections</Link>
              <Link href="/gallery" className="text-sm font-medium hover:text-gold transition-colors">Gallery</Link>
              <Link href="/appointment" className="text-sm font-medium hover:text-gold transition-colors">Appointment</Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Link href="/appointment" className="bg-charcoal dark:bg-ivory text-ivory dark:text-charcoal px-6 py-2 rounded-none hover:bg-gold hover:text-charcoal transition-colors duration-300">
              Book Now
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
