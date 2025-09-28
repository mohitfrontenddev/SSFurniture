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
      <Banner
        title="Upgrade Your Workspace"
        description="Choose modern office furniture that blends functionality with design."
      />
      <BestSellingItems
        showButton={true}
        limit={8}
        tag="Office Furniture"
        title="Office Furniture"
        description="Ergonomic and stylish office furniture to boost productivity."
      />

      <Banner
        title="Comfort in Every Seat"
        description="Discover colorful and reliable plastic chairs for every space."
      />
      <BestSellingItems
        showButton={true}
        limit={8}
        tag="Plastic Chair"
        title="Plastic Chairs"
        description="Durable and lightweight plastic chairs suitable for indoor and outdoor use."
      />
      <Banner
        title="Sleep Like Never Before"
        description="Choose from our premium range of mattresses designed for restful nights."
      />
      <BestSellingItems
        showButton={true}
        limit={8}
        tag="Mattress"
        title="Mattresses"
        description="Find the perfect mattress for a comfortable and restful sleep."
      />
      <Banner
        title="Style Meets Comfort"
        description="Modern and luxurious sofas to elevate your living room aesthetics."
      />
      <BestSellingItems
        showButton={true}
        limit={8}
        tag="Sofa"
        title="Sofa"
        description="Comfortable 3-seater sofa with soft fabric."
      />
      <Banner
        title="Dine in Elegance"
        description="Strong, stylish dining tables perfect for family time."
      />
      <BestSellingItems
        showButton={true}
        limit={8}
        tag="Dining Table"
        title="Wooden Dining Table"
        description="Classic wooden dining table seating 6 people."
      />
      <Banner
        title="Timeless Wooden Designs"
        description="Bring warmth and tradition into your home with wooden classics."
      />
      <BestSellingItems
        showButton={true}
        limit={8}
        tag="Wooden Furniture"
        title="Wooden Furniture"
        description="Classic wooden furniture crafted with quality materials."
      />

      <Banner
        title="Space-saving Sleep Solutions"
        description="Comfortable beds that fold away when not in use — perfect for modern homes."
      />
      <BestSellingItems
        showButton={true}
        limit={8}
        tag="Folding Bed"
        title="Folding Bed"
        description="Easy to fold and carry bed for guests."
      />

      <Banner
        title="Safe & Spacious Storage"
        description="Choose steel almirahs that keep your essentials secure with style."
      />
      <BestSellingItems
        showButton={true}
        limit={8}
        tag="Steel Almirah"
        title="Steel Almirahs"
        description="Secure and spacious steel almirahs for your storage needs."
      />

      <Banner
        title="Tables That Work Anywhere"
        description="Multipurpose plastic tables — strong, stylish, and easy to move."
      />
      <BestSellingItems
        showButton={true}
        limit={8}
        tag="Plastic Table"
        title="Plastic Table"
        description="Durable plastic table for indoor/outdoor use."
      />

      <CtaBanner />
      <GetInTouch />
      <Benifits />
      <Footer />
    </div>
  );
}
