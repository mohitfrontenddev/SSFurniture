import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

import logo from "/src/assets/logo.svg";
import { HamburgerIcon } from "../../icons/HamburgerIcon";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "../ui/Button";
import { PhoneIcon } from "../../icons/PhoneIcon";
import { useNavigate } from "react-router-dom";

const navLinks = [
  { label: "All Products", filterKey: "all" },
  { label: "Mattresses", filterKey: "Mattress" },
  { label: "Chairs", filterKey: "Plastic Chair" },
  { label: "Tables", filterKey: "Dining Table" },
  { label: "Sofas", filterKey: "Wooden Furniture" },
  { label: "Our Address", filterKey: "address" },
];

// Header animation and children
const headerVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const childVariant: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export function Header() {
  const navigate = useNavigate();
  const [iconToggle, setIconToggle] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  function toggleBtn() {
    setIconToggle(!iconToggle);
  }

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIconToggle(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent background scroll when menu open
  useEffect(() => {
    document.body.style.overflow = iconToggle ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [iconToggle]);

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="pt-3 pb-3 px-4 border-b-1 border-slate-600 relative z-50"
    >
      <div className="lg:container mx-auto">
        <motion.div
          variants={childVariant}
          className="flex justify-between items-center gap-4"
        >
          {/* Logo */}
          <motion.img
            variants={childVariant}
            onClick={() => navigate("/")}
            className="w-50 relative z-50 cursor-pointer"
            src={logo}
            alt="logo"
          />

          {/* Mobile Toggle */}
          <motion.div variants={childVariant} className="relative">
            <motion.div
              onClick={toggleBtn}
              className="icon-wrapper w-8 h-8 text-secondary dark:text-text-dark relative md:hidden cursor-pointer z-50"
              whileTap={{ scale: 0.9 }}
              animate={{ rotate: iconToggle ? 90 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {iconToggle ? <CrossIcon /> : <HamburgerIcon />}
            </motion.div>

            {/* Desktop Nav */}
            {!isMobile && (
              <motion.div
                className="navigation flex flex-row gap-8 justify-center items-center md:static md:h-auto"
                variants={childVariant}
              >
                {navLinks.map((link, i) => (
                  <motion.span
                    key={i}
                    variants={childVariant}
                    className="text-heading-xs cursor-pointer text-teritory dark:text-text-dark lg:text-body leading-none font-medium transition-colors duration-300 hover:text-secondary"
                    onClick={() => {
                      if (link.filterKey === "address") {
                        const target = document.getElementById("contact");
                        target?.scrollIntoView({ behavior: "smooth" });
                      } else if (link.filterKey === "all") {
                        navigate(`/products/all`);
                      } else {
                        navigate(
                          `/products/${link.filterKey
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`
                        );
                      }
                    }}
                  >
                    {link.label}
                  </motion.span>
                ))}
              </motion.div>
            )}

            {/* Mobile Nav */}
            {iconToggle && isMobile && (
              <motion.div
                className="navigation h-screen fixed top-0 left-0 right-0 bg-primary p-8 dark:bg-teritory flex flex-col gap-8 justify-center items-center z-40"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={headerVariants}
              >
                {navLinks.map((link, i) => (
                  <motion.span
                    key={i}
                    variants={childVariant}
                    className="text-heading-xs cursor-pointer text-teritory dark:text-text-dark lg:text-body leading-none font-medium transition-colors duration-300 hover:text-secondary"
                    onClick={() => {
                      if (link.filterKey === "address") {
                        const target = document.getElementById("contact");
                        target?.scrollIntoView({ behavior: "smooth" });
                      } else if (link.filterKey === "all") {
                        navigate(`/products/all`);
                      } else {
                        navigate(
                          `/products/${link.filterKey
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`
                        );
                      }
                      setIconToggle(false);
                    }}
                  >
                    {link.label}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Contact Button */}
          <motion.div
            variants={childVariant}
            className="btn-wrapper gap-4 items-center hidden md:flex"
          >
            <Button
              variant="primary"
              title="Contact us"
              startIcon={<PhoneIcon />}
              onClick={() => void (window.location.href = "tel:+1234567890")}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
}
