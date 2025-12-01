import { motion } from "framer-motion";
import { Home, Sparkles, Zap, TrendingDown } from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Free Home Visit & Measurement",
    description: "Our experts visit your space for accurate measurements and personalized consultation—completely free.",
  },
  {
    icon: Sparkles,
    title: "3000+ Premium Fabrics",
    description: "Choose from an extensive collection of luxury fabrics in every style, texture, and color.",
  },
  {
    icon: Zap,
    title: "Fast Delivery & Installation",
    description: "Professional installation within 48–72 hours from our Dragon Mart location.",
  },
  {
    icon: TrendingDown,
    title: "Best Prices in Dragon Mart",
    description: "Premium quality at competitive prices. Luxury doesn't have to break the bank.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-5 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16"
        >
          <h2 className="text-foreground mb-3 sm:mb-3.5 md:mb-4">Why Choose VIP Curtains & Furniture</h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            Your trusted partner for premium window treatments and upholstery in Dubai
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 shadow-soft hover:shadow-luxury transition-smooth border border-border/50 h-full">
                <div className="bg-primary/10 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-smooth">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-medium text-card-foreground mb-2 sm:mb-2.5 md:mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;