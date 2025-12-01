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

          // Add new favicon
          const link = document.createElement("link");
          link.rel = "icon";
          link.href = data.value;
          document.head.appendChild(link);
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
