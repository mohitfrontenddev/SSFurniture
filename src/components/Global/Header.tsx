import { useEffect, useState } from "react";
import logo from "../../assets/Logo.svg";
import { HamburgerIcon } from "../../icons/HamburgerIcon";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "../ui/Button";
import { PhoneIcon } from "../../icons/PhoneIcon";
import { useNavigate } from "react-router-dom";

const navLinks = ["Product", "Services", "Article", "About Us"];

export function Header() {
  const navigate = useNavigate();
  const [iconToggle, setIconToggle] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  function toggleBtn() {
    setIconToggle(!iconToggle);
  }

  // Watch for window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (iconToggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [iconToggle]);

  return (
    <header className="pt-3 pb-3 px-4 border-b-1 border-slate-600 relative z-999">
      <div className="lg:container mx-auto">
        <div className="flex justify-between items-center gap-4">
          <img
            onClick={() => navigate("/")}
            className="w-50 relative z-999 cursor-pointer"
            src={logo}
            alt="logo"
          />

          <div className="relative">
            <div
              onClick={toggleBtn}
              className="icon-wrapper w-8 h-8 text-secondary dark:text-text-dark z-999 relative md:hidden"
            >
              {iconToggle ? <CrossIcon /> : <HamburgerIcon />}
            </div>
            {(iconToggle || !isMobile) && (
              <div
                className={`navigation 
    ${
      isMobile
        ? "h-screen fixed top-0 left-0 right-0 bg-primary p-8 dark:bg-teritory"
        : ""
    } 
    flex flex-col md:flex-row gap-4 justify-center items-center 
    md:static md:h-auto`}
              >
                {navLinks.map((link, i) => (
                  <span
                    key={i}
                    className="text-body-sm cursor-pointer text-teritory dark:text-text-dark lg:text-body leading-none font-medium transition-all duration-300 hover:text-secondary"
                  >
                    {link}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="btn-wrapper flex gap-4 items-center hidden md:block">
            <Button
              variant="primary"
              title="Contact us"
              startIcon={<PhoneIcon />}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
