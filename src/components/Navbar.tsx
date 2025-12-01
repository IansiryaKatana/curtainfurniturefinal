import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, MessageCircle } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import BookingDialog from "./BookingDialog";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Curtains", href: "/curtains" },
  { name: "Blinds", href: "/blinds" },
  { name: "Upholstery", href: "/upholstery" },
  { name: "Gallery", href: "/gallery" },
  { name: "FAQ", href: "/faq" },
  { name: "Get Quote", href: "/quote" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-soft"
      >
        <div className="container mx-auto px-4 sm:px-5 md:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <h3 className="text-base sm:text-lg md:text-xl font-serif font-medium text-foreground">
                VIP Curtains
              </h3>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {menuItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className="text-muted-foreground hover:text-primary transition-smooth font-medium"
                  activeClassName="text-primary font-semibold"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-2.5 xl:gap-3">
              <Button
                size="sm"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth text-xs xl:text-sm px-3 xl:px-4 py-1.5 xl:py-2"
                asChild
              >
                <a href="tel:+971504649831">
                  <Phone className="mr-1.5 xl:mr-2 h-3.5 w-3.5 xl:h-4 xl:w-4" />
                  Call Now
                </a>
              </Button>
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth text-xs xl:text-sm px-3 xl:px-4 py-1.5 xl:py-2"
                onClick={() => setBookingDialogOpen(true)}
              >
                Book Visit
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-smooth"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-14 sm:top-16 md:top-18 lg:top-20 left-0 right-0 z-30 bg-background border-b border-border shadow-luxury lg:hidden overflow-hidden"
          >
            <div className="container mx-auto px-4 sm:px-5 py-5 sm:py-6">
              <div className="flex flex-col space-y-4">
                {menuItems.map((item, index) => (
                  <motion.div key={item.name}>
                    <NavLink
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-foreground hover:text-primary transition-smooth font-medium py-2 border-b border-border/50 block"
                      activeClassName="text-primary font-semibold"
                    >
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {item.name}
                      </motion.div>
                    </NavLink>
                  </motion.div>
                ))}

                <div className="flex flex-col gap-3 pt-4">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                    asChild
                  >
                    <a href="tel:+971504649831">
                      <Phone className="mr-2 h-5 w-5" />
                      +971 50 464 9831
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transition-smooth"
                    asChild
                  >
                    <a href="https://wa.me/971504649831" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <BookingDialog open={bookingDialogOpen} onOpenChange={setBookingDialogOpen} />
    </>
  );
};

export default Navbar;