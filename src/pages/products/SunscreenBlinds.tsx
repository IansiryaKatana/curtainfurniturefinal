import PageLayout from "@/components/PageLayout";
import ProductDetail from "@/components/ProductDetail";
import SEO from "@/components/SEO";
import blindImage from "@/assets/blind-roller.jpg";

const SunscreenBlinds = () => {
  return (
    <PageLayout>
      <SEO
        title="Sunscreen Blinds Dubai - UV Protection Roller Blinds"
        description="Premium sunscreen roller blinds for Dubai. Block 95% UV rays while maintaining views. Energy efficient and fade resistant. Free installation."
        canonical="/products/sunscreen-blinds"
        keywords="sunscreen blinds dubai, uv protection blinds dubai, solar blinds dubai, heat blocking blinds, energy efficient blinds dubai"
      />
      <ProductDetail
        name="Sunscreen Roller Blinds"
        category="Performance Blinds"
        description="Advanced fabric technology blocks UV rays and heat while maintaining your view and natural light."
        longDescription="Sunscreen roller blinds feature innovative solar fabric technology designed specifically for Dubai's harsh climate. They block up to 95% of harmful UV rays and significantly reduce heat gain, making them an energy-efficient choice that protects your interiors while preserving your outdoor views and allowing filtered natural light."
        images={[blindImage, blindImage]}
        priceRange="AED 90 - 220/m²"
        features={[
          {
            title: "95% UV Protection",
            description: "Advanced solar fabric blocks harmful UV rays, protecting your furniture, flooring, and artwork from fading.",
          },
          {
            title: "Heat Reduction",
            description: "Reflects solar heat away from windows, reducing cooling costs by up to 30% in Dubai summers.",
          },
          {
            title: "Maintains Views",
            description: "See-through fabric allows you to enjoy outdoor views without sacrificing sun protection during the day.",
          },
          {
            title: "Glare Control",
            description: "Reduces screen glare on TVs and computers while maintaining a bright, comfortable interior.",
          },
        ]}
        benefits={[
          "Ideal for offices with computer screens",
          "Perfect for living rooms with outdoor views",
          "Protects expensive furniture and flooring",
          "Reduces energy bills significantly",
          "Available in various openness factors (1%, 3%, 5%, 10%)",
          "Low maintenance and easy to clean",
        ]}
        specifications={[
          { label: "Material", value: "Fiberglass or polyester mesh" },
          { label: "UV Blocking", value: "Up to 95%" },
          { label: "Heat Reduction", value: "Up to 30%" },
          { label: "Openness Factor", value: "1%, 3%, 5%, 10%" },
          { label: "Control", value: "Chain, spring, or motorized" },
          { label: "Width Range", value: "40-350 cm" },
          { label: "Cleaning", value: "Wipe clean" },
          { label: "Warranty", value: "5 years" },
        ]}
        fabrics={[
          "1% Openness (Maximum privacy)",
          "3% Openness (Balanced)",
          "5% Openness (Good views)",
          "10% Openness (Maximum views)",
          "Dual Layer (Sunscreen + Blackout)",
        ]}
        colors={[
          "Charcoal",
          "Gray",
          "White",
          "Beige",
          "Black",
          "Bronze",
          "Custom",
        ]}
      />
    </PageLayout>
  );
};

export default SunscreenBlinds;
