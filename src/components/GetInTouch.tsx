import { LocationIcon } from "../icons/LocationIcon";
import { GoogleMap } from "./GoogleMap";

export function GetInTouch() {
  return (
    <section className="pt-10 md:pt-15">
      <div className="flex flex-col gap-14">
        <div className="lg:container mx-auto flex gap-6 md:gap-14 px-4 flex-col md:flex-row">
          <div className="title-wrapper flex flex-col gap-3 md:w-1/2 w-full">
            <h2 className="text-heading-sm md:text-heading-md lg:text-heading-lg font-semibold">Get In Touch</h2>
            <p className="text-body-sm lg:text-body-lg font-light dark:text-primary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              perspiciatis, dolore nisi voluptatibus odio at hic nesciunt.
            </p>
          </div>
          <div className="flex md:w-1/2 gap-6 w-full flex-col md:flex-row">
            <div className="flex flex-col gap-4 ">
              <div className="w-12 h-12 bg-teritory text-text-dark rounded-full flex items-center justify-center">
                <LocationIcon />
              </div>
              <div className="desc">
                <h5 className="font-semibold">Our Address</h5>
                <p className="text-caption font-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, nulla?</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 ">
              <div className="w-12 h-12 bg-teritory text-text-dark rounded-full flex items-center justify-center">
                <LocationIcon />
              </div>
              <div className="desc">
                <h5 className="font-semibold">Our Address</h5>
                <p className="text-caption font-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, nulla?</p>
              </div>
            </div>
          </div>
        </div>
        <div className="map-wrapper">
            <GoogleMap />
        </div>
      </div>
    </section>
  );
}
