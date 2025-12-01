import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export const DynamicFavicon = () => {
  useEffect(() => {
    const loadFavicon = async () => {
      try {
        const { data } = await supabase
          .from("site_settings")
          .select("value")
          .eq("key", "favicon_url")
          .single();

        if (data?.value) {
          // Remove existing favicon links
          const existingFavicons = document.querySelectorAll("link[rel*='icon']");
          existingFavicons.forEach(link => link.remove());

          // Determine file type from URL
          const faviconUrl = data.value.toLowerCase();
          let type = "image/x-icon"; // default to ICO
          
          if (faviconUrl.endsWith(".png")) {
            type = "image/png";
          } else if (faviconUrl.endsWith(".svg")) {
            type = "image/svg+xml";
          } else if (faviconUrl.endsWith(".ico")) {
            type = "image/x-icon";
          }

          // Add new favicon with proper type
          const link = document.createElement("link");
          link.rel = "icon";
          link.type = type;
          link.href = data.value;
          document.head.appendChild(link);

          // Also add apple-touch-icon for PNG files (better mobile support)
          if (faviconUrl.endsWith(".png")) {
            const appleLink = document.createElement("link");
            appleLink.rel = "apple-touch-icon";
            appleLink.href = data.value;
            document.head.appendChild(appleLink);
          }
        }
      } catch (error) {
        console.error("Error loading favicon:", error);
      }
    };

    loadFavicon();

    // Set up real-time subscription for favicon changes
    const channel = supabase
      .channel("site_settings_changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "site_settings",
          filter: "key=eq.favicon_url",
        },
        () => {
          loadFavicon();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return null;
};
