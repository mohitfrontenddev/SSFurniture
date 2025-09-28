import { PhoneIcon } from "../icons/PhoneIcon";
import { Button } from "./ui/Button";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import type { Variants } from "framer-motion";

export function CtaBanner() {
  const bgImage =
    "https://images.pexels.com/photos/6987719/pexels-photo-6987719.jpeg";

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 16,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 130,
        damping: 18,
      },
    },
  };

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("show");
    }
  }, [isInView, controls]);

  return (
    <section className="cta-banner px-4 py-10 md:py-20" ref={ref}>
      <div className="lg:container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="p-6 md:p-10 lg:p-20 relative rounded-lg overflow-hidden bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute bg-secondary/60 top-0 left-0 right-0 bottom-0" />

          <motion.div
            variants={itemVariants}
            className="content-wrapper relative z-1 flex flex-col gap-3 md:gap-5 max-w-3xl"
          >
            <motion.h2
              variants={itemVariants}
              className="text-text-dark leading-tight text-heading-sm md:text-heading-md lg:text-heading-lg font-semibold"
            >
              Get Custom Furniture Designed Just for You
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-body-sm md:text-body-lg font-light text-primary"
            >
              At Sonu Steel Furniture Talwara, we specialize in made-to-order
              furniture that fits your space, your style, and your budget. Let's
              build something beautiful together.
            </motion.p>

            <motion.div variants={itemVariants} className="btn-wrapper">
              <Button
                variant="secondary"
                title="Contact us"
                startIcon={<PhoneIcon />}
                onClick={() => void (window.location.href = "tel:+1234567890")}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
