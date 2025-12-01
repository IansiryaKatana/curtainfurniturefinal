import PageLayout from "@/components/PageLayout";
import ProductDetail from "@/components/ProductDetail";
import SEO from "@/components/SEO";
import blindImage from "@/assets/blind-roller.jpg";

const VenetianBlinds = () => {
  return (
    <PageLayout>
      <SEO
        title="Venetian Blinds Dubai - Classic Horizontal Slat Blinds"
        description="Premium venetian blinds in wood, faux wood, and aluminum. Precise light control and timeless style for Dubai homes and offices."
        canonical="/products/venetian-blinds"
        keywords="venetian blinds dubai, wooden blinds dubai, aluminum blinds dubai, horizontal blinds, office blinds dubai"
      />
      <ProductDetail
        name="Venetian Blinds"
        category="Classic Blinds"
        description="Timeless horizontal slat design with precise light control. Available in wood, faux wood, and aluminum."
        longDescription="Venetian blinds offer the perfect balance of style, functionality, and durability. With adjustable horizontal slats, you can fine-tune natural light levels throughout the day while maintaining privacy. Available in premium wood, moisture-resistant faux wood, and sleek aluminum finishes to complement any interior design style."
        images={[blindImage, blindImage]}
        priceRange="AED 80 - 220/m²"
        features={[
          {
            title: "Precise Light Control",
            description: "Adjustable slats allow you to direct light exactly where you want it, from bright to completely closed.",
          },
          {
            title: "Material Options",
            description: "Choose from natural wood for warmth, faux wood for moisture areas, or aluminum for modern spaces.",
          },
          {
            title: "Classic Aesthetic",
            description: "Timeless horizontal design complements both traditional and contemporary interior styles.",
          },
          {
            title: "Easy Operation",
            description: "Smooth tilt mechanism and lift system provide effortless daily use for years to come.",
          },
        ]}
        benefits={[
          "Perfect for offices and professional spaces",
          "Ideal for kitchens and bathrooms (faux wood)",
          "Enhances natural wood interiors (real wood)",
          "Low maintenance and easy to clean",
          "Excellent privacy with light filtering",
          "Durable construction for long-term use",
        ]}
        specifications={[
          { label: "Material Options", value: "Wood, faux wood, aluminum" },
          { label: "Slat Width", value: "25mm, 35mm, 50mm" },
          { label: "Control", value: "Cord, wand, or motorized" },
          { label: "Width Range", value: "40-300 cm" },
          { label: "Drop Range", value: "40-300 cm" },
          { label: "Cleaning", value: "Dust or wipe clean" },
          { label: "Installation", value: "Professional included" },
          { label: "Warranty", value: "3-5 years" },
        ]}
        fabrics={[
          "Real Wood",
          "Faux Wood",
          "Aluminum",
          "Bamboo",
          "Premium Wood Stained",
        ]}
        colors={[
          "Natural Oak",
          "Walnut",
          "White",
          "Gray",
          "Black",
          "Silver",
          "Custom Stain",
        ]}
      />
    </PageLayout>
  );
};

export default VenetianBlinds;
