import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import blackoutImage from "@/assets/curtain-blackout.jpg";
import sheerImage from "@/assets/curtain-sheer.jpg";

const curtainTypes = [
  {
    name: "Blackout Curtains",
    description: "Complete darkness and privacy with elegant thermal insulation",
    image: blackoutImage,
  },
  {
    name: "Sheer Curtains",
    description: "Soft, flowing elegance with natural light diffusion",
    image: sheerImage,
  },
  {
    name: "Ripple-Fold Curtains",
    description: "Contemporary S-wave design for a sleek, modern look",
    image: blackoutImage, // Will generate more images
  },
  {
    name: "Velvet Curtains",
    description: "Luxurious texture and richness for sophisticated spaces",
    image: sheerImage,
  },
];

const CurtainsShowcase = () => {
  return (
    <section id="curtains" className="py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-5 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16"
        >
          <h2 className="text-foreground mb-3 sm:mb-3.5 md:mb-4">Our Curtain Collection</h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            From blackout to sheer, motorized to classic—find the perfect curtains for every room
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {curtainTypes.map((curtain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-medium hover:shadow-luxury transition-smooth">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={curtain.image}
                    alt={curtain.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent opacity-60 group-hover:opacity-80 transition-smooth" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 lg:p-6 text-background">
                  <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-serif font-medium mb-1 sm:mb-1.5 md:mb-2">
                    {curtain.name}
                  </h3>
                  <p className="text-background/90 text-xs sm:text-xs md:text-sm leading-relaxed">
                    {curtain.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-8 sm:mt-10 md:mt-12"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-sm sm:text-base px-6 sm:px-7 md:px-8 py-4 sm:py-5 md:py-6 shadow-luxury transition-smooth group"
            asChild
          >
            <Link to="/curtains">
              Explore All Curtains
              <ArrowRight className="ml-1.5 sm:ml-2 h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CurtainsShowcase;