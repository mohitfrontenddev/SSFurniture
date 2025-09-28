import { LocationIcon } from "../icons/LocationIcon";
import { GoogleMap } from "./GoogleMap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import type { Variants } from "framer-motion";

export function GetInTouch() {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [inView, controls]);

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 18,
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
        damping: 20,
      },
    },
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="pt-10 md:pt-15"
    >
      <div className="flex flex-col gap-14">
        <motion.div
          variants={itemVariants}
          className="lg:container mx-auto flex gap-6 md:gap-14 px-4 flex-col md:flex-row"
        >
          {/* Title and description */}
          <motion.div
            variants={itemVariants}
            className="title-wrapper flex flex-col gap-3 md:w-1/2 w-full"
          >
            <h2 className="text-heading-sm md:text-heading-md lg:text-heading-lg font-semibold">
              Get In Touch
            </h2>
            <p className="text-body-sm lg:text-body-lg font-light dark:text-primary">
              Have questions or want to visit us? Reach out anytime or drop by
              one of our locations. We're always here to help!
            </p>
          </motion.div>

          {/* Contact details */}
          <motion.div
            variants={itemVariants}
            className="flex md:w-1/2 gap-6 w-full flex-col md:flex-row"
          >
            {/* Address 1 */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-4"
            >
              <div className="w-12 h-12 bg-teritory text-text-dark rounded-full flex items-center justify-center">
                <LocationIcon />
              </div>
              <div className="desc">
                <h5 className="font-semibold">Head Office</h5>
                <p className="text-caption font-light">
                  VILL. Nagar Talwara, Talwara Twp, Punjab 144216
                  <br />
                  <a
                    href="tel:9878633057"
                    className="text-secondary dark:text-text-dark font-medium hover:underline"
                  >
                    M: 98786 33057
                  </a>
                  <br />
                  <a
                    href="tel:9217733057"
                    className="text-secondary dark:text-text-dark font-medium hover:underline"
                  >
                    Office: 92177 33057
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Address 2 */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-4"
            >
              <div className="w-12 h-12 bg-teritory text-text-dark rounded-full flex items-center justify-center">
                <LocationIcon />
              </div>
              <div className="desc">
                <h5 className="font-semibold">Branch Office</h5>
                <p className="text-caption font-light">
                  Main Market, Near Axis Bank, Talwara Twp, Punjab 144216
                  <br />
                  <a
                    href="tel:9878633057"
                    className="text-secondary dark:text-text-dark font-medium hover:underline"
                  >
                    M: 98786 33057
                  </a>
                  <br />
                  <a
                    href="tel:9217733057"
                    className="text-secondary dark:text-text-dark font-medium hover:underline"
                  >
                    Office: 92177 33057
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Map section */}
        <motion.div variants={itemVariants} className="map-wrapper">
          <GoogleMap />
        </motion.div>
      </div>
    </motion.section>
  );
}
