import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselDots } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Import all curtain images
import curtain1 from "@/assets/curtainshome/curtainshome (1).jpeg";
import curtain2 from "@/assets/curtainshome/curtainshome (2).jpeg";
import curtain3 from "@/assets/curtainshome/curtainshome (3).jpeg";
import curtain4 from "@/assets/curtainshome/curtainshome (4).jpeg";
import curtain5 from "@/assets/curtainshome/curtainshome (5).jpeg";
import curtain6 from "@/assets/curtainshome/curtainshome (6).jpeg";
import curtain7 from "@/assets/curtainshome/curtainshome (7).jpeg";
import curtain8 from "@/assets/curtainshome/curtainshome (8).jpeg";
import curtain9 from "@/assets/curtainshome/curtainshome (9).jpeg";
import curtain10 from "@/assets/curtainshome/curtainshome (10).jpeg";
import curtain11 from "@/assets/curtainshome/curtainshome (11).jpeg";
import curtain12 from "@/assets/curtainshome/curtainshome (12).jpeg";
import curtain13 from "@/assets/curtainshome/curtainshome (13).jpeg";
import curtain14 from "@/assets/curtainshome/curtainshome (14).jpeg";
import curtain15 from "@/assets/curtainshome/curtainshome (15).jpeg";
import curtain16 from "@/assets/curtainshome/curtainshome (16).jpeg";
import curtain17 from "@/assets/curtainshome/curtainshome (17).jpeg";
import curtain18 from "@/assets/curtainshome/curtainshome (18).jpeg";
import curtain19 from "@/assets/curtainshome/curtainshome (19).jpeg";
import curtain20 from "@/assets/curtainshome/curtainshome (20).jpeg";
import curtain21 from "@/assets/curtainshome/curtainshome (21).jpeg";
import curtain22 from "@/assets/curtainshome/curtainshome (22).jpeg";
import curtain23 from "@/assets/curtainshome/curtainshome (23).jpeg";
import curtain24 from "@/assets/curtainshome/curtainshome (24).jpeg";

const curtainItems = [
  {
    name: "Luxury Living Room Curtains",
    description: "Elegant floor-to-ceiling drapes with sophisticated pleating",
    image: curtain1,
  },
  {
    name: "Modern Bedroom Blackout",
    description: "Perfect light control for peaceful sleep and privacy",
    image: curtain2,
  },
  {
    name: "Sheer Elegance Collection",
    description: "Light-filtering fabrics that maintain privacy while welcoming natural light",
    image: curtain3,
  },
  {
    name: "Classic Traditional Drapery",
    description: "Timeless elegance with rich textures and formal pleats",
    image: curtain4,
  },
  {
    name: "Contemporary Minimalist",
    description: "Clean lines and simple sophistication for modern interiors",
    image: curtain5,
  },
  {
    name: "Premium Velvet Curtains",
    description: "Luxurious depth and rich color for opulent window treatments",
    image: curtain6,
  },
  {
    name: "Boutique Hotel Style",
    description: "Professional-grade curtains with hotel-quality finishes",
    image: curtain7,
  },
  {
    name: "Patterned Designer Series",
    description: "Bold patterns and prints to make a statement",
    image: curtain8,
  },
  {
    name: "Thermal Insulated Solutions",
    description: "Energy-efficient curtains that keep your home comfortable",
    image: curtain9,
  },
  {
    name: "Custom Bay Window Treatment",
    description: "Tailored solutions for unique architectural features",
    image: curtain10,
  },
  {
    name: "Executive Office Style",
    description: "Professional window treatments for workspace elegance",
    image: curtain11,
  },
  {
    name: "Dining Room Elegance",
    description: "Formal drapes that enhance your dining experience",
    image: curtain12,
  },
  {
    name: "Layered Window Design",
    description: "Combination of sheers and blackouts for ultimate versatility",
    image: curtain13,
  },
  {
    name: "Grommet Top Modern",
    description: "Contemporary style with easy operation and sleek appearance",
    image: curtain14,
  },
  {
    name: "Pinch Pleat Classic",
    description: "Traditional three-finger pleats with timeless appeal",
    image: curtain15,
  },
  {
    name: "Woven Natural Textures",
    description: "Organic fabrics that bring nature-inspired warmth",
    image: curtain16,
  },
  {
    name: "Dramatic Theater Style",
    description: "Statement-making curtains for grand living spaces",
    image: curtain17,
  },
  {
    name: "Subtle Neutral Tones",
    description: "Versatile colors that complement any interior palette",
    image: curtain18,
  },
  {
    name: "Rich Color Statement",
    description: "Bold hues that transform your room's ambiance",
    image: curtain19,
  },
  {
    name: "Silk-Like Luxury Finish",
    description: "Premium materials with a sophisticated sheen",
    image: curtain20,
  },
  {
    name: "Child-Safe Design",
    description: "Safe and durable window treatments for family homes",
    image: curtain21,
  },
  {
    name: "Double Layer Excellence",
    description: "Versatile two-layer system for light and privacy control",
    image: curtain22,
  },
  {
    name: "Retro Vintage Style",
    description: "Nostalgic designs that add character to your space",
    image: curtain23,
  },
  {
    name: "Ultra-Modern Smart Ready",
    description: "Contemporary designs compatible with smart home automation",
    image: curtain24,
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

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-0 md:-ml-4">
            {curtainItems.map((item, index) => (
              <CarouselItem key={index} className="pl-0 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group cursor-pointer h-full"
                >
                  <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-luxury transition-smooth border border-border/50 h-full flex flex-col">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700"
                      />
                    </div>
                    
                    <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
                      <h3 className="text-base sm:text-lg md:text-xl font-serif font-medium text-card-foreground mb-1 sm:mb-1.5 md:mb-2">
                        {item.name}
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-xs md:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselDots />
        </Carousel>

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