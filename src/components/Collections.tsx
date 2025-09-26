
import Slider from "react-slick";
import { LeftArrow } from "../icons/LeftArrow";
import { RightArrow } from "../icons/RightArrow";
import { useNavigate } from "react-router-dom";


const collectionData = [
  {
    title: "Chair",
    image: "https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg",
  },
  {
    title: "Table",
    image:
      "https://images.pexels.com/photos/11112740/pexels-photo-11112740.jpeg",
  },
  {
    title: "BookSelf",
    image:
      "https://images.pexels.com/photos/32177953/pexels-photo-32177953.png",
  },
  {
    title: "Sofa",
    image:
      "https://images.pexels.com/photos/11112731/pexels-photo-11112731.jpeg",
  },
  {
    title: "Lamp",
    image:
      "https://images.pexels.com/photos/29010900/pexels-photo-29010900.jpeg",
  },
  {
    title: "Chair",
    image: "https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg",
  },
  {
    title: "Table",
    image:
      "https://images.pexels.com/photos/11112740/pexels-photo-11112740.jpeg",
  },
  {
    title: "BookSelf",
    image:
      "https://images.pexels.com/photos/32177953/pexels-photo-32177953.png",
  },
  {
    title: "Sofa",
    image:
      "https://images.pexels.com/photos/11112731/pexels-photo-11112731.jpeg",
  },
  {
    title: "Lamp",
    image:
      "https://images.pexels.com/photos/29010900/pexels-photo-29010900.jpeg",
  },
];

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className={`next-btn text-text-dark w-8 h-8  md:w-10 md:h-10 bg-teritory rounded-full p-2 leading-none text-center transition-all duration-300 delay-100 hover:scale-125 cursor-pointer`}
      onClick={onClick}
    >
      <RightArrow />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className={`prev-btn text-text-dark w-8 h-8  md:w-10 md:h-10 bg-teritory rounded-full p-2 leading-none text-center transition-all duration-300 delay-100 hover:scale-125 cursor-pointer`}
      onClick={onClick}
    >   
      <LeftArrow />
    </div>
  );
}

export function Collections() {
  const navigate = useNavigate();
  const settings = {
    dots: false,
    autoplay: false,
    speed: 400,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    adaptiveHeight: true,
    initialSlide: 0,
    mobileFirst:true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    } ,
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
      },
    },
    {
      breakpoint: 480, 
      settings: {
        slidesToShow: 3, 
        slidesToScroll: 1,
      },
    },
  ]
  };
  
  return (
    <section className="pt-5 pb-5 md:pb-20 px-4">
      <div className="lg:container mx-auto">
        <div className="title-wrapper">
          <h2 className="text-heading-sm md:text-heading-md lg:text-heading-lg text-center font-semibold">
            Collections
          </h2>
        </div>
        <div className="slider-wrapper mt-6 md:mt-20">
          <div className="slider-inner ">
            <Slider {...settings}>
              {collectionData.map((item, i) => (
                <div
                  key={i}
                  className="item-wrapper text-center flex flex-col gap-5"
                  onClick={() => navigate(`/products/${item.title.toLowerCase()}`)}
                >
                  <div className="rounded-full w-15 h-15 md:w-30 md:h-30 lg:w-43 lg:h-43 overflow-hidden cursor-pointer">
                    <img
                      className=" transition-all duration-300 delay-100 hover:scale-125"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <h5 className="text-body-sm md:text-heading-xs leading-none font-medium">
                    {item.title}
                  </h5>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
