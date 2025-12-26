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
      image: "/src/assets/images/products/product_1.jpg",
      title: "Sofa tinh xảo",
      rate: 5.0,
      price: 4500000,
      description:
        "Sofa cao cấp, thiết kế tinh xảo, mang lại sự sang trọng cho không gian sống của bạn.",
      colors: getColorHexByIds(["red", "blue", "beige", "gray"]),
    },
    {
      image: "/src/assets/images/products/product_2.jpg",
      title: "Sofa tinh xảo",
      rate: 5.0,
      price: 4500000,
      description:
        "Sofa cao cấp, thiết kế tinh xảo, mang lại sự sang trọng cho không gian sống của bạn.",
      colors: getColorHexByIds(["red", "blue", "beige", "gray"]),
    },
    {
      image: "/src/assets/images/products/product_3.jpg",
      title: "Sofa tinh xảo",
      rate: 5.0,
      price: 4500000,
      description:
        "Sofa cao cấp, thiết kế tinh xảo, mang lại sự sang trọng cho không gian sống của bạn.",
      colors: getColorHexByIds(["red", "blue", "beige", "gray"]),
    },
    {
      image: "/src/assets/images/products/product_4.jpg",
      title: "Sofa tinh xảo",
      rate: 5.0,
      price: 4500000,
      description:
        "Sofa cao cấp, thiết kế tinh xảo, mang lại sự sang trọng cho không gian sống của bạn.",
      colors: getColorHexByIds(["red", "blue", "beige", "gray"]),
    },
    {
      image: "/src/assets/images/products/product_5.jpg",
      title: "Sofa tinh xảo",
      rate: 5.0,
      price: 4500000,
      description:
        "Sofa cao cấp, thiết kế tinh xảo, mang lại sự sang trọng cho không gian sống của bạn.",
      colors: getColorHexByIds(["red", "blue", "beige", "gray"]),
    },
    {
      image: "/src/assets/images/products/product_6.jpg",
      title: "Sofa tinh xảo",
      rate: 5.0,
      price: 4500000,
      description:
        "Sofa cao cấp, thiết kế tinh xảo, mang lại sự sang trọng cho không gian sống của bạn.",
      colors: getColorHexByIds(["red", "blue", "beige", "gray"]),
    },
    {
      image: "/src/assets/images/products/product_7.jpg",
      title: "Sofa tinh xảo",
      rate: 5.0,
      price: 4500000,
      description:
        "Sofa cao cấp, thiết kế tinh xảo, mang lại sự sang trọng cho không gian sống của bạn.",
      colors: getColorHexByIds(["red", "blue", "beige", "gray"]),
    },
    {
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
    <div className="lg:px-[165px]">
      <div className="lg:my-6 lg:flex lg:justify-between lg:items-center ">
        <SectionHeader title="lựa chọn dành cho bạn" subtitle="bộ sưu tập" />

        <div className="lg:flex lg:justify-between lg:items-center lg:space-x-[33.25px] ">
          {showCategories &&
            categories.map((category) => (
              <span
                key={category.id}
                className="cursor-pointer hover:text-[#D39864] transition-all duration-500 ease-in-out whitespace-nowrap"
              >
                {category.name}
              </span>
            ))}

          <Icon
            component={
              showCategories ? MinusCircleOutlined : PlusCircleOutlined
            }
            onClick={toggleCategories}
            className="hover:text-[#D39864] cursor-pointer transition-all duration-500 ease-in-out whitespace-nowrap"
          />
        </div>
      </div>

      {/* card product */}
      <div className="lg:grid lg:grid-cols-4 lg:gap-6 lg:my-6">
        {productData.map((product, index) => {
          return (
            <CardProduct
              key={index}
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
