import { CartIcon } from "../../icons/CartIcon";
import { Button } from "./Button";

interface Cards {
  productImage: string;
  tag: string;
  title: string;
  description: string;
  salePrice: number;
  price: number;
}
export function Card({
  productImage,
  tag,
  title,
  description,
  salePrice,
  price,
}: Cards) {
  
  const phoneNumber = "+919876629172"; // Your WhatsApp number
  const message = `Hi, I'm interested in the product: ${title}\n\nDescription: ${description}\nPrice: ₹${salePrice}`;
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="card-wrapper w-full md:w-[calc(50%-18px)]  lg:w-[calc(25%-18px)] flex flex-col gap-5 dark:bg-teritory/10 rounded-lg overflow-hidden shadow-md group">
      <div className="product-img  overflow-hidden">
        <img
          className="transition-all duration-300 ease-linear  group-hover:scale-110 aspect-square"
          src={productImage}
          alt={tag}
        />
      </div>
      <div className="description flex flex-col gap-5 p-4">
        <p className="text-[12px] leading-none font-medium uppercase bg-secondary text-text-dark  w-fit p-2 rounded-md">
          {tag}
        </p>
        <h5 className="leading-none text-heading-xs font-semibold ">{title}</h5>
        <p className="leading-none text-body-sm font-light dark:text-primary">
          {description}
        </p>
        <p className="leading-none text-body-lg font-semibold flex gap-2 items-center">
          ₹{salePrice}
          <span className="line-through text-caption text-red-700 font-normal-">
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
  );
}
