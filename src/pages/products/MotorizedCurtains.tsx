import PageLayout from "@/components/PageLayout";
import ProductDetail from "@/components/ProductDetail";
import SEO from "@/components/SEO";
import motorizedImage from "@/assets/curtain-sheer.jpg";

const MotorizedCurtains = () => {
  return (
    <PageLayout>
      <SEO
        title="Motorized Curtains Dubai - Smart Automated Window Treatments"
        description="Smart motorized curtains with remote and app control. Compatible with Alexa, Google Home. Professional installation across Dubai."
        canonical="/products/motorized-curtains"
        keywords="motorized curtains dubai, smart curtains dubai, automated curtains, electric curtains dubai, smart home curtains"
      />
      <ProductDetail
        name="Motorized Curtains"
        category="Smart Curtains"
        description="Automated convenience with remote or app control. Modern luxury meets smart home integration."
        longDescription="Experience the ultimate in modern convenience with our motorized curtain systems. Control your window treatments with a simple touch of a button, voice command, or scheduled automation. Perfect for hard-to-reach windows, smart homes, and anyone seeking effortless luxury in their daily routine."
        images={[motorizedImage, motorizedImage]}
        priceRange="AED 300 - 600/m²"
        features={[
          {
            title: "Multiple Control Options",
            description: "Control via remote, smartphone app, wall switch, or voice commands through Alexa and Google Home integration.",
          },
          {
            title: "Smart Home Integration",
            description: "Seamlessly integrates with your existing smart home ecosystem for complete automation and scene control.",
          },
          {
            title: "Scheduled Operation",
            description: "Set automatic opening and closing schedules based on time, sunrise/sunset, or room occupancy sensors.",
          },
          {
            title: "Whisper-Quiet Motor",
            description: "Ultra-quiet operation ensures peaceful ambiance with minimal noise disruption during use.",
          },
        ]}
        benefits={[
          "Perfect for high windows and hard-to-reach areas",
          "Child and pet-safe with no cords or chains",
          "Energy savings through automated scheduling",
          "Enhanced security with vacancy simulation",
          "Elegant and discreet motor housing",
          "Battery backup for power outages",
        ]}
        specifications={[
          { label: "Motor Type", value: "Quiet tubular motor" },
          { label: "Power", value: "AC or battery" },
          { label: "Control", value: "Remote, app, voice" },
          { label: "Compatibility", value: "Alexa, Google Home" },
          { label: "Noise Level", value: "<35 dB" },
          { label: "Installation", value: "Professional included" },
          { label: "Warranty", value: "5 years motor, 3 years fabric" },
          { label: "Turnaround", value: "5-7 days" },
        ]}
        fabrics={[
          "Blackout Motorized",
          "Sheer Motorized",
          "Dual-Layer Motorized",
          "Velvet Motorized",
          "Linen Motorized",
        ]}
      />
    </PageLayout>
  );
};

export default MotorizedCurtains;
