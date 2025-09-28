export function CardSkeleton() {
    return (
      <div className="card-wrapper w-full md:w-[calc(50%-18px)] lg:w-[calc(25%-18px)] flex flex-col gap-5 rounded-lg overflow-hidden shadow-md bg-gray-200 animate-pulse">
        <div className="product-img aspect-square bg-gray-300 rounded"></div>
        <div className="description flex flex-col gap-5 p-4">
          <div className="h-5 w-16 bg-gray-300 rounded"></div> {/* tag */}
          <div className="h-6 w-3/4 bg-gray-300 rounded"></div> {/* title */}
          <div className="h-4 w-full bg-gray-300 rounded"></div> {/* description line 1 */}
          <div className="h-4 w-5/6 bg-gray-300 rounded"></div> {/* description line 2 */}
          <div className="h-6 w-20 bg-gray-300 rounded"></div> {/* price */}
          <div className="h-10 w-24 bg-gray-300 rounded"></div> {/* button */}
        </div>
      </div>
    );
  }
  