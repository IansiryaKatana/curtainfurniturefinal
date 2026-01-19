import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [itemsToShow, setItemsToShow] = useState(16); // 4 rows × 4 items = 16

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
    const uniqueRooms = new Set(galleryItems.map(item => item.room_type).filter(Boolean));
    return ["All", ...Array.from(uniqueRooms)];
  }, [galleryItems]);

  const filteredItems = useMemo(() => {
    if (!galleryItems) return [];
    if (selectedCategory === "All") return galleryItems;
    return galleryItems.filter(item => item.room_type === selectedCategory);
  }, [galleryItems, selectedCategory]);

  const displayedItems = useMemo(() => {
    return filteredItems.slice(0, itemsToShow);
  }, [filteredItems, itemsToShow]);

  const hasMoreItems = filteredItems.length > itemsToShow;

  const handleLoadMore = () => {
    setItemsToShow(prev => prev + 4); // Load one more row (4 items)
  };

  // Reset items to show when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setItemsToShow(16); // Reset to initial 4 rows
  };

  if (!galleryItems || galleryItems.length === 0) {
    return null;
  }

  return (
    <section id="gallery" className="py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-5 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-foreground mb-3 sm:mb-3.5 md:mb-4">Our Portfolio</h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            Explore our completed projects across Dubai
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-2.5 md:gap-3 mb-8 sm:mb-10 md:mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => handleCategoryChange(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={selectedCategory === category 
                ? "bg-primary text-primary-foreground" 
                : "border-border hover:border-primary hover:text-primary"}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6"
        >
          <AnimatePresence>
            {displayedItems?.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-soft hover:shadow-luxury transition-smooth">
                  <div className="aspect-square">
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-background transform translate-y-full group-hover:translate-y-0 transition-smooth">
                    <p className="text-xs font-medium text-accent mb-0.5 sm:mb-1">{item.category}</p>
                    <h4 className="text-base sm:text-lg font-serif font-medium">{item.title}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {hasMoreItems && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mt-8 sm:mt-10 md:mt-12"
          >
            <Button
              onClick={handleLoadMore}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 shadow-luxury transition-smooth"
            >
              Load More
            </Button>
          </motion.div>
        )}

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-foreground/95 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 bg-background/10 border-background/20 text-background hover:bg-background hover:text-foreground"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-5 w-5" />
              </Button>
              
              <motion.img
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                src={galleryItems?.find(item => item.id === selectedImage)?.image_url}
                alt="Gallery preview"
                className="max-w-full max-h-[90vh] rounded-xl shadow-luxury"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;