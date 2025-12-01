import PageLayout from "@/components/PageLayout";
import ProductDetail from "@/components/ProductDetail";
import SEO from "@/components/SEO";
import zebraImage from "@/assets/blind-roller.jpg";

const ZebraBlinds = () => {
  return (
    <PageLayout>
      <SEO
        title="Zebra Blinds Dubai - Day & Night Dual Roller Blinds"
        description="Modern zebra blinds with alternating sheer and opaque stripes. Perfect balance of privacy and natural light in Dubai homes."
        canonical="/products/zebra-blinds"
        keywords="zebra blinds dubai, day and night blinds dubai, dual roller blinds, modern blinds dubai, duplex blinds"
      />
      <ProductDetail
        name="Zebra Blinds (Duplex)"
        category="Contemporary Blinds"
        description="Dual fabric design alternates between sheer and opaque. Modern style with flexible light control."
        longDescription="Zebra blinds, also known as duplex or day and night blinds, feature an innovative dual-layer design with alternating sheer and opaque horizontal stripes. By adjusting the alignment of these stripes, you can effortlessly transition between filtered natural light and complete privacy, making them the perfect all-in-one window treatment solution."
        images={[zebraImage, zebraImage]}
        priceRange="AED 90 - 200/m²"
        features={[
          {
            title: "Day & Night Function",
            description: "Unique dual-layer design allows instant switching between sheer light filtering and complete privacy with a simple adjustment.",
          },
          {
            title: "Modern Aesthetic",
            description: "Contemporary horizontal stripe pattern adds visual interest and complements modern interior design styles.",
          },
          {
            title: "Flexible Light Control",
            description: "Precisely control light levels by aligning or offsetting the alternating opaque and translucent bands.",
          },
          {
            title: "Easy Maintenance",
            description: "Smooth fabric surface resists dust and can be easily cleaned with a damp cloth.",
          },
        ]}
        benefits={[
          "Two blinds in one - maximum versatility",
          "Perfect for bedrooms and living areas",
          "Maintains outside view while ensuring privacy",
          "Energy efficient with light filtering properties",
          "Available in wide range of colors and patterns",
          "Ideal for modern and contemporary spaces",
        ]}
        specifications={[
          { label: "Material", value: "Dual-layer polyester" },
          { label: "Control", value: "Chain or spring" },
          { label: "Light Options", value: "Sheer and blackout bands" },
          { label: "Width Range", value: "40-280 cm" },
          { label: "Drop Range", value: "40-280 cm" },
          { label: "Cleaning", value: "Wipe clean" },
          { label: "Installation", value: "Professional included" },
          { label: "Warranty", value: "3 years" },
        ]}
        fabrics={[
          "Standard Zebra",
          "Premium Zebra",
          "Textured Zebra",
          "Dimout Zebra",
          "Printed Zebra",
        ]}
        colors={[
          "White",
          "Cream",
          "Gray",
          "Beige",
          "Charcoal",
          "Brown",
          "Custom",
        ]}
      />
    </PageLayout>
  );
};

export default ZebraBlinds;
