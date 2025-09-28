import { useState } from "react";
import { CartIcon } from "../../icons/CartIcon";
import { LeftArrow } from "../../icons/LeftArrow";
import { RightArrow } from "../../icons/RightArrow";
import { Button } from "./Button";
import { AnimatePresence, motion } from "framer-motion";
import { CrossIcon } from "../../icons/CrossIcon";

interface Cards {
  productImages: string[];
  tag: string;
  title: string;
  description: string;
  salePrice: number;
  price: number;
}

export function Card({
  productImages,
  tag,
  title,
  description,
  salePrice,
  price,
}: Cards) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev

  const phoneNumber = "+919876629172";
  const message = `Hi, I'm interested in the product: ${title}\n\nDescription: ${description}\nPrice: ₹${salePrice}`;
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Animation variants for sliding images
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      position: "absolute" as const,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      position: "relative" as const,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      position: "absolute" as const,
    }),
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % productImages.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? productImages.length - 1 : prev - 1
    );
  };

  return (
    <>
      {/* Card */}
      <div className="card-wrapper w-full md:w-[calc(50%-18px)] lg:w-[calc(25%-18px)] flex flex-col gap-5 dark:bg-teritory/10 rounded-lg overflow-hidden shadow-md group">
        <div
          className="product-img overflow-hidden bg-secondary/20 cursor-zoom-in"
          onClick={() => {
            setIsPreviewOpen(true);
            setCurrentIndex(0);
            setDirection(0);
          }}
        >
          <img
            className="transition-all duration-300 ease-linear group-hover:scale-110 aspect-square object-cover object-center"
            src={productImages[currentIndex]}
            alt={tag}
          />
        </div>
        <div className="description flex flex-col gap-5 p-4">
          <p className="text-[12px] leading-none font-medium uppercase bg-secondary text-text-dark w-fit p-2 rounded-md">
            {tag}
          </p>
          <h5 className="leading-none text-heading-xs font-semibold">{title}</h5>
          <p className="leading-none text-body-sm font-light dark:text-primary">
            {description}
          </p>
          <p className="leading-none text-body-lg font-semibold flex gap-2 items-center">
            ₹{salePrice}
            <span className="line-through text-caption text-red-700 font-normal">
              ₹{price}
            </span>
          </p>
          <div className="btn-wrapper">
            <Button
              variant="primary"
              title="Buy now"
              startIcon={<CartIcon />}
              onClick={() => {
                window.open(whatsappLink, "_blank");
              }}
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence initial={false} custom={direction}>
        {isPreviewOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setIsPreviewOpen(false);
              setCurrentIndex(0);
            }}
          >
            <motion.div
              className="relative max-w-[90vw] max-h-[90vh] min-h-[90vh] flex items-center justify-center w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  key={currentIndex}
                  src={productImages[currentIndex]}
                  alt="Product Preview"
                  className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-xl"
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                />
              </AnimatePresence>

              {/* Close Button */}
              <button
                onClick={() => {
                  setIsPreviewOpen(false);
                  setCurrentIndex(0);
                }}
                className="absolute top-0 right-0 transform -translate-y-1/2 z-10 text-text-dark w-8 h-8 md:w-10 md:h-10 bg-teritory rounded-full p-2 leading-none text-center cursor-pointer hover:scale-125 transition-transform duration-300"
              >
                <CrossIcon />
              </button>

              {/* Prev */}
              {productImages.length > 1 && (
                <button
                  onClick={handlePrev}
                  className="absolute left-2 transform -translate-y-1/2 z-10 text-text-dark w-8 h-8 md:w-10 md:h-10 bg-teritory rounded-full p-2 leading-none text-center cursor-pointer hover:scale-125 transition-transform duration-300"
                >
                  <LeftArrow />
                </button>
              )}

              {/* Next */}
              {productImages.length > 1 && (
                <button
                  onClick={handleNext}
                  className="absolute right-2 md:right-4 transform -translate-y-1/2 z-10 text-text-dark w-8 h-8 md:w-10 md:h-10 bg-teritory rounded-full p-2 leading-none text-center cursor-pointer hover:scale-125 transition-transform duration-300"
                >
                  <RightArrow />
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
