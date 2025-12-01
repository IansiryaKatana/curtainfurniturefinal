-- Create testimonials/reviews table
CREATE TABLE public.testimonials (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  location TEXT NOT NULL,
  rating INTEGER NOT NULL DEFAULT 5,
  text TEXT NOT NULL,
  service TEXT NOT NULL,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can view active testimonials" 
ON public.testimonials 
FOR SELECT 
USING (is_active = true);

CREATE POLICY "Admins can view all testimonials" 
ON public.testimonials 
FOR SELECT 
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can insert testimonials" 
ON public.testimonials 
FOR INSERT 
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update testimonials" 
ON public.testimonials 
FOR UPDATE 
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete testimonials" 
ON public.testimonials 
FOR DELETE 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Add trigger for updated_at
CREATE TRIGGER update_testimonials_updated_at
BEFORE UPDATE ON public.testimonials
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert existing hardcoded testimonials
INSERT INTO public.testimonials (name, location, rating, text, service, display_order) VALUES
('Sarah Al Mansoori', 'Dubai Marina', 5, 'Absolutely stunning blackout curtains! The team was professional, and the installation was flawless. My bedroom is now perfectly dark and cool.', 'Blackout Curtains', 1),
('Mohammed Hassan', 'Arabian Ranches', 5, 'Best decision ever! The motorized blinds are a game-changer. Quality products and excellent service from VIP Curtains.', 'Motorized Blinds', 2),
('Emma Wilson', 'Downtown Dubai', 5, 'Their upholstery work transformed my old sofa into a masterpiece. The fabric selection was incredible, and the craftsmanship is top-notch!', 'Upholstery Services', 3),
('Ahmed Abdullah', 'Jumeirah', 5, 'Free home visit was so convenient! They measured everything perfectly, and my custom curtains fit like a glove. Highly recommend!', 'Custom Curtains', 4),
('Lisa Chen', 'Business Bay', 5, 'The sheer curtains added such elegance to my living room. Fast delivery and installation within 48 hours. Amazing service!', 'Sheer Curtains', 5);