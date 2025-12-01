import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Award, Users, Clock, Heart, MapPin } from "lucide-react";
import SEO from "@/components/SEO";

const values = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "We source only the finest fabrics and materials from trusted suppliers worldwide.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our skilled professionals bring decades of combined experience in interior design.",
  },
  {
    icon: Clock,
    title: "Fast Service",
    description: "From measurement to installation, we complete most projects within 48-72 hours.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Your satisfaction is our priority. We go above and beyond to exceed expectations.",
  },
];

const process = [
  {
    step: "01",
    title: "Free Consultation",
    description: "Book a free home visit. Our experts will measure your space and discuss your vision.",
  },
  {
    step: "02",
    title: "Design & Selection",
    description: "Browse 3000+ premium fabrics. We'll help you choose the perfect match for your interior.",
  },
  {
    step: "03",
    title: "Expert Installation",
    description: "Professional installation within 48-72 hours. Flawless results, guaranteed.",
  },
];

const About = () => {
  return (
    <PageLayout>
      <SEO 
        title="About Us - 15+ Years Serving Dubai"
        description="For over 15 years, VIP Curtains & Furniture has been transforming homes and offices across Dubai with premium curtains, blinds, and custom upholstery."
        canonical="/about"
        keywords="about vip curtains dubai, curtains company dubai, dragon mart furniture, upholstery services dubai"
      />
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-foreground mb-6">About VIP Curtains & Furniture</h1>
            <p className="text-muted-foreground text-base leading-relaxed">
              For over 15 years, we've been transforming homes and offices across Dubai with premium curtains, blinds, and custom upholstery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                <p>
                  Established in Dragon Mart, Dubai, VIP Curtains & Furniture has grown from a small family business to one of the region's most trusted names in window treatments and upholstery.
                </p>
                <p>
                  What sets us apart is our unwavering commitment to quality, our extensive selection of over 3000 premium fabrics, and our team of experienced craftsmen who treat every project as if it were their own home.
                </p>
                <p>
                  From luxury villas in Palm Jumeirah to modern apartments in Dubai Marina, from corporate offices in Business Bay to boutique hotels across the emirate—we've brought our signature blend of elegance and expertise to thousands of satisfied clients.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://mall.dragonmart.ae/storage/uploads/blogs/2024/08/28/66ee0c5e8c0a8_dragon-mart-dubai.jpg"
                alt="Dragon Mart, Dubai - VIP Curtains & Furniture location"
                className="rounded-2xl shadow-luxury w-full object-cover"
                onError={(e) => {
                  // Fallback to Pexels image if Dragon Mart image fails to load
                  e.currentTarget.src = "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop";
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 lg:py-32 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-luxury transition-smooth border border-border/50"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-medium text-card-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-foreground mb-4">How We Work</h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto">
              Simple, transparent, and designed around your convenience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-luxury text-primary-foreground font-serif text-3xl font-medium mb-6 shadow-luxury">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-serif font-medium text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-accent to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6"
            >
              <MapPin className="w-10 h-10 text-primary" />
            </motion.div>
            <h2 className="text-foreground mb-4">Serving All of Dubai</h2>
            <p className="text-muted-foreground text-base max-w-3xl mx-auto leading-relaxed mb-8">
              From our convenient location in Dragon Mart, we proudly bring premium curtains, blinds, and upholstery services to every corner of Dubai. Our expert team travels across the emirate to transform your spaces.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-12">
            {[
              "Dubai Marina",
              "Palm Jumeirah",
              "Downtown Dubai",
              "Business Bay",
              "JBR",
              "JLT",
              "Arabian Ranches",
              "Jumeirah",
              "Dubai Hills",
              "Emirates Hills",
              "Al Barsha",
              "Dubai Sports City",
            ].map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-card/80 backdrop-blur-sm rounded-xl px-4 py-3 shadow-soft hover:shadow-medium border border-border/50 hover:border-primary/50 transition-smooth text-center"
              >
                <p className="text-sm font-medium text-card-foreground">{area}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 bg-card/80 backdrop-blur-sm rounded-2xl px-6 md:px-8 py-4 md:py-5 shadow-luxury border border-primary/20">
              <MapPin className="w-6 h-6 text-primary shrink-0" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground mb-1">Our Showroom</p>
                <p className="text-base md:text-base font-semibold text-foreground">
                  Dragon Mart, International City, Dubai
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-base mt-6 max-w-2xl mx-auto">
              Free home visits available across all areas. Same-day consultations and fast installation service throughout Dubai.
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;