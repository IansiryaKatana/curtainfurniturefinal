import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import sofaImage from "@/assets/upholstery-sofa.jpg";

const UpholsterySection = () => {
  return (
    <section id="upholstery" className="py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-5 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 md:gap-8 lg:gap-10 xl:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-luxury">
              <img
                src={sofaImage}
                alt="Custom upholstery services"
                className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[500px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-foreground mb-4 sm:mb-5 md:mb-6">Custom Upholstery Services</h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
              Transform your furniture with our expert upholstery services. From sofas and headboards to dining chairs and cushions, we breathe new life into your favorite pieces.
            </p>
            
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-7 md:mb-8">
              <div className="flex items-start gap-2.5 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent mt-2 sm:mt-2.5" />
                <div>
                  <h4 className="font-medium text-foreground text-sm sm:text-base mb-0.5 sm:mb-1">Sofa Reupholstery</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">Complete transformation with premium fabrics</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent mt-2 sm:mt-2.5" />
                <div>
                  <h4 className="font-medium text-foreground text-sm sm:text-base mb-0.5 sm:mb-1">Custom Headboards</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">Bespoke designs tailored to your bedroom</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent mt-2 sm:mt-2.5" />
                <div>
                  <h4 className="font-medium text-foreground text-sm sm:text-base mb-0.5 sm:mb-1">Decorative Cushions</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">Add personality with custom-made cushions</p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium text-sm sm:text-base px-6 sm:px-7 md:px-8 py-4 sm:py-5 md:py-6 shadow-luxury transition-smooth group"
            >
              View Upholstery Gallery
              <ArrowRight className="ml-1.5 sm:ml-2 h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UpholsterySection;