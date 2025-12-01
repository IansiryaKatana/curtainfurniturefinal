import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface StatProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

const AnimatedCounter = ({ end, duration = 2, suffix = "", prefix = "" }: Omit<StatProps, "label">) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(end);
    }
  }, [motionValue, isInView, end]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = prefix + Math.floor(latest).toLocaleString() + suffix;
      }
    });
    return unsubscribe;
  }, [springValue, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
};

const Stat = ({ end, suffix, prefix, label }: StatProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-serif font-bold text-primary mb-1.5 sm:mb-2">
        <AnimatedCounter end={end} suffix={suffix} prefix={prefix} />
      </div>
      <p className="text-xs sm:text-sm md:text-base text-muted-foreground">{label}</p>
    </motion.div>
  );
};

const StatsCounter = () => {
  return (
    <section className="py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-5 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-foreground mb-3 sm:mb-3.5 md:mb-4">Trusted by Thousands</h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            Our commitment to quality and customer satisfaction has made us Dubai's preferred choice for window treatments.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-7 md:gap-8 lg:gap-10 xl:gap-12 max-w-5xl mx-auto">
          <Stat end={15} suffix="+" label="Years of Excellence" />
          <Stat end={10000} suffix="+" label="Happy Clients" />
          <Stat end={3000} suffix="+" label="Fabric Options" />
          <Stat end={72} label="Hours Fast Delivery" />
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
