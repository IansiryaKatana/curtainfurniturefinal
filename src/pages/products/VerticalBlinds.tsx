import PageLayout from "@/components/PageLayout";
import ProductDetail from "@/components/ProductDetail";
import SEO from "@/components/SEO";
import blindImage from "@/assets/blind-roller.jpg";

const VerticalBlinds = () => {
  return (
    <PageLayout>
      <SEO
        title="Vertical Blinds Dubai - Sliding Glass Door Blinds"
        description="Modern vertical blinds perfect for large windows and sliding doors in Dubai. Easy operation, great light control. Free installation."
        canonical="/products/vertical-blinds"
        keywords="vertical blinds dubai, sliding door blinds dubai, patio blinds dubai, office vertical blinds, large window blinds"
      />
      <ProductDetail
        name="Vertical Blinds"
        category="Contemporary Blinds"
        description="Ideal for wide windows and sliding doors. Smooth operation with excellent light and privacy control."
        longDescription="Vertical blinds are the perfect solution for large windows, sliding glass doors, and commercial spaces. Their vertical orientation makes them ideal for wide expanses, offering smooth operation and excellent light control. Available in a wide range of fabrics, from sheer to blackout, and featuring easy maintenance and durability."
        images={[blindImage, blindImage]}
        priceRange="AED 70 - 190/m²"
        features={[
          {
            title: "Perfect for Large Areas",
            description: "Ideal for sliding doors, patio doors, and wide windows where horizontal blinds aren't practical.",
          },
          {
            title: "Smooth Track Operation",
            description: "Quality track system ensures effortless opening and closing even on large installations.",
          },
          {
            title: "Versatile Light Control",
            description: "Rotate vanes to adjust light levels or slide open completely for unobstructed views.",
          },
          {
            title: "Space Efficient",
            description: "Vanes stack neatly to one side, maximizing window opening and not blocking door access.",
          },
        ]}
        benefits={[
          "Excellent for commercial offices and meeting rooms",
          "Perfect for balcony and patio doors",
          "Easy to operate on large windows",
          "Available in hundreds of fabric options",
          "Child-safe wand control option",
          "Budget-friendly for large areas",
        ]}
        specifications={[
          { label: "Material", value: "Fabric, PVC, or aluminum" },
          { label: "Vane Width", value: "89mm or 127mm" },
          { label: "Control", value: "Wand or cord" },
          { label: "Width Range", value: "100-600 cm" },
          { label: "Drop Range", value: "50-300 cm" },
          { label: "Cleaning", value: "Wipe or vacuum" },
          { label: "Installation", value: "Professional included" },
          { label: "Warranty", value: "3 years" },
        ]}
        fabrics={[
          "Light Filtering Fabric",
          "Blackout Fabric",
          "Textured PVC",
          "Aluminum Slats",
          "Printed Patterns",
        ]}
        colors={[
          "White",
          "Cream",
          "Gray",
          "Beige",
          "Navy",
          "Charcoal",
          "Custom",
        ]}
      />
    </PageLayout>
  );
};

export default VerticalBlinds;
