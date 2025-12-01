import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        size="lg"
        className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full w-14 h-14 md:w-16 md:h-16 shadow-luxury hover:shadow-2xl transition-smooth group"
        asChild
      >
        <a
          href="https://wa.me/971504649831"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
        </a>
      </Button>
      
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-[#25D366] rounded-full opacity-20 -z-10"
      />
    </motion.div>
  );
};

export default WhatsAppButton;