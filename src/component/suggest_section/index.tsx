import PinterestMasonry from "../masonry_css_grid";
import { SectionHeader } from "../section_header";

const SuggestSection = () => {
  const images = [
    "/src/assets/images/products/slide_1.jpg",
    "/src/assets/images/products/slide_8.jpg",
    "/src/assets/images/products/slide_15.jpg",

    "/src/assets/images/products/slide_2.jpg",
    "/src/assets/images/products/slide_9.jpg",
    "/src/assets/images/products/slide_16.jpg",

    "/src/assets/images/products/slide_17.jpg",
    "/src/assets/images/products/slide_8.jpg",
    "/src/assets/images/products/slide_9.jpg",
    "/src/assets/images/products/slide_10.jpg",
    "/src/assets/images/products/slide_11.jpg",
    "/src/assets/images/products/slide_12.jpg",
    "/src/assets/images/products/slide_13.jpg",
    "/src/assets/images/products/slide_14.jpg",
    "/src/assets/images/products/slide_15.jpg",
    "/src/assets/images/products/slide_16.jpg",
    "/src/assets/images/products/slide_17.jpg",
    "/src/assets/images/products/slide_18.jpg",
    "/src/assets/images/products/slide_19.jpg",
    "/src/assets/images/products/slide_20.jpg",
  ];
  return (
    <div>
      <div className="lg:pt-6 lg:px-[165px]">
        <SectionHeader
          title="gợi ý cho căn phòng của bạn"
          subtitle="các tác phẩm của chúng tôi"
        />
      </div>
      <div>
        <PinterestMasonry images={images} />
      </div>
    </div>
  );
};

export default SuggestSection;
