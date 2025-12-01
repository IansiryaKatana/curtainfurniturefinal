import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { User, Session } from "@supabase/supabase-js";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminFAQManager } from "@/components/admin/AdminFAQManager";
import { AdminGalleryManager } from "@/components/admin/AdminGalleryManager";
import { AdminProductsManager } from "@/components/admin/AdminProductsManager";
import { AdminBookingsManager } from "@/components/admin/AdminBookingsManager";
import { AdminContactsManager } from "@/components/admin/AdminContactsManager";
import { AdminQuotesManager } from "@/components/admin/AdminQuotesManager";
import { AdminTestimonialsManager } from "@/components/admin/AdminTestimonialsManager";
import { AdminUsersManager } from "@/components/admin/AdminUsersManager";

const AdminDashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeTab, setActiveTab] = useState("bookings");
  const [faviconUrl, setFaviconUrl] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [ogImageUrl, setOgImageUrl] = useState("");
  const [defaultMetaDesc, setDefaultMetaDesc] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (!session?.user) {
          navigate("/admin/auth");
        }
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (!session?.user) {
        navigate("/admin/auth");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
    const checkAdminRole = async () => {
      if (!user) return;
      
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .eq("role", "admin")
        .single();
      
      setIsAdmin(!!data);
    };

    checkAdminRole();
  }, [user]);

  const { data: bookings } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("bookings")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      return data;
    },
    enabled: !!user && isAdmin,
  });

  const { data: contacts } = useQuery({
    queryKey: ["contacts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("contacts")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      return data;
    },
    enabled: !!user && isAdmin,
  });

  const { data: quotes } = useQuery({
    queryKey: ["quotes"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("quotes")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      return data;
    },
    enabled: !!user && isAdmin,
  });

  const { data: siteSettings } = useQuery({
    queryKey: ["siteSettings"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("site_settings")
        .select("*");
      
      if (error) throw error;
      return data;
    },
    enabled: !!user && isAdmin,
  });

  useEffect(() => {
    if (siteSettings) {
      const favicon = siteSettings.find(s => s.key === "favicon_url");
      if (favicon?.value) setFaviconUrl(favicon.value);
      
      const logo = siteSettings.find(s => s.key === "logo_url");
      if (logo?.value) setLogoUrl(logo.value);
      
      const ogImage = siteSettings.find(s => s.key === "og_image");
      if (ogImage?.value) setOgImageUrl(ogImage.value);
      
      const metaDesc = siteSettings.find(s => s.key === "default_meta_description");
      if (metaDesc?.value) setDefaultMetaDesc(metaDesc.value);
    }
  }, [siteSettings]);

  const updateFaviconMutation = useMutation({
    mutationFn: async (url: string) => {
      const existingSetting = siteSettings?.find(s => s.key === "favicon_url");
      
      if (existingSetting) {
        const { error } = await supabase
          .from("site_settings")
          .update({ value: url, updated_at: new Date().toISOString() })
          .eq("key", "favicon_url");
        
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("site_settings")
          .insert({ key: "favicon_url", value: url });
        
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["siteSettings"] });
      toast({
        title: "Success",
        description: "Favicon updated successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const updateLogoMutation = useMutation({
    mutationFn: async (url: string) => {
      const existingSetting = siteSettings?.find(s => s.key === "logo_url");
      
      if (existingSetting) {
        const { error } = await supabase
          .from("site_settings")
          .update({ value: url, updated_at: new Date().toISOString() })
          .eq("key", "logo_url");
        
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("site_settings")
          .insert({ key: "logo_url", value: url });
        
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["siteSettings"] });
      toast({
        title: "Success",
        description: "Logo updated successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleUpdateFavicon = () => {
    if (!faviconUrl.trim()) {
      toast({
        title: "Error",
        description: "Please enter a favicon URL",
        variant: "destructive",
      });
      return;
    }
    updateFaviconMutation.mutate(faviconUrl);
  };

  const updateOgImageMutation = useMutation({
    mutationFn: async (url: string) => {
      const existingSetting = siteSettings?.find(s => s.key === "og_image");
      
      if (existingSetting) {
        const { error } = await supabase
          .from("site_settings")
          .update({ value: url, updated_at: new Date().toISOString() })
          .eq("key", "og_image");
        
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("site_settings")
          .insert({ key: "og_image", value: url });
        
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["siteSettings"] });
      toast({
        title: "Success",
        description: "Social share image updated successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const updateMetaDescMutation = useMutation({
    mutationFn: async (desc: string) => {
      const existingSetting = siteSettings?.find(s => s.key === "default_meta_description");
      
      if (existingSetting) {
        const { error } = await supabase
          .from("site_settings")
          .update({ value: desc, updated_at: new Date().toISOString() })
          .eq("key", "default_meta_description");
        
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("site_settings")
          .insert({ key: "default_meta_description", value: desc });
        
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["siteSettings"] });
      toast({
        title: "Success",
        description: "Default meta description updated successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleUpdateLogo = () => {
    if (!logoUrl.trim()) {
      toast({
        title: "Error",
        description: "Please enter a logo URL",
        variant: "destructive",
      });
      return;
    }
    updateLogoMutation.mutate(logoUrl);
  };

  const handleUpdateOgImage = () => {
    if (!ogImageUrl.trim()) {
      toast({
        title: "Error",
        description: "Please enter a social share image URL",
        variant: "destructive",
      });
      return;
    }
    updateOgImageMutation.mutate(ogImageUrl);
  };

  const handleUpdateMetaDesc = () => {
    if (!defaultMetaDesc.trim()) {
      toast({
        title: "Error",
        description: "Please enter a default meta description",
        variant: "destructive",
      });
      return;
    }
    updateMetaDescMutation.mutate(defaultMetaDesc);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Signed out",
      description: "You have been signed out successfully",
    });
    navigate("/admin/auth");
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <CardHeader>
            <CardTitle>Access Denied</CardTitle>
            <CardDescription>You don't have admin privileges</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={handleSignOut}>Sign Out</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <SidebarProvider defaultOpen={true}>
      <AdminSidebar 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
        bookingsCount={bookings?.length}
        contactsCount={contacts?.length}
        quotesCount={quotes?.length}
      />
      
      <main className="flex-1 w-full peer-data-[state=collapsed]:w-full overflow-x-hidden bg-muted/30">
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-md border-b border-border px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <SidebarTrigger />
            <h1 className="text-lg md:text-xl font-bold">Admin Dashboard</h1>
          </div>
          <Button onClick={handleSignOut} variant="outline" size="sm">Sign Out</Button>
        </div>
        <div className="p-4 md:p-6">
          <div className="max-w-7xl mx-auto">

            {activeTab === "bookings" && <AdminBookingsManager />}
            {activeTab === "contacts" && <AdminContactsManager />}
            {activeTab === "quotes" && <AdminQuotesManager />}

            {activeTab === "faqs" && <AdminFAQManager />}
            {activeTab === "gallery" && <AdminGalleryManager />}
            {activeTab === "products" && <AdminProductsManager />}
            {activeTab === "testimonials" && <AdminTestimonialsManager />}
            {activeTab === "users" && <AdminUsersManager />}

            {activeTab === "settings" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Site Settings</CardTitle>
                    <CardDescription>Manage your site configuration</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="logo">Logo URL</Label>
                        <div className="flex gap-2">
                          {logoUrl && (
                            <img src={logoUrl} alt="Current logo" className="h-12 object-contain border rounded p-1" />
                          )}
                          <div className="flex-1">
                            <Input
                              id="logo"
                              type="url"
                              placeholder="https://example.com/logo.png"
                              value={logoUrl}
                              onChange={(e) => setLogoUrl(e.target.value)}
                            />
                            <p className="text-sm text-muted-foreground mt-1">
                              Enter the full URL to your logo image
                            </p>
                          </div>
                        </div>
                      </div>
                      <Button 
                        onClick={handleUpdateLogo}
                        disabled={updateLogoMutation.isPending}
                      >
                        {updateLogoMutation.isPending ? "Updating..." : "Update Logo"}
                      </Button>
                    </div>

                    <div className="space-y-4 border-t pt-6">
                      <div className="space-y-2">
                        <Label htmlFor="favicon">Favicon URL</Label>
                        <div className="flex gap-2">
                          {faviconUrl && (
                            <img src={faviconUrl} alt="Current favicon" className="w-8 h-8 object-contain border rounded" />
                          )}
                          <div className="flex-1">
                            <Input
                              id="favicon"
                              type="url"
                              placeholder="https://example.com/favicon.ico"
                              value={faviconUrl}
                              onChange={(e) => setFaviconUrl(e.target.value)}
                            />
                            <p className="text-sm text-muted-foreground mt-1">
                              Enter the full URL to your favicon image (PNG, ICO, or SVG format)
                            </p>
                          </div>
                        </div>
                      </div>
                      <Button 
                        onClick={handleUpdateFavicon}
                        disabled={updateFaviconMutation.isPending}
                      >
                        {updateFaviconMutation.isPending ? "Updating..." : "Update Favicon"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>SEO Settings</CardTitle>
                    <CardDescription>Manage search engine and social media appearance</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="ogImage">Social Share Image (OG Image)</Label>
                        <p className="text-sm text-muted-foreground">
                          This image appears when your website is shared on social media. Recommended size: 1200×630px
                        </p>
                        <Input
                          id="ogImage"
                          type="url"
                          placeholder="https://example.com/og-image.jpg"
                          value={ogImageUrl}
                          onChange={(e) => setOgImageUrl(e.target.value)}
                        />
                        {ogImageUrl && (
                          <img src={ogImageUrl} alt="OG Preview" className="mt-2 max-w-md rounded border" />
                        )}
                      </div>
                      <Button 
                        onClick={handleUpdateOgImage}
                        disabled={updateOgImageMutation.isPending}
                      >
                        {updateOgImageMutation.isPending ? "Updating..." : "Update Social Share Image"}
                      </Button>
                    </div>

                    <div className="space-y-4 border-t pt-6">
                      <div className="space-y-2">
                        <Label htmlFor="metaDesc">Default Meta Description</Label>
                        <p className="text-sm text-muted-foreground">
                          Default description used across the site. Max 160 characters for best results.
                        </p>
                        <Textarea
                          id="metaDesc"
                          placeholder="Premium curtains, blinds, and upholstery in Dubai..."
                          value={defaultMetaDesc}
                          onChange={(e) => setDefaultMetaDesc(e.target.value)}
                          rows={3}
                        />
                      </div>
                      <Button 
                        onClick={handleUpdateMetaDesc}
                        disabled={updateMetaDescMutation.isPending}
                      >
                        {updateMetaDescMutation.isPending ? "Updating..." : "Update Meta Description"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </main>
    </SidebarProvider>
  );
};

export default AdminDashboard;
