import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const { data: testimonials = [], isLoading } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .eq("is_active", true)
        .order("display_order", { ascending: true });
      
      if (error) throw error;
      return data as Testimonial[];
    },
  });

  useEffect(() => {
    if (testimonials.length === 0) return;
    
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, testimonials.length]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  if (isLoading) {
    return (
      <section className="py-16 md:py-24 lg:py-32 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-muted-foreground">Loading testimonials...</p>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 bg-primary/5 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-5 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-foreground mb-3 sm:mb-3.5 md:mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            Trusted by hundreds of satisfied customers across Dubai
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "tween", duration: 0.5, ease: "easeInOut" },
                opacity: { duration: 0.5 },
              }}
              className="bg-card rounded-xl sm:rounded-2xl shadow-luxury p-6 sm:p-7 md:p-8 lg:p-10 xl:p-12 border border-border/50"
            >
              <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-accent/30 mb-4 sm:mb-5 md:mb-6" />
              
              <div className="flex gap-0.5 sm:gap-1 mb-4 sm:mb-5 md:mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-card-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-7 md:mb-8 font-light italic">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="border-t border-border/50 pt-4 sm:pt-5 md:pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-card-foreground text-base sm:text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      {testimonials[currentIndex].location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5 sm:mb-1">
                      Service
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-primary">
                      {testimonials[currentIndex].service}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-7 md:mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="rounded-full border-border hover:border-primary hover:text-primary h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10"
            >
              <ChevronLeft className="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5" />
            </Button>

            <div className="flex gap-1.5 sm:gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-1.5 sm:h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-6 sm:w-8 bg-primary"
                      : "w-1.5 sm:w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full border-border hover:border-primary hover:text-primary h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10"
            >
              <ChevronRight className="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;