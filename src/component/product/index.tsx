import { useState } from "react";
import { SortSelect } from "@/shared/components/SortSelect";
import { CardProduct } from "../card_product";
import { convertToVietnameseCurrency, getColorHexByIds } from "@/utils/utils";
import ProductSidebar from "./product_sidebar";
import AppPagination from "@/shared/components/Pagination";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  TagOutlined,
} from "@ant-design/icons";

const Product = () => {
  const [sortValue, setSortValue] = useState<string>("");

  const sortOptions = [
    { value: "a-z", label: "Ký tự từ a - z" },
    { value: "z-a", label: "Ký tự từ z - a" },
    { value: "price-asc", label: "Giá tăng dần", icon: ArrowDownOutlined },
    { value: "price-desc", label: "Giá giảm dần", icon: ArrowUpOutlined },
    { value: "sale", label: "Sản phẩm khuyến mãi", icon: TagOutlined },
    {
      value: "rating-asc",
      label: "Đánh giá tăng dần",
      icon: ArrowUpOutlined,
    },
    {
      value: "rating-desc",
      label: "Đánh giá giảm dần",
      icon: ArrowDownOutlined,
    },
  ];

  const products = [
    {
      id: 1,
      image: "/src/assets/images/products/product_1.jpg",
      title: "Sofa tinh xảo",
      rate: 5.0,
      price: 4500000,
      description:
        "Sofa cao cấp, thiết kế tinh xảo, mang lại sự sang trọng cho không gian sống của bạn.",
      colors: getColorHexByIds(["red", "blue", "beige", "gray"]),
    },
    {
      id: 2,
      image: "/src/assets/images/products/product_2.jpg",
      title: "Bàn gỗ hương phong phong phong phong",
      rate: 5.0,
      price: 4500000,
      description:
        "Sofa cao cấp, thiết kế tinh xảo, mang lại sự sang trọng cho không gian sống của bạn.",
      colors: getColorHexByIds(["red", "blue", "beige", "gray"]),
    },
    {
      id: 3,
      image: "/src/assets/images/products/product_3.jpg",
      title: "Sofa tinh xảo",
      rate: 5.0,
      price: 4500000,
      description:
        "Sofa cao cấp, thiết kế tinh xảo, mang lại sự sang trọng cho không gian sống của bạn.",
      colors: getColorHexByIds(["red", "blue", "beige", "gray"]),
    },
    {
      id: 4,
      image: "/src/assets/images/products/product_4.jpg",
      title: "Sofa tinh xảo",
      rate: 5.0,
      price: 4500000,
      description:
        "Sofa cao cấp, thiết kế tinh xảo, mang lại sự sang trọng cho không gian sống của bạn.",
      colors: getColorHexByIds(["red", "blue", "beige", "gray"]),
    },
    {
      id: 5,
      image: "/src/assets/images/products/product_5.jpg",
      title: "Sofa tinh xảo",
      rate: 5.0,
      price: 4500000,
      description:
        "Sofa cao cấp, thiết kế tinh xảo, mang lại sự sang trọng cho không gian sống của bạn.",
      colors: getColorHexByIds(["red", "blue", "beige", "gray"]),
    },
    {
      id: 6,
      image: "/src/assets/images/products/product_6.jpg",
      title: "Sofa tinh xảo",
      rate: 5.0,
      price: 4500000,
      description:
        "Sofa cao cấp, thiết kế tinh xảo, mang lại sự sang trọng cho không gian sống của bạn.",
      colors: getColorHexByIds(["red", "blue", "beige", "gray"]),
    },
    {
      id: 7,
      image: "/src/assets/images/products/product_7.jpg",
      title: "Sofa tinh xảo",
      rate: 5.0,
      price: 4500000,
      description:
        "Sofa cao cấp, thiết kế tinh xảo, mang lại sự sang trọng cho không gian sống của bạn.",
      colors: getColorHexByIds(["red", "blue", "beige", "gray"]),
    },
    {
      id: 8,
      image: "/src/assets/images/products/product_8.png",
      title: "Sofa tinh xảo",
      rate: 5.0,
      price: 4500000,
      description:
        "Sofa cao cấp, thiết kế tinh xảo, mang lại sự sang trọng cho không gian sống của bạn.",
      colors: getColorHexByIds(["red", "blue", "beige", "gray"]),
    },
  ];

  const onSortChange = (value: string) => {
    setSortValue(value);
    console.log(value);
  };

  return (
    <>
      <div className="bg-[#F5F5F7] px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-40 lg:py-20">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Sidebar - Hidden on mobile, visible on tablet and desktop */}
          <div className="hidden md:block lg:w-auto">
            <ProductSidebar />
          </div>

          <div className="flex-1 px-4 py-4 sm:px-6 sm:py-6 md:px-[24px] md:py-[16px] box-shadow-md rounded-[8px] bg-[white]">
            {/* Header section - Stack on mobile, flex on larger screens */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
              <p className="text-[12px] sm:text-[14px] font-normal text-[#8591AC]">
                Kết quả: <span className="text-black">50 sản phẩm</span>
              </p>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <SortSelect
                  value={sortValue}
                  options={sortOptions}
                  onChange={(value) => onSortChange(value)}
                />
              </div>
            </div>

            {/* Product grid - 1 col mobile, 2 col tablet, 3 col desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {products.map((product) => {
                return (
                  <CardProduct
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    title={product.title}
                    rate={product.rate}
                    price={convertToVietnameseCurrency(product.price)}
                    description={product.description}
                    colors={product.colors}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Pagination - Responsive spacing */}
        <div className="mt-6 sm:mt-8">
          <AppPagination
            total={100}
            pageSize={10}
            current={1}
            onChange={() => {}}
          />
        </div>
      </div>
    </>
  );
};

export default Product;
