import { motion, useAnimation } from "framer-motion";
import type { Variants } from "framer-motion"; // ✅ type-only import
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface BannerProps {
  title: string;
  description: string;
}

export function Banner({ title, description }: BannerProps) {
  const bgImage = "/assets/banner.png";

  // Variants for the container and child items
  const container: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        mass: 0.8,
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };
  
  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 130,
        damping: 18,
        mass: 0.6,
      },
    },
  };
  

  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" }); // triggers a bit before fully in view

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <section className="px-4 pt-20 pb-16 md:pt-28 md:pb-24" ref={ref}>
      <div className="lg:container mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          className="text-center p-6 md:p-16 lg:p-28 relative rounded-2xl overflow-hidden bg-no-repeat bg-cover bg-center shadow-lg"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          {/* Glass overlay */}
          <div className="absolute inset-0 bg-teritory/60" />

          {/* Content */}
          <motion.div
            variants={item}
            className="relative z-10 text-primary flex flex-col gap-5 max-w-3xl mx-auto"
          >
            <motion.h1
              variants={item}
              className="text-heading-sm md:text-heading-lg lg:text-heading-xl font-extrabold  leading-tight"
            >
              {title}
            </motion.h1>

            <motion.p
              variants={item}
              className="text-body-sm md:text-body md:px-4 lg:text-body-lg font-light leading-relaxed"
            >
              {description}
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
