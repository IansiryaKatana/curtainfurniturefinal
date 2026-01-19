import { motion } from "framer-motion";
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Sofa, Bed, Armchair, Home } from "lucide-react";
import SEO from "@/components/SEO";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookingDialog from "@/components/BookingDialog";

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
  { name: "Luxury Sofa Collection", image: furniture1, category: "Sofas" },
  { name: "Modern Dining Set", image: furniture2, category: "Dining" },
  { name: "Executive Office Desk", image: furniture3, category: "Office" },
  { name: "Comfortable Lounge Chairs", image: furniture4, category: "Living Room" },
  { name: "Elegant Coffee Tables", image: furniture5, category: "Living Room" },
  { name: "Premium Bedroom Suite", image: furniture6, category: "Bedroom" },
  { name: "Stylish Wardrobe Solutions", image: furniture7, category: "Bedroom" },
  { name: "Versatile Storage Units", image: furniture8, category: "Living Room" },
  { name: "Designer Console Tables", image: furniture9, category: "Living Room" },
  { name: "Luxury Recliner Chairs", image: furniture10, category: "Sofas" },
  { name: "Modern TV Stand", image: furniture11, category: "Living Room" },
  { name: "Executive Conference Table", image: furniture12, category: "Office" },
  { name: "Comfortable Sectional Sofa", image: furniture13, category: "Sofas" },
  { name: "Elegant Dining Chairs", image: furniture14, category: "Dining" },
  { name: "Premium Office Chair", image: furniture15, category: "Office" },
  { name: "Luxury Side Tables", image: furniture16, category: "Living Room" },
  { name: "Modern Bookshelf", image: furniture17, category: "Living Room" },
  { name: "Stylish Accent Chairs", image: furniture18, category: "Living Room" },
  { name: "Premium Bed Frame", image: furniture19, category: "Bedroom" },
  { name: "Comfortable Ottoman", image: furniture20, category: "Living Room" },
  { name: "Designer Display Cabinet", image: furniture21, category: "Living Room" },
  { name: "Executive Leather Sofa", image: furniture22, category: "Sofas" },
  { name: "Modern Work Desk", image: furniture23, category: "Office" },
  { name: "Elegant Buffet Cabinet", image: furniture24, category: "Dining" },
  { name: "Luxury Headboard Design", image: furniture25, category: "Bedroom" },
  { name: "Comfortable Guest Bed", image: furniture26, category: "Bedroom" },
  { name: "Stylish Bar Stools", image: furniture27, category: "Dining" },
  { name: "Premium Armchair", image: furniture28, category: "Sofas" },
  { name: "Modern Sideboard", image: furniture29, category: "Dining" },
  { name: "Executive Seating Set", image: furniture30, category: "Office" },
  { name: "Luxury Chaise Lounge", image: furniture31, category: "Sofas" },
  { name: "Designer Nightstand", image: furniture32, category: "Bedroom" },
  { name: "Premium Corner Sofa", image: furniture33, category: "Sofas" },
  { name: "Elegant Dressing Table", image: furniture34, category: "Bedroom" },
  { name: "Modern Media Console", image: furniture35, category: "Living Room" },
  { name: "Stylish Storage Bench", image: furniture36, category: "Living Room" },
  { name: "Executive Credenza", image: furniture37, category: "Office" },
  { name: "Luxury Bedside Cabinet", image: furniture38, category: "Bedroom" },
  { name: "Contemporary Lounge Set", image: furniture39, category: "Sofas" },
  { name: "Premium Seating Collection", image: furniture40, category: "Sofas" },
];

const services = [
  {
    icon: Sofa,
    name: "Sofa Reupholstery",
    description: "Give your sofa a complete makeover with premium fabrics and expert craftsmanship.",
    features: [
      "Full fabric replacement",
      "Frame repair & reinforcement",
      "Cushion replacement",
      "Custom design options",
    ],
  },
  {
    icon: Bed,
    name: "Custom Headboards",
    description: "Transform your bedroom with bespoke headboards in any style, size, and fabric.",
    features: [
      "Made-to-measure",
      "Wide fabric selection",
      "Various designs",
      "Professional installation",
    ],
  },
  {
    icon: Armchair,
    name: "Dining Chair Upholstery",
    description: "Refresh your dining chairs with new fabric and restore their original comfort.",
    features: [
      "Fabric replacement",
      "Padding renewal",
      "Frame restoration",
      "Set discounts available",
    ],
  },
  {
    icon: Home,
    name: "Decorative Cushions",
    description: "Add personality and comfort with custom-made cushions in any shape or size.",
    features: [
      "Custom sizes",
      "Matching fabrics",
      "Quality fillings",
      "Piping & trims",
    ],
  },
];

const process = [
  {
    step: "Assessment",
    description: "We evaluate your furniture's condition and discuss your vision for the transformation.",
  },
  {
    step: "Fabric Selection",
    description: "Choose from thousands of premium fabrics, leathers, and upholstery materials.",
  },
  {
    step: "Expert Craftsmanship",
    description: "Our skilled upholsterers restore and transform your furniture with precision.",
  },
  {
    step: "Delivery & Setup",
    description: "We deliver and set up your beautifully refreshed furniture in your space.",
  },
];

const Upholstery = () => {
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);
  
  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Upholstery Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "VIP Curtains & Furniture"
    },
    "areaServed": {
      "@type": "City",
      "name": "Dubai"
    },
    "description": "Professional upholstery services including sofa reupholstery, custom headboards, dining chair upholstery, and decorative cushions."
  };

  return (
    <PageLayout>
      <SEO 
        title="Custom Upholstery Services Dubai - Sofa, Headboards & More"
        description="Breathe new life into your beloved furniture. From complete sofa reupholstery to custom headboards, we transform your pieces into stunning focal points."
        canonical="/upholstery"
        keywords="upholstery dubai, sofa reupholstery dubai, custom headboards dubai, furniture restoration dubai, dining chair upholstery dubai"
        structuredData={servicesStructuredData}
      />
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-foreground mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl whitespace-nowrap">Custom Upholstery Services</h1>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Breathe new life into your beloved furniture. From complete sofa reupholstery to custom headboards, we transform your pieces into stunning focal points.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 shadow-luxury transition-smooth group"
              onClick={() => setBookingDialogOpen(true)}
            >
              Get Free Assessment
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-foreground mb-4">Our Upholstery Services</h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto">
              Expert craftsmanship for all your furniture transformation needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-luxury transition-smooth border border-border/50"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-medium text-card-foreground mb-3">
                  {service.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Furniture Gallery */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-foreground mb-4">Our Furniture Collection</h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto">
              Explore our curated selection of premium furniture pieces across different categories
            </p>
          </motion.div>

          <Tabs defaultValue="All" className="w-full">
            <div className="flex flex-wrap justify-center mb-8">
              <TabsList className="bg-background/50 backdrop-blur-sm border border-border/50">
                <TabsTrigger value="All" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  All
                </TabsTrigger>
                <TabsTrigger value="Sofas" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Sofas
                </TabsTrigger>
                <TabsTrigger value="Dining" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Dining
                </TabsTrigger>
                <TabsTrigger value="Bedroom" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Bedroom
                </TabsTrigger>
                <TabsTrigger value="Living Room" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Living Room
                </TabsTrigger>
                <TabsTrigger value="Office" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Office
                </TabsTrigger>
              </TabsList>
            </div>

            {["All", "Sofas", "Dining", "Bedroom", "Living Room", "Office"].map((category) => {
              const filteredItems = category === "All" 
                ? furnitureItems 
                : furnitureItems.filter(item => item.category === category);

              return (
                <TabsContent key={category} value={category} className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
                  >
                    {filteredItems.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="group relative overflow-hidden rounded-xl shadow-soft hover:shadow-luxury transition-smooth"
                      >
                        <div className="aspect-square overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent opacity-60 group-hover:opacity-80 transition-smooth" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-background">
                          <h3 className="text-base sm:text-lg font-serif font-medium">
                            {item.name}
                          </h3>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-foreground mb-4">Our Upholstery Process</h2>
            <p className="text-muted-foreground text-base md:text-base max-w-2xl mx-auto">
              From consultation to completion, we handle everything with care
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-luxury text-primary-foreground font-serif text-2xl font-medium mb-4 shadow-luxury">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-serif font-medium text-foreground mb-2">
                  {item.step}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-foreground mb-6">Ready to Revive Your Furniture?</h2>
            <p className="text-muted-foreground text-base mb-8">
              Book a free assessment and discover how we can transform your pieces
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 shadow-luxury transition-smooth"
                onClick={() => setBookingDialogOpen(true)}
              >
                Book Free Assessment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:border-primary hover:text-primary transition-smooth px-8 py-6"
                asChild
              >
                <a href="tel:+971504649831">Call +971 50 464 9831</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <BookingDialog open={bookingDialogOpen} onOpenChange={setBookingDialogOpen} />
    </PageLayout>
  );
};

export default Upholstery;