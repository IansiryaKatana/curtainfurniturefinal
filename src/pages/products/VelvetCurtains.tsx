import PageLayout from "@/components/PageLayout";
import ProductDetail from "@/components/ProductDetail";
import SEO from "@/components/SEO";
import blackoutImage from "@/assets/curtain-blackout.jpg";

const VelvetCurtains = () => {
  return (
    <PageLayout>
      <SEO
        title="Luxury Velvet Curtains Dubai - Premium Heavy Drapes"
        description="Opulent velvet curtains for elegant interiors in Dubai. Rich textures, superior insulation, and timeless luxury. Free measurement and installation."
        canonical="/products/velvet-curtains"
        keywords="velvet curtains dubai, luxury curtains dubai, heavy drapes dubai, premium curtains, elegant curtains dubai"
      />
      <ProductDetail
        name="Luxury Velvet Curtains"
        category="Premium Curtains"
        description="Opulent velvet fabric that adds rich texture, warmth, and timeless elegance to any space."
        longDescription="Our luxury velvet curtains bring unmatched sophistication and comfort to your interiors. The plush, dense pile of velvet not only looks stunning but also provides excellent thermal and acoustic insulation. Perfect for creating a sumptuous, hotel-like ambiance in bedrooms, living rooms, and home theaters."
        images={[blackoutImage, blackoutImage]}
        priceRange="AED 150 - 350/m²"
        features={[
          {
            title: "Rich Luxurious Texture",
            description: "Soft, dense velvet pile creates depth and visual richness that catches light beautifully from every angle.",
          },
          {
            title: "Superior Insulation",
            description: "Heavy fabric provides excellent thermal and acoustic properties, reducing energy costs and outside noise.",
          },
          {
            title: "Elegant Drape",
            description: "Natural weight and fluidity create beautiful folds and graceful movement for a high-end look.",
          },
          {
            title: "Durable Quality",
            description: "Premium velvet construction resists crushing and maintains its luxurious appearance for years.",
          },
        ]}
        benefits={[
          "Perfect for luxury hotels and high-end residences",
          "Creates warm, inviting atmosphere",
          "Available in jewel tones and classic neutrals",
          "Excellent light blocking when lined",
          "Sound absorption for quieter spaces",
          "Makes a bold design statement",
        ]}
        specifications={[
          { label: "Material", value: "Premium velvet" },
          { label: "Weight", value: "Heavy (400-600 gsm)" },
          { label: "Light Blocking", value: "Good (80-90% with lining)" },
          { label: "Cleaning", value: "Professional dry clean" },
          { label: "Lining Options", value: "Cotton, blackout, thermal" },
          { label: "Installation", value: "Professional included" },
          { label: "Warranty", value: "3 years" },
          { label: "Turnaround", value: "5-7 days" },
        ]}
        fabrics={[
          "Cotton Velvet",
          "Silk Velvet",
          "Crushed Velvet",
          "Performance Velvet",
          "Embossed Velvet",
        ]}
        colors={[
          "Deep Navy",
          "Emerald Green",
          "Burgundy",
          "Charcoal Gray",
          "Royal Blue",
          "Champagne Gold",
          "Custom",
        ]}
      />
    </PageLayout>
  );
};

export default VelvetCurtains;
