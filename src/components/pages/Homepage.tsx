import ReactLenis from "lenis/react";
import { Header } from "../Global/Header";
import { Banner } from "../Banner";
import { Collections } from "../Collections";
import { BestSellingItems } from "../BestSellingItems";
import { CtaBanner } from "../CtaBanner";
import { GetInTouch } from "../GetInTouch";
import { Benifits } from "../Benifits";
import { Footer } from "../Global/Footer";

export function Homepage() {
  return (
    <div className="main-wrapper">
      <Header />
      <Banner
        title="Explore Our Exclusive Collection"
        description="Browse through a wide range of premium furniture tailored to fit your style and comfort."
      />

      <Collections />
      <BestSellingItems
        showButton={true}
        limit={8}
        tag="Chair"
        title="Best Chairs"
        description="Discover our collection of comfortable and stylish chairs perfect for any room or office setup."
      />
      <BestSellingItems
        showButton={true}
        limit={8}
        tag="Sofa"
        title="Cozy Sofas"
        description="Explore a variety of sofas designed to bring comfort and elegance to your living space."
      />
      <BestSellingItems
        showButton={true}
        limit={8}
        tag="Table"
        title="Elegant Tables"
        description="Find tables crafted with quality materials, ideal for dining, studying, or outdoor use."
      />
      <BestSellingItems
        showButton={true}
        limit={8}
        tag="Lamp"
        title="Stylish Lamps"
        description="Brighten up your space with our range of modern and classic lamps for every corner."
      />
      <BestSellingItems
        showButton={true}
        limit={8}
        tag="BookSelf"
        title="Functional Bookshelves"
        description="Organize your books and decor with our durable and stylish bookshelf designs."
      />

      <CtaBanner />
      <Banner
        title="Ready to Transform Your Space?"
        description="Discover more styles and exclusive offers to make your home truly yours."
      />

      <GetInTouch />
      <Benifits />
      <Footer />
    </div>
  );
}
