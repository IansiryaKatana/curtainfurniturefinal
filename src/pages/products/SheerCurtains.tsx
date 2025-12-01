import PageLayout from "@/components/PageLayout";
import ProductDetail from "@/components/ProductDetail";
import SEO from "@/components/SEO";
import sheerImage from "@/assets/curtain-sheer.jpg";

const SheerCurtains = () => {
  return (
    <PageLayout>
      <SEO
        title="Sheer Curtains Dubai - Elegant Light Filtering | VIP Curtains"
        description="Beautiful sheer curtains that filter natural light while maintaining privacy. Perfect for creating bright, airy spaces in Dubai homes."
        canonical="/products/sheer-curtains"
        keywords="sheer curtains dubai, voile curtains dubai, light filtering curtains, living room curtains dubai, elegant curtains"
      />
      <ProductDetail
        name="Sheer Curtains"
        category="Premium Curtains"
        description="Elegant, flowing fabric that filters natural light while maintaining privacy during the day."
        longDescription="Our sheer curtains add a touch of elegance and sophistication to any space while gently filtering natural light. Made from high-quality voile and organza fabrics, they create a soft, ethereal ambiance that enhances your interior while providing daytime privacy and UV protection."
        images={[sheerImage, sheerImage]}
        priceRange="AED 80 - 180/m²"
        features={[
          {
            title: "Soft Light Diffusion",
            description: "Delicate fabric weave filters harsh sunlight, creating a warm, inviting glow that illuminates your space naturally.",
          },
          {
            title: "Daytime Privacy",
            description: "Semi-transparent design maintains privacy during daylight hours while allowing you to enjoy outdoor views.",
          },
          {
            title: "Airy & Elegant",
            description: "Lightweight, flowing fabric adds movement and grace, creating an open, spacious feel in any room.",
          },
          {
            title: "UV Protection",
            description: "Blocks up to 60% of harmful UV rays, protecting your furniture and flooring from sun damage.",
          },
        ]}
        benefits={[
          "Creates bright, welcoming atmosphere",
          "Perfect for layering with blackout curtains",
          "Enhances natural light without glare",
          "Adds softness and elegance to interiors",
          "Available in various textures and patterns",
          "Easy to clean and maintain",
        ]}
        specifications={[
          { label: "Material", value: "High-grade voile/organza" },
          { label: "Light Filtering", value: "40-60%" },
          { label: "UV Blocking", value: "Up to 60%" },
          { label: "Privacy", value: "Daytime only" },
          { label: "Cleaning", value: "Gentle machine wash" },
          { label: "Installation", value: "Professional included" },
          { label: "Warranty", value: "2 years" },
          { label: "Turnaround", value: "48-72 hours" },
        ]}
        fabrics={[
          "Classic Voile",
          "Linen-Look Sheer",
          "Embroidered Sheer",
          "Textured Organza",
          "Metallic Thread Sheer",
        ]}
        colors={[
          "Pure White",
          "Ivory",
          "Champagne",
          "Light Gray",
          "Soft Pink",
          "Sky Blue",
          "Mint Green",
        ]}
      />
    </PageLayout>
  );
};

export default SheerCurtains;
