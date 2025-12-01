import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Sofa, Bed, Armchair, Home } from "lucide-react";
import SEO from "@/components/SEO";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

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
            <h1 className="text-foreground mb-6">Custom Upholstery Services</h1>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Breathe new life into your beloved furniture. From complete sofa reupholstery to custom headboards, we transform your pieces into stunning focal points.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 shadow-luxury transition-smooth group"
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

      {/* Before/After Showcase */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-foreground mb-4">Our Transformations</h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto">
              Slide to see the dramatic difference our upholstery services make
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <BeforeAfterSlider
                beforeImage="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
                afterImage="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
                beforeLabel="Old Fabric"
                afterLabel="Luxurious New Look"
              />
              <p className="text-center text-sm text-muted-foreground mt-4">
                Classic Sofa Reupholstery - Dubai Marina
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <BeforeAfterSlider
                beforeImage="https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
                afterImage="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
                beforeLabel="Worn Out"
                afterLabel="Like Brand New"
              />
              <p className="text-center text-sm text-muted-foreground mt-4">
                Modern Headboard Upholstery - Downtown Dubai
              </p>
            </motion.div>
          </div>
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
              >
                Book Free Assessment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:border-primary hover:text-primary transition-smooth px-8 py-6"
              >
                Call +971 50 464 9831
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Upholstery;