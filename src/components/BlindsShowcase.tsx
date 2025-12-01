import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import rollerImage from "@/assets/blind-roller.jpg";
import romanImage from "@/assets/blind-roman.jpg";

const blindTypes = [
  {
    name: "Roller Blinds",
    description: "Sleek, modern, and versatile for any space",
    image: rollerImage,
  },
  {
    name: "Roman Blinds",
    description: "Classic elegance with soft fabric folds",
    image: romanImage,
  },
  {
    name: "Venetian Blinds",
    description: "Precision light control with timeless style",
    image: rollerImage,
  },
  {
    name: "Zebra Blinds",
    description: "Dual fabric design for flexible light filtering",
    image: romanImage,
  },
];

const BlindsShowcase = () => {
  return (
    <section id="blinds" className="py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-5 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16"
        >
          <h2 className="text-foreground mb-3 sm:mb-3.5 md:mb-4">Premium Blinds Collection</h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            Modern, functional, and stylish window solutions for every room
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {blindTypes.map((blind, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-luxury transition-smooth border border-border/50">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={blind.image}
                    alt={blind.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700"
                  />
                </div>
                
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-serif font-medium text-card-foreground mb-1 sm:mb-1.5 md:mb-2">
                    {blind.name}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-xs md:text-sm leading-relaxed">
                    {blind.description}
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
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium text-sm sm:text-base px-6 sm:px-7 md:px-8 py-4 sm:py-5 md:py-6 transition-smooth group"
            asChild
          >
            <Link to="/blinds">
              Explore All Blinds
              <ArrowRight className="ml-1.5 sm:ml-2 h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlindsShowcase;