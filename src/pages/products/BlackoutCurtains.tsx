import PageLayout from "@/components/PageLayout";
import ProductDetail from "@/components/ProductDetail";
import SEO from "@/components/SEO";
import blackoutImage from "@/assets/curtain-blackout.jpg";

const BlackoutCurtains = () => {
  return (
    <PageLayout>
      <SEO
        title="Blackout Curtains Dubai - 100% Light Blocking | VIP Curtains"
        description="Premium blackout curtains for complete darkness and privacy in Dubai. Energy efficient, noise reduction, thermal insulation. Free consultation and installation."
        canonical="/products/blackout-curtains"
        keywords="blackout curtains dubai, room darkening curtains, thermal curtains dubai, bedroom curtains dubai, energy efficient curtains"
      />
      <ProductDetail
        name="Blackout Curtains"
        category="Premium Curtains"
        description="Complete darkness and privacy with superior thermal insulation. Perfect for bedrooms and media rooms."
        longDescription="Our blackout curtains are engineered with multiple layers of light-blocking fabric that ensures 100% darkness, making them ideal for bedrooms, home theaters, and spaces where light control is essential. They also provide excellent thermal insulation, helping to reduce energy costs by keeping rooms cooler in summer and warmer in winter."
        images={[blackoutImage, blackoutImage]}
        priceRange="AED 120 - 300/m²"
        features={[
          {
            title: "100% Light Blocking",
            description: "Multi-layered fabric technology blocks out 100% of external light, creating perfect darkness for better sleep and viewing experiences.",
          },
          {
            title: "Energy Efficient",
            description: "Superior thermal insulation reduces heat transfer, lowering cooling costs by up to 25% and maintaining comfortable room temperature.",
          },
          {
            title: "Noise Reduction",
            description: "Dense fabric construction absorbs sound waves, reducing external noise by up to 50% for a quieter living environment.",
          },
          {
            title: "Privacy Protection",
            description: "Complete opacity ensures total privacy day and night, perfect for ground-floor rooms and street-facing windows.",
          },
        ]}
        benefits={[
          "Perfect for shift workers and light-sensitive sleepers",
          "Protects furniture and flooring from UV damage",
          "Reduces energy bills with thermal insulation",
          "Creates ideal environment for home theaters",
          "Available in wide range of colors and textures",
          "Machine washable and easy to maintain",
        ]}
        specifications={[
          { label: "Material", value: "Triple-weave polyester" },
          { label: "Light Blocking", value: "100%" },
          { label: "Thermal Rating", value: "R-3.5" },
          { label: "Noise Reduction", value: "Up to 50%" },
          { label: "Cleaning", value: "Machine washable" },
          { label: "Installation", value: "Professional included" },
          { label: "Warranty", value: "3 years" },
          { label: "Turnaround", value: "48-72 hours" },
        ]}
        fabrics={[
          "Standard Blackout",
          "Premium Blackout",
          "Luxury Velvet Blackout",
          "Textured Blackout",
          "Embossed Blackout",
        ]}
        colors={[
          "Pure White",
          "Cream",
          "Light Gray",
          "Charcoal",
          "Navy",
          "Burgundy",
          "Chocolate",
        ]}
      />
    </PageLayout>
  );
};

export default BlackoutCurtains;
