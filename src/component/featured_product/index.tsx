import { Icon } from "../../shared/components/Icon";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { CardProduct } from "../card_product";
import { convertToVietnameseCurrency } from "../../utils/utils";
import { getColorHexByIds } from "../../utils/utils";
import { SectionHeader } from "../section_header";
import { useState } from "react";

const FeaturedProduct = () => {
  const categories = [
    { id: "tu", name: "Tủ" },
    { id: "ban&ghe", name: "Bàn & Ghế" },
    { id: "sofa", name: "Sofa" },
    { id: "rem", name: "Rèm cửa" },
  ];

  const productData = [
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

  const [showCategories, setShowCategories] = useState(true);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <div className="lg:mx-[165px] md:mx-16 my-6 mx-4">
      <div className="lg:flex lg:justify-between lg:items-center md:block ">
        <div className="text-center md:text-start">
          <SectionHeader
            title="lựa chọn dành cho bạn"
            subtitle="sản phẩm nổi bật"
          />
        </div>

        <div className="flex items-center mb-6">
          <div
            className={`
          flex items-center
          md:overflow-hidden
          overflow-x-scroll
          transition-all duration-500 ease-in-out
          ${
            showCategories
              ? "opacity-100 translate-x-0 max-w-[1000px]"
              : "opacity-0 -translate-x-6 max-w-0"
          }
    `}
          >
            {categories.map((category) => (
              <span
                key={category.id}
                className="
                cursor-pointer
                hover:text-[#D39864]
                whitespace-nowrap
                mr-[33.25px]
           "
              >
                {category.name}
              </span>
            ))}
          </div>

          <Icon
            component={
              showCategories ? MinusCircleOutlined : PlusCircleOutlined
            }
            onClick={toggleCategories}
            className="hover:text-[#D39864] cursor-pointer transition-all duration-300"
          />
        </div>
      </div>

      {/* card product */}
      <div className="grid lg:grid-cols-4 lg:gap-6 lg:my-6 md:grid-cols-2 md:gap-x-24 md:gap-y-6">
        {productData.map((product) => {
          return (
            <CardProduct
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              rate={product.rate}
              description={product.description}
              price={convertToVietnameseCurrency(product.price)}
              colors={product.colors}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedProduct;
