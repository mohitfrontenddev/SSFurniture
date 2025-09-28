import { TruckIcon } from "../icons/TruckIcon";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import type { Variants } from "framer-motion";

const benifits = [
  {
    icon: <TruckIcon />,
    title: "Free Delivery in Talwara",
    desc: "Enjoy fast and free local delivery on all orders — no hidden charges.",
  },
  {
    icon: <TruckIcon />,
    title: "Premium Quality Materials",
    desc: "Crafted with durable steel and fine wood for long-lasting use.",
  },
  {
    icon: <TruckIcon />,
    title: "Support You Can Rely On",
    desc: "Have questions? We’re just a call away — 7 days a week.",
  },
];


export function Benifits() {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [inView, controls]);

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 18,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="px-4 py-10 bg-text-dark dark:bg-teritory/20"
    >
      <div className="lg:container mx-auto">
        <motion.div
          variants={containerVariants}
          className="flex flex-col md:flex-row justify-center gap-10"
        >
          {benifits.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex justify-center gap-5 flex-col items-center text-center w-full md:w-1/3"
            >
              <div className="icon-wrapper">
                <div className="w-20 h-20 bg-secondary/40 rounded-full flex justify-center items-center">
                  <div className="bg-teritory w-15 h-15 rounded-full flex justify-center items-center">
                    <div className="w-8 h-8 text-3xl text-center text-text-dark">
                      {item.icon}
                    </div>
                  </div>
                </div>
              </div>
              <div className="title-wrapper flex flex-col justify-center text-center items-center">
                <h5 className="text-body-sm text-dark dark:text-text-dark font-semibold">
                  {item.title}
                </h5>
                <p className="text-caption text-dark dark:text-text-dark/80 font-light max-w-[300px]">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
