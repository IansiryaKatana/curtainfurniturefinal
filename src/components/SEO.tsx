import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: Record<string, any>;
  keywords?: string;
}

const useSiteSettings = () => {
  return useQuery({
    queryKey: ["site-settings-seo"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("site_settings")
        .select("key, value")
        .in("key", ["og_image", "site_name", "default_meta_description"]);

      if (error) throw error;

      const settings: Record<string, string> = {};
      data?.forEach((setting) => {
        settings[setting.key] = setting.value || "";
      });
      return settings;
    },
  });
};

const SEO = ({ 
  title, 
  description, 
  canonical, 
  ogImage,
  structuredData,
  keywords = "curtains dubai, blinds dubai, dragon mart curtains, blackout curtains dubai, roller blinds dubai, upholstery dubai, custom curtains"
}: SEOProps) => {
  const { data: settings } = useSiteSettings();
  
  const siteName = settings?.site_name || "VIP Curtains & Furniture";
  const defaultOgImage = settings?.og_image || "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&h=630";
  const finalOgImage = ogImage || defaultOgImage;
  
  const fullTitle = `${title} | ${siteName}`;
  const baseUrl = "https://vipcurtains.ae";
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : baseUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_AE" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@VIPCurtains" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={finalOgImage} />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="VIP Curtains & Furniture" />
      <meta name="geo.region" content="AE-DU" />
      <meta name="geo.placename" content="Dubai" />
      <meta name="geo.position" content="25.2048;55.2708" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
