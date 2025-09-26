
interface BannerProps  {
  title : string;
  description: string;
}

export function Banner({title , description} : BannerProps) {
  const bgImage =
    "https://images.pexels.com/photos/6372907/pexels-photo-6372907.jpeg";
  return (
    <section
      className="px-4 pt-15 pb-10 md:pt-20 md:pb-20"
    >
      <div className="lg:container mx-auto  ">
        <div className=" text-center p-7 md:p-15 lg:p-30 relative rounded-lg overflow-hidden bg-no-repeat bg-cover bg-center"  style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="absolute bg-teritory/50 top-0 left-0 right-0 bottom-0"></div> 
          <div className="relative z-1 text-primary flex flex-col gap-4 max-w-4xl mx-auto">
          <h1 className="text-heading-sm md:text-heading-md lg:text-heading-xl font-bold">
           {title}
          </h1>
          <p className="text-body lg:text-body-lg">
           {description}
          </p>
          </div>
        </div>
      </div>
    </section>
  );
}
