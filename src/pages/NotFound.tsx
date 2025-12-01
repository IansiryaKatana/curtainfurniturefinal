import { motion } from "framer-motion";
import { Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import PageLayout from "@/components/PageLayout";
import SEO from "@/components/SEO";

const NotFound = () => {
  return (
    <PageLayout>
      <SEO 
        title="Page Not Found - 404"
        description="The page you're looking for doesn't exist or has been moved. Let's get you back on track."
      />
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-9xl md:text-[12rem] font-serif font-bold text-primary/20 mb-4"
          >
            404
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Page Not Found</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="group">
              <NavLink to="/">
                <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Back to Home
              </NavLink>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="group">
              <NavLink to="/contact">
                <Search className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Contact Us
              </NavLink>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm"
          >
            <NavLink to="/curtains" className="p-4 border border-border rounded-lg hover:border-primary transition-colors">
              <p className="font-semibold">Curtains</p>
            </NavLink>
            <NavLink to="/blinds" className="p-4 border border-border rounded-lg hover:border-primary transition-colors">
              <p className="font-semibold">Blinds</p>
            </NavLink>
            <NavLink to="/upholstery" className="p-4 border border-border rounded-lg hover:border-primary transition-colors">
              <p className="font-semibold">Upholstery</p>
            </NavLink>
            <NavLink to="/about" className="p-4 border border-border rounded-lg hover:border-primary transition-colors">
              <p className="font-semibold">About Us</p>
            </NavLink>
          </motion.div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
