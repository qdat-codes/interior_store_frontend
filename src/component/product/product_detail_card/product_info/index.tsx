import { Button } from "@/shared/components/Button";
import { Image } from "@/shared/components/Image";
import InputNumber from "@/shared/components/InputNumber";
import { Text } from "@/shared/components/Text";
import { convertToVietnameseCurrency, getColorHexByIds } from "@/utils/utils";
import { ShoppingCartOutlined, ShoppingOutlined } from "@ant-design/icons";
import { useNavigate } from "@tanstack/react-router";

const ProductInfo = () => {
  const navigate = useNavigate();
  const colors = getColorHexByIds(["red", "blue", "beige", "gray"]);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 sm:gap-6">
        <div className="rounded-lg lg:col-span-3 w-full lg:w-auto">
          <Image
            src={"/src/assets/images/products/product_1.jpg"}
            objectFit="object-cover"
            className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[508px]"
          />
          <div className="flex items-center gap-2 sm:gap-4 my-4 overflow-x-auto pb-2">
            <Image
              src={"/src/assets/images/products/product_1.jpg"}
              objectFit="object-cover"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex-shrink-0"
            />
            <Image
              src={"/src/assets/images/products/product_1.jpg"}
              objectFit="object-cover"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex-shrink-0"
            />
            <Image
              src={"/src/assets/images/products/product_1.jpg"}
              objectFit="object-cover"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex-shrink-0"
            />
            <Image
              src={"/src/assets/images/products/product_1.jpg"}
              objectFit="object-cover"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex-shrink-0"
            />
            <Image
              src={"/src/assets/images/products/product_1.jpg"}
              objectFit="object-cover"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex-shrink-0"
            />
          </div>
        </div>
        <div className="lg:col-span-4 flex flex-col flex-start gap-3 sm:gap-4">
          <Text
            text={"Sofa phòng khách"}
            size="text-2xl sm:text-3xl lg:text-4xl"
            color="text-black"
            weight="font-bold"
          />
          <Text
            text={convertToVietnameseCurrency(2000000)}
            size="text-2xl sm:text-3xl lg:text-4xl"
            color="text-[#BC683A]"
            weight="font-bold"
          />
          <Text
            text={
              "Lấy cảm hứng từ vẻ đẹp sâu sắc của thành phố Valencia, miền Đông Nam Tây Ban Nha, nơi nổi bật với nét hòa quyện độc đáo giữa kiến trúc hiện đại và cổ kính, BST Valencia mang đến một phong cách thiết kế hòa quyện giữa truyền thống và đương đại. Mỗi chi tiết đều được chăm chút tỉ mỉ nhằm tôn vinh vẻ đẹp tinh tế, tạo cảm giác ấm cúng, linh hoạt và đầy cảm xúc cho không gian sống của bạn."
            }
            size="text-base"
            color="text-[#000000]"
            weight="font-normal"
          />
          <Text
            text={"Kích thước: "}
            size="text-lg sm:text-xl"
            color="text-[#000000]"
            weight="font-medium"
          />
          <div className="flex flex-start gap-3 sm:gap-6 flex-wrap">
            <Button
              children={"Lớn"}
              className="bg-white! border border-[#D39864]! text-[#D39864]! rounded-lg text-sm sm:text-base"
            />
            <Button
              children={"Vừa"}
              className="bg-white! border border-[#D39864]! text-[#D39864]! rounded-lg text-sm sm:text-base"
            />
            <Button
              children={"Nhỏ"}
              className="bg-white! border border-[#D39864]! text-[#D39864]! rounded-lg text-sm sm:text-base"
            />
          </div>
          <Text
            text={"Màu sắc: "}
            size="text-lg sm:text-xl"
            color="text-[#000000]"
            weight="font-medium"
          />
          <div className="flex flex-start gap-3 sm:gap-6 flex-wrap">
            {colors &&
              colors.map((color, index) => (
                <div
                  key={index}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 cursor-pointer hover:scale-110 transition-transform "
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
          </div>
          <div className="flex flex-start items-center gap-3 sm:gap-6 flex-wrap">
            <Text
              text="Số lượng: "
              size="text-lg sm:text-xl"
              color="text-[#000000]"
              weight="font-medium"
            />
            <InputNumber min={1} max={100} defaultValue={1} className="w-20 sm:w-24" />
          </div>
          <div className="flex flex-start items-center gap-3 sm:gap-6 flex-col sm:flex-row">
            <Button
              children={"Thêm vào giỏ"}
              icon={ShoppingOutlined}
              className="bg-white! border border-[#D39864]! text-[#D39864]! rounded-lg w-full sm:w-auto text-sm sm:text-base"
            />
            <Button
              children={"Mua ngay"}
              icon={ShoppingCartOutlined}
              className="bg-[#D39864]! border border-[#D39864]! text-white! rounded-lg w-full sm:w-auto text-sm sm:text-base"
              onclick={() => navigate({ to: "/cart" })}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
