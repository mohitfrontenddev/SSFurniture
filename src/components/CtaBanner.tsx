import { PhoneIcon } from "../icons/PhoneIcon";
import { Button } from "./ui/Button";

export function CtaBanner() {
  const bgImage =
    "https://images.pexels.com/photos/6987719/pexels-photo-6987719.jpeg";
  return (
    <section className="cta-banner px-4 py-10 md:py-20">
      <div className="lg:container mx-auto">
        <div
          className="p-6 md:p-10 lg:p-20 relative rounded-lg overflow-hidden bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute bg-secondary/60 top-0 left-0 right-0 bottom-0"></div>
          <div className="content-wrapper relative z-1 flex flex-col gap-3 md:gap-5 max-w-3xl">
            <h2 className="text-text-dark leading-tight text-heading-sm md:text-heading-md lg:text-heading-lg font-semibold">
              Transform Your Home with Furniture
            </h2>
            <p className="text-body-sm md:text-body-lg font-light text-primary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe assumenda rerum culpa numquam soluta vitae doloremque, laborum accusantium dolore veritatis?
            </p>
            <div className="btn-wrapper">
              <Button
                variant="secondary"
                title="Contact us"
                startIcon={<PhoneIcon />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
