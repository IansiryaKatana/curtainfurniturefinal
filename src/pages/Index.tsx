import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SEO from "@/components/SEO";
import WhyChooseUs from "@/components/WhyChooseUs";
import CurtainsShowcase from "@/components/CurtainsShowcase";
import BlindsShowcase from "@/components/BlindsShowcase";
import UpholsterySection from "@/components/UpholsterySection";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import StatsCounter from "@/components/StatsCounter";

const Index = () => {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you offer free home visits for measurements?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We provide complimentary home visits throughout Dubai for accurate measurements and consultations."
        }
      },
      {
        "@type": "Question",
        "name": "How long does installation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most projects are completed within 48-72 hours from measurement to final installation."
        }
      }
    ]
  };

  const localBusinessStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "VIP Curtains & Furniture",
    "image": "https://vipcurtains.ae/og-image.png",
    "@id": "https://vipcurtains.ae",
    "url": "https://vipcurtains.ae",
    "telephone": "+971504649831",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dragon Mart",
      "addressLocality": "International City",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.2048,
      "longitude": 55.2708
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "10:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "14:00",
        "closes": "22:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1000"
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Premium Curtains, Blinds & Upholstery Dubai"
        description="Premium curtains, blinds, upholstery & furniture from Dragon Mart. Free home visit + measurement. 3000+ fabrics. Fast installation across Dubai."
        canonical="/"
        structuredData={[faqStructuredData, localBusinessStructuredData]}
      />
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <StatsCounter />
      <CurtainsShowcase />
      <BlindsShowcase />
      <UpholsterySection />
      <Gallery />
      <Testimonials />
      <FAQ showAll={false} limit={5} />
      <BookingForm />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default Index;