import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselDots } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Import all furniture images
import furniture1 from "@/assets/furniture/furniturehome (1).jpeg";
import furniture2 from "@/assets/furniture/furniturehome (2).jpeg";
import furniture3 from "@/assets/furniture/furniturehome (3).jpeg";
import furniture4 from "@/assets/furniture/furniturehome (4).jpeg";
import furniture5 from "@/assets/furniture/furniturehome (5).jpeg";
import furniture6 from "@/assets/furniture/furniturehome (6).jpeg";
import furniture7 from "@/assets/furniture/furniturehome (7).jpeg";
import furniture8 from "@/assets/furniture/furniturehome (8).jpeg";
import furniture9 from "@/assets/furniture/furniturehome (9).jpeg";
import furniture10 from "@/assets/furniture/furniturehome (10).jpeg";
import furniture11 from "@/assets/furniture/furniturehome (11).jpeg";
import furniture12 from "@/assets/furniture/furniturehome (12).jpeg";
import furniture13 from "@/assets/furniture/furniturehome (13).jpeg";
import furniture14 from "@/assets/furniture/furniturehome (14).jpeg";
import furniture15 from "@/assets/furniture/furniturehome (15).jpeg";
import furniture16 from "@/assets/furniture/furniturehome (16).jpeg";
import furniture17 from "@/assets/furniture/furniturehome (17).jpeg";
import furniture18 from "@/assets/furniture/furniturehome (18).jpeg";
import furniture19 from "@/assets/furniture/furniturehome (19).jpeg";
import furniture20 from "@/assets/furniture/furniturehome (20).jpeg";
import furniture21 from "@/assets/furniture/furniturehome (21).jpeg";
import furniture22 from "@/assets/furniture/furniturehome (22).jpeg";
import furniture23 from "@/assets/furniture/furniturehome (23).jpeg";
import furniture24 from "@/assets/furniture/furniturehome (24).jpeg";
import furniture25 from "@/assets/furniture/furniturehome (25).jpeg";
import furniture26 from "@/assets/furniture/furniturehome (26).jpeg";
import furniture27 from "@/assets/furniture/furniturehome (27).jpeg";
import furniture28 from "@/assets/furniture/furniturehome (28).jpeg";
import furniture29 from "@/assets/furniture/furniturehome (29).jpeg";
import furniture30 from "@/assets/furniture/furniturehome (30).jpeg";
import furniture31 from "@/assets/furniture/furniturehome (31).jpeg";
import furniture32 from "@/assets/furniture/furniturehome (32).jpeg";
import furniture33 from "@/assets/furniture/furniturehome (33).jpeg";
import furniture34 from "@/assets/furniture/furniturehome (34).jpeg";
import furniture35 from "@/assets/furniture/furniturehome (35).jpeg";
import furniture36 from "@/assets/furniture/furniturehome (36).jpeg";
import furniture37 from "@/assets/furniture/furniturehome (37).jpeg";
import furniture38 from "@/assets/furniture/furniturehome (38).jpeg";
import furniture39 from "@/assets/furniture/WhatsApp Image 2025-12-21 at 12.17.45.jpeg";
import furniture40 from "@/assets/furniture/WhatsApp Image 2025-12-21 at 12.17.50 (2).jpeg";

const furnitureItems = [
  {
    name: "Luxury Sofa Collection",
    description: "Premium comfort with elegant designs for your living space",
    image: furniture1,
  },
  {
    name: "Modern Dining Set",
    description: "Stylish dining furniture that brings families together",
    image: furniture2,
  },
  {
    name: "Executive Office Desk",
    description: "Professional workspace solutions with premium finishes",
    image: furniture3,
  },
  {
    name: "Comfortable Lounge Chairs",
    description: "Relaxing seating for your home or office",
    image: furniture4,
  },
  {
    name: "Elegant Coffee Tables",
    description: "Centrepiece furniture that enhances your room",
    image: furniture5,
  },
  {
    name: "Premium Bedroom Suite",
    description: "Complete bedroom sets for restful nights",
    image: furniture6,
  },
  {
    name: "Stylish Wardrobe Solutions",
    description: "Spacious storage with contemporary design",
    image: furniture7,
  },
  {
    name: "Versatile Storage Units",
    description: "Functional furniture that keeps your space organized",
    image: furniture8,
  },
  {
    name: "Designer Console Tables",
    description: "Elegant entryway furniture for first impressions",
    image: furniture9,
  },
  {
    name: "Luxury Recliner Chairs",
    description: "Ultimate comfort and relaxation at home",
    image: furniture10,
  },
  {
    name: "Modern TV Stand",
    description: "Contemporary entertainment centers for modern homes",
    image: furniture11,
  },
  {
    name: "Executive Conference Table",
    description: "Professional meeting furniture for business spaces",
    image: furniture12,
  },
  {
    name: "Comfortable Sectional Sofa",
    description: "Spacious seating arrangements for large families",
    image: furniture13,
  },
  {
    name: "Elegant Dining Chairs",
    description: "Comfortable and stylish seating for dining areas",
    image: furniture14,
  },
  {
    name: "Premium Office Chair",
    description: "Ergonomic design for long work sessions",
    image: furniture15,
  },
  {
    name: "Luxury Side Tables",
    description: "Perfect accent pieces for any room",
    image: furniture16,
  },
  {
    name: "Modern Bookshelf",
    description: "Functional storage with contemporary styling",
    image: furniture17,
  },
  {
    name: "Stylish Accent Chairs",
    description: "Statement pieces that enhance your decor",
    image: furniture18,
  },
  {
    name: "Premium Bed Frame",
    description: "Elegant bedroom centerpiece with quality craftsmanship",
    image: furniture19,
  },
  {
    name: "Comfortable Ottoman",
    description: "Versatile furniture for seating and storage",
    image: furniture20,
  },
  {
    name: "Designer Display Cabinet",
    description: "Showcase your collections with style",
    image: furniture21,
  },
  {
    name: "Executive Leather Sofa",
    description: "Sophisticated seating with premium materials",
    image: furniture22,
  },
  {
    name: "Modern Work Desk",
    description: "Functional workspace solutions for home offices",
    image: furniture23,
  },
  {
    name: "Elegant Buffet Cabinet",
    description: "Storage and serving solution for dining areas",
    image: furniture24,
  },
  {
    name: "Luxury Headboard Design",
    description: "Bedroom elegance with sophisticated styling",
    image: furniture25,
  },
  {
    name: "Comfortable Guest Bed",
    description: "Welcoming furniture for visitors",
    image: furniture26,
  },
  {
    name: "Stylish Bar Stools",
    description: "Modern seating for kitchen islands and bars",
    image: furniture27,
  },
  {
    name: "Premium Armchair",
    description: "Comfortable reading chair with elegant design",
    image: furniture28,
  },
  {
    name: "Modern Sideboard",
    description: "Functional storage with contemporary appeal",
    image: furniture29,
  },
  {
    name: "Executive Seating Set",
    description: "Professional furniture for office spaces",
    image: furniture30,
  },
  {
    name: "Luxury Chaise Lounge",
    description: "Relaxing furniture for your living room",
    image: furniture31,
  },
  {
    name: "Designer Nightstand",
    description: "Bedside storage with modern elegance",
    image: furniture32,
  },
  {
    name: "Premium Corner Sofa",
    description: "Maximize seating in any room layout",
    image: furniture33,
  },
  {
    name: "Elegant Dressing Table",
    description: "Beautiful vanity furniture for your bedroom",
    image: furniture34,
  },
  {
    name: "Modern Media Console",
    description: "Entertainment furniture with sleek design",
    image: furniture35,
  },
  {
    name: "Stylish Storage Bench",
    description: "Multipurpose furniture for entryways and bedrooms",
    image: furniture36,
  },
  {
    name: "Executive Credenza",
    description: "Professional storage solution for offices",
    image: furniture37,
  },
  {
    name: "Luxury Bedside Cabinet",
    description: "Elegant storage for your bedroom essentials",
    image: furniture38,
  },
  {
    name: "Contemporary Lounge Set",
    description: "Modern furniture for comfortable living",
    image: furniture39,
  },
  {
    name: "Premium Seating Collection",
    description: "Complete furniture sets for elegant interiors",
    image: furniture40,
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
          <h2 className="text-foreground mb-3 sm:mb-3.5 md:mb-4">Premium Furniture Collection</h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            From sofas to dining sets, office furniture to bedroom suites—find the perfect furniture for every space
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
            {furnitureItems.map((item, index) => (
              <CarouselItem key={index} className="pl-0 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group cursor-pointer h-full"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-medium hover:shadow-luxury transition-smooth h-full">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent opacity-60 group-hover:opacity-80 transition-smooth" />
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 lg:p-6 text-background">
                      <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-serif font-medium mb-1 sm:mb-1.5 md:mb-2">
                        {item.name}
                      </h3>
                      <p className="text-background/90 text-xs sm:text-xs md:text-sm leading-relaxed">
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
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-sm sm:text-base px-6 sm:px-7 md:px-8 py-4 sm:py-5 md:py-6 shadow-luxury transition-smooth group"
            asChild
          >
            <Link to="/upholstery">
              Explore All Furniture
              <ArrowRight className="ml-1.5 sm:ml-2 h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CurtainsShowcase;