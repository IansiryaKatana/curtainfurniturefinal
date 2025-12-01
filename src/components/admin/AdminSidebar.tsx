import { LayoutDashboard, Calendar, Mail, FileText, HelpCircle, Image, Package, Settings, MessageSquare, Users } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const menuItems = [
  { title: "Bookings", value: "bookings", icon: Calendar },
  { title: "Contacts", value: "contacts", icon: Mail },
  { title: "Quotes", value: "quotes", icon: FileText },
  { title: "FAQs", value: "faqs", icon: HelpCircle },
  { title: "Gallery", value: "gallery", icon: Image },
  { title: "Products", value: "products", icon: Package },
  { title: "Testimonials", value: "testimonials", icon: MessageSquare },
  { title: "Users", value: "users", icon: Users },
  { title: "Settings", value: "settings", icon: Settings },
];

interface AdminSidebarProps {
  activeTab: string;
  onTabChange: (value: string) => void;
  bookingsCount?: number;
  contactsCount?: number;
  quotesCount?: number;
}

export function AdminSidebar({ 
  activeTab, 
  onTabChange, 
  bookingsCount = 0, 
  contactsCount = 0, 
  quotesCount = 0 
}: AdminSidebarProps) {
  const getCount = (value: string) => {
    switch (value) {
      case "bookings": return bookingsCount;
      case "contacts": return contactsCount;
      case "quotes": return quotesCount;
      default: return undefined;
    }
  };

  return (
    <Sidebar className="border-r bg-background" collapsible="offcanvas">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2 px-4 py-4 mb-2">
            <LayoutDashboard className="h-5 w-5" />
            <span className="font-semibold text-base">Admin Dashboard</span>
          </SidebarGroupLabel>
          <SidebarGroupContent className="px-2">
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => {
                const count = getCount(item.value);
                const isActive = activeTab === item.value;
                return (
                  <SidebarMenuItem key={item.value}>
                    <SidebarMenuButton
                      onClick={() => onTabChange(item.value)}
                      className={cn(
                        "w-full justify-start gap-3 px-3 py-2.5 rounded-lg transition-all",
                        isActive 
                          ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                          : "hover:bg-muted text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <item.icon className="h-4 w-4 flex-shrink-0" />
                      <span className="flex-1">{item.title}</span>
                      {count !== undefined && count > 0 && (
                        <span className={cn(
                          "text-xs rounded-full px-2 py-0.5 font-medium",
                          isActive 
                            ? "bg-primary-foreground/20 text-primary-foreground" 
                            : "bg-primary/10 text-primary"
                        )}>
                          {count}
                        </span>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
