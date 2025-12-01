import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Calculator, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import SuccessDialog from "@/components/SuccessDialog";

const Quote = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    project_type: [] as string[],
    product_type: "",
    room_type: "",
    num_windows: "",
    width: "",
    height: "",
    budget_range: "",
    additional_details: "",
    preferred_contact_time: "",
  });

  const handleCheckboxChange = (value: string, checked: boolean) => {
    setFormData({
      ...formData,
      project_type: checked
        ? [...formData.project_type, value]
        : formData.project_type.filter((item) => item !== value),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("submit-quote", {
        body: {
          ...formData,
          num_windows: formData.num_windows ? parseInt(formData.num_windows) : undefined,
          width: formData.width ? parseFloat(formData.width) : undefined,
          height: formData.height ? parseFloat(formData.height) : undefined,
        },
      });

      if (error) throw error;

      setShowSuccess(true);

      setFormData({
        name: "",
        phone: "",
        email: "",
        location: "",
        project_type: [],
        product_type: "",
        room_type: "",
        num_windows: "",
        width: "",
        height: "",
        budget_range: "",
        additional_details: "",
        preferred_contact_time: "",
      });
    } catch (error: any) {
      console.error("Quote error:", error);
      toast({
        title: "Error",
        description: "Failed to submit quote request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SuccessDialog
        open={showSuccess}
        onOpenChange={setShowSuccess}
        title="Quote Request Received!"
        description="Thank you! We'll review your request and contact you within 2 hours with a detailed quote."
      />
      <PageLayout>
        <SEO
        title="Get Free Quote - Custom Curtains & Blinds Dubai | VIP Curtains"
        description="Request a free quote for custom curtains, blinds, or upholstery in Dubai. Fast response within 2 hours. Free home measurement and consultation."
        canonical="/quote"
        keywords="free quote curtains dubai, blinds quote dubai, custom curtains price, upholstery quote dubai, free consultation dubai"
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-foreground mb-6">Get Your Free Quote</h1>
            <p className="text-muted-foreground text-base md:text-base">
              Tell us about your project and we'll provide a detailed quote within 2 hours. 
              Free home measurement and consultation included.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-background border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Free Home Visit", desc: "Professional measurement" },
              { title: "2-Hour Response", desc: "Fast quote delivery" },
              { title: "No Obligation", desc: "Zero pressure sales" },
              { title: "Best Price Guarantee", desc: "Competitive pricing" },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-2xl font-medium text-foreground mb-1">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl p-8 md:p-12 shadow-luxury border border-border/50"
            >
              <div className="flex items-center gap-3 mb-8">
                <Calculator className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-serif font-medium text-card-foreground">
                  Project Details
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-card-foreground">Full Name *</Label>
                    <Input 
                      id="name" 
                      placeholder="John Smith" 
                      required 
                      className="mt-2"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-card-foreground">Phone Number *</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+971 50 123 4567" 
                      required 
                      className="mt-2"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-card-foreground">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      className="mt-2"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="location" className="text-card-foreground">Location in Dubai *</Label>
                    <Input 
                      id="location" 
                      placeholder="Dubai Marina" 
                      required 
                      className="mt-2"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <Label className="text-card-foreground mb-3 block">What are you interested in? *</Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {["Curtains", "Blinds", "Upholstery"].map((item) => (
                      <div key={item} className="flex items-center space-x-2">
                        <Checkbox 
                          id={item.toLowerCase()}
                          checked={formData.project_type.includes(item)}
                          onCheckedChange={(checked) => handleCheckboxChange(item, checked as boolean)}
                        />
                        <Label
                          htmlFor={item.toLowerCase()}
                          className="text-sm font-normal cursor-pointer text-card-foreground"
                        >
                          {item}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Product Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="product-type" className="text-card-foreground">Specific Product Type</Label>
                    <Select value={formData.product_type} onValueChange={(value) => setFormData({ ...formData, product_type: value })}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select product" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="blackout">Blackout Curtains</SelectItem>
                        <SelectItem value="sheer">Sheer Curtains</SelectItem>
                        <SelectItem value="motorized">Motorized Curtains</SelectItem>
                        <SelectItem value="roller">Roller Blinds</SelectItem>
                        <SelectItem value="roman">Roman Blinds</SelectItem>
                        <SelectItem value="zebra">Zebra Blinds</SelectItem>
                        <SelectItem value="upholstery">Custom Upholstery</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="room-type" className="text-card-foreground">Room Type</Label>
                    <Select value={formData.room_type} onValueChange={(value) => setFormData({ ...formData, room_type: value })}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select room" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="living">Living Room</SelectItem>
                        <SelectItem value="bedroom">Bedroom</SelectItem>
                        <SelectItem value="office">Office</SelectItem>
                        <SelectItem value="kitchen">Kitchen</SelectItem>
                        <SelectItem value="bathroom">Bathroom</SelectItem>
                        <SelectItem value="multiple">Multiple Rooms</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Measurements */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="windows" className="text-card-foreground">Number of Windows</Label>
                    <Input 
                      id="windows" 
                      type="number" 
                      placeholder="3" 
                      className="mt-2"
                      value={formData.num_windows}
                      onChange={(e) => setFormData({ ...formData, num_windows: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="width" className="text-card-foreground">Approx. Width (cm)</Label>
                    <Input 
                      id="width" 
                      type="number" 
                      placeholder="200" 
                      className="mt-2"
                      value={formData.width}
                      onChange={(e) => setFormData({ ...formData, width: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="height" className="text-card-foreground">Approx. Height (cm)</Label>
                    <Input 
                      id="height" 
                      type="number" 
                      placeholder="250" 
                      className="mt-2"
                      value={formData.height}
                      onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                    />
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <Label htmlFor="budget" className="text-card-foreground">Budget Range (AED)</Label>
                  <Select value={formData.budget_range} onValueChange={(value) => setFormData({ ...formData, budget_range: value })}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-1000">Under 1,000</SelectItem>
                      <SelectItem value="1000-3000">1,000 - 3,000</SelectItem>
                      <SelectItem value="3000-5000">3,000 - 5,000</SelectItem>
                      <SelectItem value="5000-10000">5,000 - 10,000</SelectItem>
                      <SelectItem value="over-10000">Over 10,000</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Additional Details */}
                <div>
                  <Label htmlFor="details" className="text-card-foreground">
                    Additional Details or Requirements
                  </Label>
                  <Textarea
                    id="details"
                    placeholder="Tell us more about your project, preferred colors, fabrics, installation timeline, etc."
                    rows={5}
                    className="mt-2"
                    value={formData.additional_details}
                    onChange={(e) => setFormData({ ...formData, additional_details: e.target.value })}
                  />
                </div>

                {/* Preferred Contact Time */}
                <div>
                  <Label htmlFor="contact-time" className="text-card-foreground">Preferred Contact Time</Label>
                  <Select value={formData.preferred_contact_time} onValueChange={(value) => setFormData({ ...formData, preferred_contact_time: value })}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="When should we contact you?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                      <SelectItem value="evening">Evening (4 PM - 8 PM)</SelectItem>
                      <SelectItem value="anytime">Anytime</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {isSubmitting ? "Sending..." : "Get Free Quote"}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to be contacted by VIP Curtains & Furniture. 
                  We respect your privacy and will never share your information.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      </PageLayout>
    </>
  );
};

export default Quote;
