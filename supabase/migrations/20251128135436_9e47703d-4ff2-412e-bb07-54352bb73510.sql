-- Insert default site settings for SEO
INSERT INTO public.site_settings (key, value)
VALUES 
  ('og_image', 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&h=630'),
  ('site_name', 'VIP Curtains & Furniture'),
  ('default_meta_description', 'Premium curtains, blinds, and upholstery in Dubai. Free home visit, 3000+ fabrics, fast installation. Located in Dragon Mart.')
ON CONFLICT (key) DO NOTHING;