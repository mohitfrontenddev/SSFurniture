import { motion, useAnimation } from "framer-motion";
import type { Variants } from "framer-motion"; // ✅ type-only import
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CartIcon } from "../icons/CartIcon";
import { products } from "../store/Products";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
import { CardSkeleton } from "./CardSkeleton";

type BestSellingItemsProps = {
  tag: string;
  title?: string;
  description?: string;
  showButton?: boolean;
  limit?: number;
};

export function BestSellingItems({
  tag,
  title,
  description,
  showButton = true,
  limit,
}: BestSellingItemsProps) {
  const isLoading = false;
  const navigate = useNavigate();
  // Suppose tag comes from route param, e.g. "all-products", "mattresses"
  const formattedTag = tag.replace(/-/g, " ").toLowerCase();

  const filteredProducts =
    formattedTag === "all"
      ? products
      : products.filter(
          (product) => product.tag.toLowerCase() === formattedTag
        );

  const productsToShow = limit
    ? filteredProducts.slice(0, limit)
    : filteredProducts;

  // Animation controls and ref for inView
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" }); // margin to trigger slightly before fully in view

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        mass: 0.8,
        delay: 0.4,
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      className="pt-8 pb-8 lg:pt-10 lg:pb-20 px-4"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="lg:container mx-auto">
        <div className="title-wrapper text-center flex flex-col gap-5 max-w-5xl mx-auto">
          <h2 className="text-heading-sm md:text-heading-md lg:text-heading-lg text-center font-semibold">
            {title}
          </h2>
          <p className="text-body-sm lg:text-body-lg font-light dark:text-primary">
            {description}
          </p>
        </div>
        <div className="products-wrapper mt-10 lg:mt-20 ">
          <div className="flex flex-wrap gap-6 justify-center">
            {productsToShow.length > 0 ? (
              productsToShow.map((item, i) =>
                isLoading ? (
                  <CardSkeleton key={i} />
                ) : (
                  <Card
                  key={i}
                  productImages={Array.isArray(item.productImages) ? item.productImages : [item.productImages]} // <-- make sure it's array
                  tag={item.tag}
                  title={item.title}
                  description={item.description}
                  salePrice={item.salePrice}
                  price={item.price}
                />
                
                )
              )
            ) : (
              <p className="text-center text-lg">
                No items found for "{formattedTag}".
              </p>
            )}
          </div>
          {showButton && (
            <div className="btn-wrapper w-full flex justify-center items-center mt-14">
              <Button
                variant="secondary"
                title={`Check ${title}`}
                startIcon={<CartIcon />}
                onClick={() =>
                  navigate(`/products/${formattedTag.toLowerCase()}`)
                }
              />
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
}
