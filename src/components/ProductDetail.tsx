import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Calculator } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Feature {
  title: string;
  description: string;
}

interface ProductDetailProps {
  name: string;
  category: string;
  description: string;
  longDescription: string;
  images: string[];
  features: Feature[];
  benefits: string[];
  specifications: { label: string; value: string }[];
  fabrics?: string[];
  colors?: string[];
  priceRange: string;
}

const ProductDetail = ({
  name,
  category,
  description,
  longDescription,
  images,
  features,
  benefits,
  specifications,
  fabrics,
  colors,
  priceRange,
}: ProductDetailProps) => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [selectedFabric, setSelectedFabric] = useState("");
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  const calculatePrice = () => {
    if (width && height) {
      const area = (parseFloat(width) * parseFloat(height)) / 10000; // Convert cm² to m²
      const basePrice = area * 150; // Base price per m²
      setEstimatedPrice(Math.round(basePrice));
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="mb-4">
              <span className="text-primary font-medium">{category}</span>
            </div>
            <h1 className="text-foreground mb-6">{name}</h1>
            <p className="text-muted-foreground text-base leading-relaxed max-w-3xl">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-4">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="relative rounded-2xl overflow-hidden shadow-luxury"
                  >
                    <img
                      src={image}
                      alt={`${name} - ${index + 1}`}
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Price */}
              <div className="bg-primary/5 rounded-2xl p-6">
                <p className="text-sm text-muted-foreground mb-2">Starting from</p>
                <p className="text-2xl font-serif font-bold text-foreground">
                  {priceRange}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  *Final price depends on size, fabric, and installation
                </p>
              </div>

              {/* About */}
              <div>
                <h3 className="text-2xl font-serif font-medium text-foreground mb-4">
                  About This Product
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {longDescription}
                </p>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-2xl font-serif font-medium text-foreground mb-4">
                  Key Benefits
                </h3>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-luxury transition-smooth group"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  Book Consultation
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-foreground mb-4">Features & Specifications</h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-soft border border-border/50"
                >
                  <h4 className="text-xl font-serif font-medium text-card-foreground mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Specifications Table */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl p-8 shadow-soft border border-border/50"
            >
              <h3 className="text-2xl font-serif font-medium text-card-foreground mb-6">
                Technical Specifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="flex justify-between py-3 border-b border-border/50"
                  >
                    <span className="text-muted-foreground">{spec.label}</span>
                    <span className="font-medium text-card-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl p-8 md:p-12 shadow-luxury border border-border/50"
            >
              <div className="flex items-center gap-3 mb-6">
                <Calculator className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-serif font-medium text-card-foreground">
                  Quick Price Estimate
                </h3>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="width" className="text-card-foreground">
                      Width (cm)
                    </Label>
                    <Input
                      id="width"
                      type="number"
                      placeholder="200"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="height" className="text-card-foreground">
                      Height (cm)
                    </Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="250"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="mt-2"
                    />
                  </div>
                </div>

                {fabrics && (
                  <div>
                    <Label htmlFor="fabric" className="text-card-foreground">
                      Fabric Type
                    </Label>
                    <Select value={selectedFabric} onValueChange={setSelectedFabric}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select fabric" />
                      </SelectTrigger>
                      <SelectContent>
                        {fabrics.map((fabric) => (
                          <SelectItem key={fabric} value={fabric}>
                            {fabric}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <Button
                  onClick={calculatePrice}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  Calculate Estimate
                </Button>

                {estimatedPrice && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-primary/5 rounded-xl p-6 text-center"
                  >
                    <p className="text-sm text-muted-foreground mb-2">
                      Estimated Price
                    </p>
                    <p className="text-4xl font-serif font-bold text-foreground">
                      AED {estimatedPrice}
                    </p>
                    <p className="text-sm text-muted-foreground mt-3">
                      This is an approximate estimate. Book a free consultation for
                      accurate pricing.
                    </p>
                  </motion.div>
                )}

                <p className="text-sm text-muted-foreground text-center">
                  *Prices are indicative and may vary based on fabric choice, installation complexity, and customization.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
