import PageLayout from "@/components/PageLayout";
import ProductDetail from "@/components/ProductDetail";
import SEO from "@/components/SEO";
import romanImage from "@/assets/blind-roman.jpg";

const RomanBlinds = () => {
  return (
    <PageLayout>
      <SEO
        title="Roman Blinds Dubai - Elegant Fabric Window Blinds"
        description="Classic roman blinds with soft fabric folds. Add warmth and sophistication to your Dubai home with custom roman blinds."
        canonical="/products/roman-blinds"
        keywords="roman blinds dubai, fabric blinds dubai, elegant blinds, luxury blinds dubai, traditional blinds"
      />
      <ProductDetail
        name="Roman Blinds"
        category="Elegant Blinds"
        description="Classic elegance with soft fabric folds. Adds warmth and sophistication to any space."
        longDescription="Roman blinds combine the functionality of blinds with the softness of curtains, creating elegant horizontal folds when raised. These timeless window treatments add texture, warmth, and visual interest to any room while providing excellent light control and privacy. Available in a vast array of fabrics, from sheer to blackout."
        images={[romanImage, romanImage]}
        priceRange="AED 100 - 250/m²"
        features={[
          {
            title: "Elegant Fabric Folds",
            description: "Graceful horizontal pleats create beautiful cascading folds that add depth and texture to your windows.",
          },
          {
            title: "Soft Light Filtering",
            description: "Fabric layers provide gentle light diffusion while maintaining privacy and creating a warm ambiance.",
          },
          {
            title: "Fully Customizable",
            description: "Choose from thousands of fabric options, patterns, and fold styles to match your unique interior design.",
          },
          {
            title: "Traditional Appeal",
            description: "Timeless design complements both classic and contemporary interiors with sophisticated charm.",
          },
        ]}
        benefits={[
          "Perfect for living rooms and bedrooms",
          "Adds luxury and warmth to any space",
          "Available in wide range of fabrics and patterns",
          "Excellent insulation properties",
          "Can be lined for enhanced light control",
          "Coordinates beautifully with other window treatments",
        ]}
        specifications={[
          { label: "Material", value: "Premium fabric" },
          { label: "Fold Style", value: "Flat, hobbled, or relaxed" },
          { label: "Control", value: "Cord or chain" },
          { label: "Width Range", value: "40-250 cm" },
          { label: "Drop Range", value: "40-250 cm" },
          { label: "Lining Options", value: "Unlined, thermal, blackout" },
          { label: "Installation", value: "Professional included" },
          { label: "Warranty", value: "3 years" },
        ]}
        fabrics={[
          "Linen Blend",
          "Cotton Blend",
          "Velvet",
          "Silk",
          "Jacquard",
          "Printed",
        ]}
        colors={[
          "Natural",
          "White",
          "Cream",
          "Gray",
          "Navy",
          "Burgundy",
          "Custom",
        ]}
      />
    </PageLayout>
  );
};

export default RomanBlinds;
