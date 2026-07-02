import Link from "next/link";
import { Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/80 pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="font-playfair text-2xl font-bold tracking-wider text-ivory mb-4 block">
              THREADCRAFT
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Crafted to Fit. Designed to Impress. Bespoke tailoring and premium fashion studio delivering unparalleled craftsmanship since 1995.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gold transition-colors font-medium text-xs tracking-wider uppercase">IG</a>
              <a href="#" className="hover:text-gold transition-colors font-medium text-xs tracking-wider uppercase">FB</a>
              <a href="#" className="hover:text-gold transition-colors font-medium text-xs tracking-wider uppercase">TW</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-playfair text-lg font-semibold text-ivory mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="/collections" className="hover:text-gold transition-colors">Collections</Link></li>
              <li><Link href="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
              <li><Link href="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair text-lg font-semibold text-ivory mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-gold transition-colors">Bespoke Suits</Link></li>
              <li><Link href="/services" className="hover:text-gold transition-colors">Custom Shirts</Link></li>
              <li><Link href="/services" className="hover:text-gold transition-colors">Wedding Wear</Link></li>
              <li><Link href="/services" className="hover:text-gold transition-colors">Premium Alterations</Link></li>
              <li><Link href="/services" className="hover:text-gold transition-colors">Home Measurement</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-semibold text-ivory mb-4">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-white/5 border border-white/10 px-4 py-2 text-sm focus:outline-none focus:border-gold rounded-none"
              />
              <button 
                type="submit" 
                className="bg-gold text-charcoal px-4 py-2 text-sm font-medium hover:bg-ivory transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} ThreadCraft Studio. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
