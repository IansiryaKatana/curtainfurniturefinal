import PageLayout from "@/components/PageLayout";
import ProductDetail from "@/components/ProductDetail";
import SEO from "@/components/SEO";
import rollerImage from "@/assets/blind-roller.jpg";

const RollerBlinds = () => {
  return (
    <PageLayout>
      <SEO
        title="Roller Blinds Dubai - Modern Minimalist Window Blinds"
        description="Sleek modern roller blinds for homes and offices in Dubai. Wide range of colors, blackout and sunscreen options. Free installation."
        canonical="/products/roller-blinds"
        keywords="roller blinds dubai, modern blinds dubai, office blinds dubai, minimalist blinds, window blinds dubai"
      />
      <ProductDetail
        name="Roller Blinds"
        category="Modern Blinds"
        description="Sleek, modern, and incredibly versatile. Perfect for any room with clean lines and easy operation."
        longDescription="Roller blinds offer the perfect combination of functionality and contemporary aesthetics. Their clean, minimalist design complements any interior style, from ultra-modern apartments to traditional homes. With smooth operation and a wide range of fabric options, roller blinds provide precise light control while maximizing your view and space."
        images={[rollerImage, rollerImage]}
        priceRange="AED 60 - 180/m²"
        features={[
          {
            title: "Minimalist Design",
            description: "Clean lines and compact profile create a sleek, unobtrusive appearance that enhances any interior aesthetic.",
          },
          {
            title: "Easy Operation",
            description: "Smooth chain mechanism or spring-loaded system ensures effortless raising and lowering with minimal effort.",
          },
          {
            title: "Space-Saving",
            description: "Compact roll takes up minimal space when raised, maximizing your window opening and natural light.",
          },
          {
            title: "Versatile Fabrics",
            description: "Choose from blackout, sunscreen, translucent, and decorative fabrics to match your specific needs.",
          },
        ]}
        benefits={[
          "Ideal for modern and minimalist interiors",
          "Easy to clean and maintain",
          "Available in hundreds of colors and patterns",
          "Perfect for bathrooms and kitchens",
          "Child-safe options available",
          "Budget-friendly window treatment solution",
        ]}
        specifications={[
          { label: "Material", value: "PVC, fabric, or hybrid" },
          { label: "Control", value: "Chain or spring" },
          { label: "Width Range", value: "30-300 cm" },
          { label: "Drop Range", value: "30-300 cm" },
          { label: "Cleaning", value: "Wipe clean" },
          { label: "Installation", value: "Professional included" },
          { label: "Warranty", value: "3 years" },
          { label: "Turnaround", value: "48-72 hours" },
        ]}
        fabrics={[
          "Blackout Roller",
          "Sunscreen Roller",
          "Translucent Roller",
          "Printed Roller",
          "Textured Roller",
        ]}
        colors={[
          "White",
          "Cream",
          "Gray",
          "Beige",
          "Navy",
          "Black",
          "Custom",
        ]}
      />
    </PageLayout>
  );
};

export default RollerBlinds;
