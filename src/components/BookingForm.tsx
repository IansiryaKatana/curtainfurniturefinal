import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import SuccessDialog from "./SuccessDialog";

interface BookingFormProps {
  compact?: boolean;
}

const BookingForm = ({ compact = false }: BookingFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    service: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("submit-booking", {
        body: {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          location: formData.location,
          preferred_date: "As soon as possible",
          preferred_time: "Anytime",
          message: `Service: ${formData.service}. ${formData.message}`,
        },
      });

      if (error) throw error;

      setShowSuccess(true);

      setFormData({
        name: "",
        phone: "",
        email: "",
        location: "",
        service: "",
        message: "",
      });
    } catch (error: any) {
      console.error("Booking error:", error);
      toast({
        title: "Error",
        description: "Failed to submit booking. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const message = `Hi! I'd like to schedule a free home visit for ${formData.service || "curtains/blinds"}`;
    window.open(`https://wa.me/971504649831?text=${encodeURIComponent(message)}`, "_blank");
  };

  const formContent = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={compact ? "" : "bg-card rounded-2xl shadow-luxury p-6 md:p-8 lg:p-12 border border-border/50"}
    >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Full Name *
                </label>
                <Input
                  placeholder="John Doe"
                  className="bg-background border-border"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Mobile Number *
                </label>
                <Input
                  type="tel"
                  placeholder="+971 50 000 0000"
                  className="bg-background border-border"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-card-foreground mb-2">
                Email Address
              </label>
              <Input
                type="email"
                placeholder="john@example.com"
                className="bg-background border-border"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-card-foreground mb-2">
                <MapPin className="inline w-4 h-4 mr-1" />
                Area / Community *
              </label>
              <Input
                placeholder="e.g., Dubai Marina, Downtown Dubai"
                className="bg-background border-border"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-card-foreground mb-2">
                What Do You Need? *
              </label>
              <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })} required>
                <SelectTrigger className="bg-background border-border">
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="curtains">Curtains</SelectItem>
                  <SelectItem value="blinds">Blinds</SelectItem>
                  <SelectItem value="upholstery">Upholstery</SelectItem>
                  <SelectItem value="multiple">Multiple Services</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-card-foreground mb-2">
                <MessageCircle className="inline w-4 h-4 mr-1" />
                Additional Notes (Optional)
              </label>
              <Textarea
                placeholder="Tell us about your project, room dimensions, or any specific requirements..."
                className="bg-background border-border min-h-[120px]"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                type="submit"
                size="lg"
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-6 shadow-luxury transition-smooth"
                disabled={isSubmitting}
              >
                <Calendar className="mr-2 h-5 w-5" />
                {isSubmitting ? "Submitting..." : "Schedule Free Visit"}
              </Button>

              <Button
                type="button"
                size="lg"
                className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-medium py-6 shadow-luxury transition-smooth"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Instead
              </Button>
            </div>

            <p className="text-muted-foreground text-sm text-center">
              By submitting, you agree to receive a call from our team within 24 hours
            </p>
          </form>
        </motion.div>
  );

  if (compact) {
    return formContent;
  }

  return (
    <>
      <SuccessDialog
        open={showSuccess}
        onOpenChange={setShowSuccess}
        title="Booking Confirmed!"
        description="Thank you for booking! We'll contact you within 24 hours to schedule your free home visit."
      />
      <section id="contact" className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          {formContent}
        </div>
      </section>
    </>
  );
};

export default BookingForm;