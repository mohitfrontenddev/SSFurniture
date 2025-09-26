import logo from "../../assets/Logo.svg";

const navLinks = [
  {
    title: "Products",
    links: ["New Arrivals", "Best Selling", "Home Decor", "Kitchen Set"],
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
  return (
    <div className="footer px-4 bg-dark pt-14 pb-8 text-text-dark">
      <div className="lg:container mx-auto">
        <div className="flex flex-col gap-4 justify-between md:flex-row">
          <div className="flex flex-col gap-4 md:w-1/3 lg:w-1/4">
            <img className="w-50 md:w-60" src={logo} alt="logo" />
            <p className="text-body-sm md:text-body  font-light">
              Lalasia is digital agency that help you make better experience
              iaculis cras in.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:justify-end md:gap-20 md:w-8/12 lg:w-9/12 lg:gap-30">
            {navLinks.map((links, i) => (
              <div key={i} className="flex flex-col gap-4">
                <h5 className="text-body-lg lg:text-heading-xs leading-none font-medium">
                  {links.title}
                </h5>
                <div className="flex flex-col gap-4">
                  {links.links.map((link, i) => (
                    <span
                      className="text-body-sm leading-none font-light transition-all duration-300 hover:text-secondary cursor-pointer"
                      key={i}
                    >
                      {link}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="copyright pt-4 md:pt-8 mt-4 md:mt-12 border-t-1 border-primary/10 md:text-center">
          <p className="leading-none text-caption font-extralight">&copy; 2025 Sonu Steel Furniture Talwara. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
