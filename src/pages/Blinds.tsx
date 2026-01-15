import { motion } from "framer-motion";
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import SEO from "@/components/SEO";
import BookingDialog from "@/components/BookingDialog";
import rollerImage from "@/assets/blind-roller.jpg";
import romanImage from "@/assets/blind-roman.jpg";

const blindTypes = [
  {
    name: "Roller Blinds",
    image: rollerImage,
    description: "Sleek, modern, and incredibly versatile. Perfect for any room with clean lines and easy operation.",
    features: [
      "Minimalist design",
      "Easy to clean",
      "Space-saving",
      "Wide color range",
    ],
    benefits: "Ideal for modern interiors and small spaces",
  },
  {
    name: "Sunscreen Roller Blinds",
    image: rollerImage,
    description: "Blocks harmful UV rays while maintaining your view. Energy-efficient and protective.",
    features: [
      "UV protection",
      "Maintains view",
      "Glare reduction",
      "Energy efficient",
    ],
    benefits: "Perfect for offices and sunny rooms",
  },
  {
    name: "Roman Blinds",
    image: romanImage,
    description: "Classic elegance with soft fabric folds. Adds warmth and sophistication to any space.",
    features: [
      "Elegant design",
      "Soft fabric folds",
      "Customizable",
      "Luxury appeal",
    ],
    benefits: "Creates a warm, traditional ambiance",
  },
  {
    name: "Venetian Blinds",
    image: rollerImage,
    description: "Precision light control with horizontal slats. Timeless style meets functionality.",
    features: [
      "Adjustable slats",
      "Light control",
      "Durable",
      "Classic look",
    ],
    benefits: "Versatile for any room and decor",
  },
  {
    name: "Vertical Blinds",
    image: romanImage,
    description: "Perfect for large windows and sliding doors. Excellent light control and privacy.",
    features: [
      "Large window solution",
      "Easy operation",
      "Light filtering",
      "Low maintenance",
    ],
    benefits: "Great for patios and office spaces",
  },
  {
    name: "Duplex Zebra Blinds",
    image: rollerImage,
    description: "Dual fabric design alternates between sheer and opaque. Modern style with flexible light control.",
    features: [
      "Day & night function",
      "Modern aesthetic",
      "Flexible control",
      "Easy to use",
    ],
    benefits: "Perfect balance of privacy and natural light",
  },
  {
    name: "Wooden Blinds",
    image: romanImage,
    description: "Natural beauty and warmth of real wood. Timeless elegance for traditional or contemporary spaces.",
    features: [
      "Natural wood",
      "Premium look",
      "Durable",
      "Adds warmth",
    ],
    benefits: "Creates an organic, sophisticated atmosphere",
  },
  {
    name: "Motorized Blinds",
    image: rollerImage,
    description: "Smart automation for ultimate convenience. Control via remote, app, or voice commands.",
    features: [
      "Remote control",
      "App integration",
      "Voice control ready",
      "Child-safe",
    ],
    benefits: "Maximum convenience and modern luxury",
  },
];

const Blinds = () => {
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);
  
  const productsStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": blindTypes.map((blind, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": blind.name,
        "description": blind.description,
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "AED"
        }
      }
    }))
  };

  return (
    <PageLayout>
      <SEO 
        title="Premium Blinds Dubai - Roller, Roman, Motorized & More"
        description="Discover our comprehensive range of window blinds. From roller to roman, motorized to wooden—find the perfect blend of style and functionality."
        canonical="/blinds"
        keywords="blinds dubai, roller blinds dubai, roman blinds dubai, motorized blinds dubai, zebra blinds dubai, sunscreen blinds dubai, vertical blinds dubai"
        structuredData={productsStructuredData}
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
            <h1 className="text-foreground mb-6">Premium Blinds Collection</h1>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Discover our comprehensive range of window blinds. From roller to roman, motorized to wooden—find the perfect blend of style and functionality.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 shadow-luxury transition-smooth group"
              onClick={() => setBookingDialogOpen(true)}
            >
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Blind Types */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16">
            {blindTypes.map((blind, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="relative rounded-2xl overflow-hidden shadow-luxury">
                    <img
                      src={blind.image}
                      alt={blind.name}
                      className="w-full h-[400px] md:h-[500px] object-cover"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <h2 className="text-foreground mb-4">{blind.name}</h2>
                  <p className="text-muted-foreground text-base leading-relaxed mb-6">
                    {blind.description}
                  </p>

                  <div className="bg-card rounded-xl p-6 mb-6 border border-border/50">
                    <h4 className="font-medium text-card-foreground mb-4">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {blind.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-primary shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-xl p-6 mb-6">
                    <p className="text-foreground font-medium">
                      💡 {blind.benefits}
                    </p>
                  </div>

                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                    asChild
                  >
                    <NavLink to="/quote">Get Free Quote</NavLink>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-foreground mb-6">Find Your Perfect Blinds</h2>
            <p className="text-muted-foreground text-base mb-8">
              Expert consultation, professional installation, and premium quality guaranteed
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 shadow-luxury transition-smooth"
                onClick={() => setBookingDialogOpen(true)}
              >
                Schedule Free Visit
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

export default Blinds;