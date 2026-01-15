import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Facebook } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background pt-10 sm:pt-12 md:pt-14 lg:pt-16 pb-6 sm:pb-7 md:pb-8">
      <div className="container mx-auto px-4 sm:px-5 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-9 md:gap-10 lg:gap-12 mb-8 sm:mb-9 md:mb-10 lg:mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-serif font-medium mb-3 sm:mb-3.5 md:mb-4">
              VIP Curtains & Furniture
            </h3>
            <p className="text-background/80 footer-text mb-4 sm:mb-5 md:mb-6 leading-relaxed">
              Premium curtains, blinds, and upholstery from Dragon Mart. Serving Dubai with excellence for over 15 years.
            </p>
            <div className="flex gap-3 sm:gap-3.5 md:gap-4">
              <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-smooth">
                <Instagram className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-smooth">
                <Facebook className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-background/10 hover:bg-accent rounded-full flex items-center justify-center transition-smooth">
                <MessageCircle className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg md:text-xl font-medium mb-3 sm:mb-3.5 md:mb-4">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
              <li>
                <NavLink to="/about" className="text-background/80 hover:text-accent transition-smooth footer-text">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/curtains" className="text-background/80 hover:text-accent transition-smooth footer-text">Curtains</NavLink>
              </li>
              <li>
                <NavLink to="/blinds" className="text-background/80 hover:text-accent transition-smooth footer-text">Blinds</NavLink>
              </li>
              <li>
                <NavLink to="/upholstery" className="text-background/80 hover:text-accent transition-smooth footer-text">Upholstery</NavLink>
              </li>
              <li>
                <NavLink to="/gallery" className="text-background/80 hover:text-accent transition-smooth footer-text">Gallery</NavLink>
              </li>
              <li>
                <NavLink to="/faq" className="text-background/80 hover:text-accent transition-smooth footer-text">FAQ</NavLink>
              </li>
              <li>
                <NavLink to="/quote" className="text-background/80 hover:text-accent transition-smooth footer-text">Get Quote</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-background/80 hover:text-accent transition-smooth footer-text">Contact</NavLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg md:text-xl font-medium mb-3 sm:mb-3.5 md:mb-4">Our Services</h4>
            <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
              <li className="text-background/80 footer-text">Blackout Curtains</li>
              <li className="text-background/80 footer-text">Motorized Blinds</li>
              <li className="text-background/80 footer-text">Sofa Reupholstery</li>
              <li className="text-background/80 footer-text">Custom Headboards</li>
              <li className="text-background/80 footer-text">Free Measurement</li>
              <li className="text-background/80 footer-text">Installation Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg md:text-xl font-medium mb-3 sm:mb-3.5 md:mb-4">Get in Touch</h4>
            <ul className="space-y-3 sm:space-y-3.5 md:space-y-4">
              <li className="flex items-start gap-2.5 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-background/80 footer-text">
                  Dragon Mart, International City, Dubai, UAE
                </span>
              </li>
              <li className="flex items-center gap-2.5 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-accent shrink-0" />
                <a href="tel:+971504649831" className="text-background/80 hover:text-accent transition-smooth footer-text">
                  +971 50 464 9831
                </a>
              </li>
              <li className="flex items-center gap-2.5 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-accent shrink-0" />
                <NavLink to="/contact" className="text-background/80 hover:text-accent transition-smooth footer-text">
                  Contact Us
                </NavLink>
              </li>
              <li className="flex items-start gap-2.5 sm:gap-3">
                <Clock className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-accent shrink-0 mt-0.5" />
                <div className="text-background/80 footer-text">
                  <div>Sat - Thu: 10 AM - 10 PM</div>
                  <div>Friday: 2 PM - 10 PM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 sm:pt-7 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-background/60 footer-text">
              © 2024 VIP Curtains & Furniture. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-5 md:gap-6">
              <a href="#" className="text-background/60 hover:text-accent transition-smooth whitespace-nowrap footer-text">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-accent transition-smooth whitespace-nowrap footer-text">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;