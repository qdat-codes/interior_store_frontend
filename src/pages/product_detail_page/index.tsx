import Header from "@/component/header";
import Footer from "@/component/footer";
import ProductDetailCard from "@/component/product/product_detail_card";

const ProductDetailPage = () => {
  return (
    <div className="w-full min-h-screen font-jakarta flex flex-col">
      <Header />
      <main className="flex-1">
        <ProductDetailCard />
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
