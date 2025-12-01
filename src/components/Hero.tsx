import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-curtains.jpg";
import BookingDialog from "./BookingDialog";

const Hero = () => {
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);

  return (
    <>
    <section id="home" className="relative h-screen min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden mt-14 md:mt-16 lg:mt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury curtains in elegant interior"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/70 via-foreground/50 to-foreground/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-5 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="text-accent font-medium tracking-wider uppercase text-xs sm:text-sm md:text-sm mb-3 md:mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Dragon Mart, Dubai
          </motion.p>

          <h1 className="text-background mb-4 md:mb-5 lg:mb-6 text-balance max-w-4xl mx-auto px-2">
            Luxury Curtains & Blinds Tailored for Your Home
          </h1>

          <motion.p
            className="text-background/90 text-sm sm:text-base mb-6 md:mb-8 lg:mb-10 max-w-2xl mx-auto font-light px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Premium fabrics. Expert installation. Delivered from Dragon Mart within 48–72 hours.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4 justify-center items-stretch sm:items-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-sm sm:text-base px-5 sm:px-6 md:px-7 lg:px-8 py-4 sm:py-4.5 md:py-5 lg:py-6 shadow-luxury transition-smooth group w-full sm:w-auto"
              onClick={() => setBookingDialogOpen(true)}
            >
              Book Free Visit
              <ArrowRight className="ml-1.5 sm:ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-4.5 md:w-4.5 lg:h-5 lg:w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-background/10 hover:bg-background/20 text-background border-background/30 backdrop-blur-sm font-medium text-sm sm:text-base px-5 sm:px-6 md:px-7 lg:px-8 py-4 sm:py-4.5 md:py-5 lg:py-6 transition-smooth w-full sm:w-auto"
              asChild
            >
              <a href="tel:+971504649831">
                <Phone className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-4.5 md:w-4.5 lg:h-5 lg:w-5" />
                <span className="hidden xs:inline">+971 50 464 9831</span>
                <span className="xs:hidden">Call Now</span>
              </a>
            </Button>

            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium text-sm sm:text-base px-5 sm:px-6 md:px-7 lg:px-8 py-4 sm:py-4.5 md:py-5 lg:py-6 shadow-luxury transition-smooth group w-full sm:w-auto"
              asChild
            >
              <a href="https://wa.me/971504649831" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-4.5 md:w-4.5 lg:h-5 lg:w-5" />
                WhatsApp Now
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-background/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-background/70 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
    <BookingDialog open={bookingDialogOpen} onOpenChange={setBookingDialogOpen} />
    </>
  );
};

export default Hero;