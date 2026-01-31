import ProductBanner from "./product_banner";
import ProductFilterRating from "./product_filter_rate";
import ProductInfo from "./product_info";
import ProductOverview from "./product_overview";
import ProductRating from "./product_rating";

const ProductDetailCard = () => {
  return (
    <>
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-40 bg-[white] py-8 sm:py-12 md:py-16 lg:py-20">
        <ProductInfo />
        <ProductOverview />
        <ProductBanner />
        <ProductRating />
        <ProductFilterRating />
      </div>
    </>
  );
};

export default ProductDetailCard;
