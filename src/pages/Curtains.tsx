import { motion } from "framer-motion";
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import SEO from "@/components/SEO";
import BookingDialog from "@/components/BookingDialog";
import blackoutImage from "@/assets/curtain-blackout.jpg";
import sheerImage from "@/assets/curtain-sheer.jpg";

const curtainTypes = [
  {
    name: "Blackout Curtains",
    image: blackoutImage,
    description: "Complete darkness and privacy with superior thermal insulation. Perfect for bedrooms and media rooms.",
    features: [
      "100% light blocking",
      "Energy efficient",
      "Noise reduction",
      "Privacy protection",
    ],
    benefits: "Ideal for better sleep and temperature control",
  },
  {
    name: "Sheer Curtains",
    image: sheerImage,
    description: "Elegant, flowing fabric that filters natural light while maintaining privacy during the day.",
    features: [
      "Soft light diffusion",
      "Maintains privacy",
      "Airy & elegant",
      "UV protection",
    ],
    benefits: "Creates a bright, welcoming atmosphere",
  },
  {
    name: "Ripple-Fold (S-Wave) Curtains",
    image: blackoutImage,
    description: "Contemporary design with graceful, uniform waves. Modern sophistication for any space.",
    features: [
      "Sleek modern look",
      "Smooth operation",
      "Stack neatly",
      "Customizable",
    ],
    benefits: "Perfect for modern interiors and large windows",
  },
  {
    name: "Eyelet / Grommet Curtains",
    image: sheerImage,
    description: "Easy to open and close with metal rings at the top. Casual yet stylish appearance.",
    features: [
      "Simple installation",
      "Smooth gliding",
      "Contemporary style",
      "Easy maintenance",
    ],
    benefits: "Great for rental properties and quick updates",
  },
  {
    name: "Pinch Pleat Curtains",
    image: blackoutImage,
    description: "Classic, tailored elegance with neat, uniform pleats. Timeless sophistication for formal spaces.",
    features: [
      "Traditional elegance",
      "Structured look",
      "Formal appeal",
      "Versatile fabrics",
    ],
    benefits: "Adds luxury and fullness to any window",
  },
  {
    name: "Pencil Pleat Curtains",
    image: sheerImage,
    description: "Soft gathered pleats create a relaxed yet refined appearance. Versatile for any decor style.",
    features: [
      "Soft gathered look",
      "Adjustable width",
      "Cost-effective",
      "Classic style",
    ],
    benefits: "Suits both casual and formal settings",
  },
  {
    name: "Velvet Curtains",
    image: blackoutImage,
    description: "Luxurious texture with rich colors and excellent draping. Ultimate elegance and warmth.",
    features: [
      "Premium texture",
      "Rich appearance",
      "Sound absorption",
      "Thermal insulation",
    ],
    benefits: "Creates a warm, luxurious ambiance",
  },
  {
    name: "Motorized Curtains",
    image: sheerImage,
    description: "Automated convenience with remote or app control. Modern luxury meets smart home integration.",
    features: [
      "Remote control",
      "Smart home ready",
      "Scheduled operation",
      "No cords or chains",
    ],
    benefits: "Maximum convenience and child-safe design",
  },
];

const Curtains = () => {
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);
  
  const productsStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": curtainTypes.map((curtain, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": curtain.name,
        "description": curtain.description,
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
        title="Premium Curtains Dubai - Blackout, Sheer, Motorized & More"
        description="Transform your space with our extensive range of luxury curtains. From blackout to sheer, motorized to classic—find the perfect window treatment for every room."
        canonical="/curtains"
        keywords="curtains dubai, blackout curtains dubai, sheer curtains dubai, motorized curtains dubai, ripple fold curtains, velvet curtains dubai, custom curtains dubai"
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
            <h1 className="text-foreground mb-6">Premium Curtains Collection</h1>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Transform your space with our extensive range of luxury curtains. From blackout to sheer, motorized to classic—find the perfect window treatment for every room.
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

      {/* Curtain Types */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16">
            {curtainTypes.map((curtain, index) => (
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
                      src={curtain.image}
                      alt={curtain.name}
                      className="w-full h-[400px] md:h-[500px] object-cover"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <h2 className="text-foreground mb-4">{curtain.name}</h2>
                  <p className="text-muted-foreground text-base leading-relaxed mb-6">
                    {curtain.description}
                  </p>

                  <div className="bg-card rounded-xl p-6 mb-6 border border-border/50">
                    <h4 className="font-medium text-card-foreground mb-4">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {curtain.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-primary shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-xl p-6 mb-6">
                    <p className="text-foreground font-medium">
                      💡 {curtain.benefits}
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
            <h2 className="text-foreground mb-6">Ready to Transform Your Space?</h2>
            <p className="text-muted-foreground text-base mb-8">
              Book a free home visit and explore over 3000 premium fabrics with expert guidance
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

export default Curtains;