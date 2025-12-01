import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  showAll?: boolean;
  limit?: number;
}

const FAQ = ({ showAll = true, limit = 5 }: FAQProps) => {
  const { data: faqs } = useQuery({
    queryKey: ["faqs"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("faqs")
        .select("*")
        .eq("is_active", true)
        .order("display_order", { ascending: true });
      if (error) throw error;
      return data;
    },
  });

  if (!faqs || faqs.length === 0) {
    return null;
  }

  const displayedFaqs = showAll ? faqs : faqs.slice(0, limit);

  return (
    <section className="py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-5 md:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-foreground mb-3 sm:mb-3.5 md:mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            Everything you need to know about our services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {displayedFaqs?.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                value={`item-${faq.id}`}
                className="bg-card border border-border/50 rounded-lg sm:rounded-xl px-4 sm:px-5 md:px-6 shadow-soft hover:shadow-medium transition-smooth"
              >
                <AccordionTrigger className="text-left font-medium text-sm sm:text-base text-card-foreground hover:text-primary py-4 sm:py-4.5 md:py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-xs sm:text-sm leading-relaxed pb-4 sm:pb-4.5 md:pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {!showAll && faqs.length > limit && (
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
                <Link to="/faq">
                  Explore More
                  <ArrowRight className="ml-1.5 sm:ml-2 h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;