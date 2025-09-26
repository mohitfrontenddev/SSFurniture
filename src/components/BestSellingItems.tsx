import { useNavigate } from "react-router-dom";
import { CartIcon } from "../icons/CartIcon";
import { products } from "../store/Products";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";

type BestSellingItemsProps = {
  tag: string;
  title?: string;
  description?: string;
  showButton?: boolean;
  limit?:number;
};

export function BestSellingItems({
  tag,
  title,
  description,
  showButton = true,
  limit
}: BestSellingItemsProps) {
  const navigate = useNavigate();
  const formattedTag = tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase();

  const filteredProducts = products.filter(
    (product) => product.tag.toLowerCase() === formattedTag.toLowerCase()
  );

  const productsToShow = limit ? filteredProducts.slice(0 , limit) : filteredProducts;
  return (
    <section className="pt-8 pb-8 lg:pt-10 lg:pb-20 px-4">
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
              productsToShow
                .map((item, i) => (
                  <Card
                    key={i}
                    productImage={item.productImage}
                    tag={item.tag}
                    title={item.title}
                    description={item.description}
                    salePrice={item.salePrice}
                    price={item.price}
                  />
                ))
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
    </section>
  );
}
