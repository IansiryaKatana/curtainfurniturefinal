import { motion } from "framer-motion";
import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import PageLayout from "@/components/PageLayout";
import SEO from "@/components/SEO";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { data: galleryItems } = useQuery({
    queryKey: ["gallery"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("gallery_images")
        .select("*")
        .eq("is_active", true)
        .order("display_order", { ascending: true });
      if (error) throw error;
      return data;
    },
  });

  const categories = useMemo(() => {
    if (!galleryItems) return ["All"];
    const uniqueCategories = new Set(galleryItems.map(item => item.category));
    const uniqueRooms = new Set(galleryItems.map(item => item.room_type).filter(Boolean));
    return ["All", ...Array.from(uniqueCategories), ...Array.from(uniqueRooms)];
  }, [galleryItems]);

  const filteredItems = useMemo(() => {
    if (!galleryItems) return [];
    if (selectedCategory === "All") return galleryItems;
    return galleryItems.filter(item => 
      item.category === selectedCategory || item.room_type === selectedCategory
    );
  }, [galleryItems, selectedCategory]);

  return (
    <PageLayout>
      <SEO
        title="Gallery - VIP Curtains & Furniture Portfolio Dubai"
        description="Browse our portfolio of custom curtains, blinds, and upholstery projects in Dubai. See real installations in homes and offices across the UAE."
        canonical="/gallery"
        keywords="curtains gallery dubai, blinds portfolio dubai, upholstery before after, interior design dubai, dragon mart curtains gallery"
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
            <h1 className="text-foreground mb-6">Our Portfolio</h1>
            <p className="text-muted-foreground text-base md:text-base">
              Explore our collection of custom curtains, blinds, and upholstery projects. 
              Each installation showcases our commitment to quality and attention to detail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-smooth"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems?.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-luxury transition-smooth"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-sm text-primary font-medium mb-2">
                      {item.category} {item.room_type && `• ${item.room_type}`}
                    </p>
                    <h3 className="text-2xl font-serif font-medium text-foreground">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-foreground mb-6">Ready to Transform Your Space?</h2>
            <p className="text-muted-foreground text-base mb-8">
              Book a free consultation and let our experts help you choose the perfect window treatments.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Book Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Gallery;
