
import { Banner } from "../Banner";
import { Header } from "../Global/Header";
import { Footer } from "../Global/Footer";
import { GetInTouch } from "../GetInTouch";
import { BestSellingItems } from "../BestSellingItems";
import { useParams } from "react-router-dom";
import { Collections } from "../Collections";

export function ProductDetail() {
  const {tag} = useParams();

  const formattedTag = tag
  ? tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase()
  : "";

  return (
   
      <div className="main-wrapper">
        <Header />
        <Banner title={formattedTag + " Collection"} description={`Explore out top ${formattedTag} picks.`} />
        <Collections />
        <BestSellingItems tag={formattedTag} title={`${formattedTag} Products`}  description={`Browse the best ${formattedTag.toLowerCase()}s picked just for you.`} showButton={false} />
        <GetInTouch />
        <Footer />
      </div>
  );
}
