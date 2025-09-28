import { motion, useAnimation } from "framer-motion";
import type { Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation , Autoplay  } from "swiper/modules";

import { LeftArrow } from "../icons/LeftArrow";
import { RightArrow } from "../icons/RightArrow";

const collectionData = [
  { title: "Mattress", image: "/src/assets/matteress.jpeg" },
  { title: "Plastic Chair", image: "/src/assets/plastic-chair-2.jpeg" },
  { title: "Office Furniture", image: "/src/assets/chair.jpeg" },
  { title: "Folding Bed", image: "/src/assets/folding-bed.webp" },
  { title: "Wooden Furniture", image: "/src/assets/sofa.webp" },
  { title: "Steel Almirah", image: "/src/assets/steel-almirah.webp" },
  { title: "Dining Table", image: "/src/assets/dining-table.webp" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
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

export function Collections() {
  const navigate = useNavigate();
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [inView, controls]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 480);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.section
      className="pt-5 pb-5 md:pb-20 px-4"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="lg:container mx-auto">
        <div className="title-wrapper">
          <h2 className="text-heading-sm md:text-heading-md lg:text-heading-lg text-center font-semibold">
            Collections
          </h2>
        </div>

        <div className="slider-wrapper mt-6 md:mt-20 relative">
          {/* Custom navigation buttons (hidden on mobile) */}
          {!isMobile && (
            <>
              <div className="swiper-button-prev absolute top-1/2 -left-6 transform -translate-y-1/2 z-10 text-text-dark w-8 h-8 md:w-10 md:h-10 bg-teritory rounded-full p-2 leading-none text-center cursor-pointer hover:scale-125 transition-transform duration-300">
                <LeftArrow />
              </div>
              <div className="swiper-button-next absolute top-1/2 -right-6 transform -translate-y-1/2 z-10 text-text-dark w-8 h-8 md:w-10 md:h-10 bg-teritory rounded-full p-2 leading-none text-center cursor-pointer hover:scale-125 transition-transform duration-300">
                <RightArrow />
              </div>
            </>
          )}

          <Swiper
            modules={[Navigation , Autoplay]}
            loop={true}
            autoplay={{
              delay: 2500, // Delay between slides in milliseconds
              disableOnInteraction: false, // Continue autoplay even after user interaction
            }}
            spaceBetween={20}
            navigation={
              !isMobile
                ? {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }
                : false
            }
            breakpoints={{
              0: { slidesPerView: 3 },
              480: { slidesPerView: 3 },
              600: { slidesPerView: 4 },
              800: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
          >
            {collectionData.map((item, i) => (
              <SwiperSlide key={i}>
                <div
                  className="item-wrapper text-center flex flex-col gap-3 items-center justify-center cursor-pointer"
                  onClick={() =>
                    navigate(
                      `/products/${item.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`
                    )
                  }
                >
                  <div className="rounded-full w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 overflow-hidden border-1 border-slate-900/[0.08] ">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover object-center w-full h-full transition-transform duration-300 ease-in-out hover:scale-110 "
                    />
                  </div>
                  <h5 className="text-caption md:text-heading-xs font-medium">
                    {item.title}
                  </h5>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.section>
  );
}
