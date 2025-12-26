import BlogSection from "../blog_section";
import CollectionProduct from "../collection_product";
import FeaturedProduct from "../featured_product";
import SuggestSection from "../suggest_section";

const ContentSection = () => {
  return (
    <>
      {/* <FeaturedProduct> */}
      <FeaturedProduct />
      {/* Collection Section */}
      <CollectionProduct />
      {/* Suggest Section*/}
      <SuggestSection />
      {/* Blog Section*/}
      <BlogSection />
      {/* Subcription Section */}
    </>
  );
};

export default ContentSection;
