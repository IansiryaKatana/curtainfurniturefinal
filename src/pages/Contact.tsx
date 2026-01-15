import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import SuccessDialog from "@/components/SuccessDialog";
import Map from "@/components/Map";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("submit-contact", {
        body: formData,
      });

      if (error) throw error;

      setShowSuccess(true);

      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error: any) {
      console.error("Contact error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const message = "Hi! I'd like to get in touch regarding curtains and blinds";
    window.open(`https://wa.me/971504649831?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      <SuccessDialog
        open={showSuccess}
        onOpenChange={setShowSuccess}
        title="Message Sent!"
        description="Thank you for reaching out! We'll get back to you as soon as possible."
      />
      <PageLayout>
        <SEO
        title="Contact Us - Dragon Mart Dubai | Free Home Consultation"
        description="Visit our showroom in Dragon Mart or reach out for a free home consultation. Call +971 50 464 9831 or send us a message to transform your space."
        canonical="/contact"
        keywords="vip curtains contact, dragon mart curtains, curtains consultation dubai, blinds consultation dubai"
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
            <h1 className="text-foreground mb-6">Get in Touch</h1>
            <p className="text-muted-foreground text-base leading-relaxed">
              Visit our showroom in Dragon Mart or reach out for a free home consultation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <h2 className="text-foreground mb-6">Visit Us</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Our Location</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Dragon Mart<br />
                      International City<br />
                      Dubai, UAE
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Call Us</h4>
                    <a href="tel:+971504649831" className="text-muted-foreground hover:text-primary transition-smooth">
                      +971 50 464 9831
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Email Us</h4>
                    <Button
                      variant="link"
                      className="text-muted-foreground hover:text-primary transition-smooth p-0 h-auto font-normal"
                      onClick={() => {
                        const formElement = document.querySelector('form');
                        if (formElement) {
                          formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                          setTimeout(() => {
                            const nameInput = formElement.querySelector('input[type="text"]') as HTMLInputElement;
                            if (nameInput) nameInput.focus();
                          }, 500);
                        }
                      }}
                    >
                      Send us an email
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Opening Hours</h4>
                    <div className="text-muted-foreground">
                      <p>Sat - Thu: 10 AM - 10 PM</p>
                      <p>Friday: 2 PM - 10 PM</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <h4 className="font-medium text-foreground mb-4">Follow Us</h4>
                  <div className="flex gap-3">
                    <a href="#" className="w-12 h-12 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-smooth">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-smooth">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full flex items-center justify-center transition-smooth">
                      <MessageCircle className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-card rounded-2xl shadow-luxury p-8 md:p-12 border border-border/50">
                <h2 className="text-card-foreground mb-6">Send Us a Message</h2>
                
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
                      Service Required *
                    </label>
                    <Select value={formData.subject} onValueChange={(value) => setFormData({ ...formData, subject: value })} required>
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="curtains">Curtains</SelectItem>
                        <SelectItem value="blinds">Blinds</SelectItem>
                        <SelectItem value="upholstery">Upholstery</SelectItem>
                        <SelectItem value="consultation">General Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Your Message
                    </label>
                    <Textarea
                      placeholder="Tell us about your project..."
                      className="bg-background border-border min-h-[150px]"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-6 shadow-luxury transition-smooth"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>

                    <Button
                      type="button"
                      size="lg"
                      className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-medium py-6 shadow-luxury transition-smooth"
                      onClick={handleWhatsApp}
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp Us
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl overflow-hidden shadow-luxury border border-border/50 relative z-0"
          >
            <div className="aspect-video">
              <Map />
            </div>
          </motion.div>
        </div>
      </section>
      </PageLayout>
    </>
  );
};

export default Contact;