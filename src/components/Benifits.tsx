import { TruckIcon } from "../icons/TruckIcon";

const benifits = [
  {
    icon: <TruckIcon />,
    title: "FREE AND FAST DELIVERY",
    desc: "Free delivery for all orders over $140",
  },
  {
    icon: <TruckIcon />,
    title: "FREE AND FAST DELIVERY",
    desc: "Free delivery for all orders over $140",
  },
  {
    icon: <TruckIcon />,
    title: "FREE AND FAST DELIVERY",
    desc: "Free delivery for all orders over $140",
  },
];
export function Benifits() {
  return (
    <section className="px-4 py-10 bg-text-dark dark:bg-teritory/20">
      <div className="lg:container mx-auto">
        <div className="flex flex-col md:flex-row justify-center gap-10">
          {benifits.map((item, i) => (
            <div
              key={i}
              className="flex justify-center gap-5 flex-col items-center text-center w-full md:w-1/3"
            >
              <div className="icon-wrapper">
                <div className="icon-wrapper w-20 h-20 bg-secondary/40 rounded-full flex justify-center items-center">
                  <div className="bg-teritory w-15 h-15 rounded-full flex justify-center items-center">
                    <div className="icon-wrap w-8 h-8 text-3xl text-center text-text-dark">
                      {item.icon}
                    </div>
                  </div>
                </div>
              </div>
              <div className="title-wrapper flex flex-col justify-center text-center items-center">
                <h5 className="text-body-sm">{item.title}</h5>
                <p className="text-caption">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
