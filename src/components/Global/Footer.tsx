import logo from "/assets/logo.svg";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import {  useNavigate } from "react-router-dom";

const navLinks = [
  {
    title: "Products",
    links: [
      { label: "All Products", filterKey: "all" },
      { label: "Mattresses", filterKey: "Mattress" },
      { label: "Chairs", filterKey: "Plastic Chair" },
      { label: "Tables", filterKey: "Dining Table" },
      { label: "Sofas", filterKey: "Wooden Furniture" },
      { label: "Our Address", filterKey: "address" },
    ],
  },
  {
    title: "Services",
    links: ["Catalog", "Blog", "FaQ", "Pricing"],
  },
  {
    title: "Follow Us",
    links: ["Facebook", "Instagram", "Twitter"],
  },
];

export function Footer() {
  const navigate = useNavigate();

  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="footer px-4 bg-dark pt-14 pb-8 text-text-dark"
    >
      <div className="lg:container mx-auto">
        <div className="flex flex-col gap-4 justify-between md:flex-row">
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-4 md:w-1/3 lg:w-1/4"
          >
            <img className="w-50 md:w-60 cursor-pointer" src={logo} alt="logo" onClick={() => navigate("/")} />
            <p className="text-body-sm md:text-body font-light">
              Sonu Steel Furniture is dedicated to crafting comfort & quality —
              from our home in Talwara to yours.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="flex flex-col gap-4 md:flex-row md:justify-end md:gap-20 md:w-8/12 lg:w-9/12 lg:gap-30"
          >
            {navLinks.map((section, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex flex-col gap-4"
              >
                <h5 className="text-body-lg lg:text-heading-xs leading-none font-medium">
                  {section.title}
                </h5>
                <div className="flex flex-col gap-4">
                {section.links.map((link, j) => {
  const label = typeof link === "string" ? link : link.label;

  return (
    <span
      key={j}
      className="text-body-sm leading-none font-light transition-all duration-300 hover:text-secondary cursor-pointer"
      onClick={() => {
        if (typeof link === "object") {
          if (link.filterKey === "address") {
            const target = document.getElementById("contact");
            target?.scrollIntoView({ behavior: "smooth" });
          } else {
            const path =
              link.filterKey === "all"
                ? "/products/all"
                : `/products/${link.filterKey
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`;
                    navigate(path);
          }
        } else {
          // You can add logic for string links if needed
          console.log(`Clicked: ${link}`);
        }
      }}
    >
      {label}
    </span>
  );
})}

                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="copyright pt-4 md:pt-8 mt-4 md:mt-12 border-t-1 border-primary/10 md:text-center"
        >
          <p className="leading-none text-caption font-extralight">
            &copy; 2025 <strong>Sonu Steel Furniture Talwara</strong>. All
            rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
