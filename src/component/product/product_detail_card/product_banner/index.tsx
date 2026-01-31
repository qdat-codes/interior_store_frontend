import { useState } from "react";
import { Text } from "@/shared/components/Text";
import { Image } from "@/shared/components/Image";
import { Button } from "@/shared/components/Button";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { LineDivider } from "@/shared/components/Divider";

const ProductBanner = () => {
  const [showAllImages, setShowAllImages] = useState(false);

  const handleShowMore = () => {
    setShowAllImages(true);
  };

  const handleClose = () => {
    setShowAllImages(false);
  };

  return (
    <>
      <div className="mb-6">
        <div className="flex flex-col gap-6 mb-6">
          {/* Text content */}
          <div className="flex flex-col justify-between items-start gap-2">
            <Text
              text="BST Valencia - Tinh tế cho phòng khách sang trọng"
              size="text-2xl sm:text-3xl lg:text-4xl"
              color="text-black"
              weight="font-bold"
            />

            <div className="md:block flex justify-center items-center ">
              <LineDivider width={"100%"} className="md:w-[600px]" thickness={4} />
            </div>

            <Text
              text="Lấy cảm hứng từ vẻ đẹp sâu sắc của thành phố Valencia, miền Đông Nam Tây Ban Nha, nơi nổi bật với nét hòa quyện độc đáo giữa kiến trúc hiện đại và cổ kính, BST Valencia mang đến một phong cách thiết kế hòa quyện giữa truyền thống và đương đại. Mỗi chi tiết đều được chăm chút tỉ mỉ nhằm tôn vinh vẻ đẹp tinh tế, tạo cảm giác ấm cúng, linh hoạt và đầy cảm xúc cho không gian sống của bạn."
              size="text-base"
              color="text-black"
              weight="font-normal"
            />


          </div>
        </div>

        {/* Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <Image
            src="/src/assets/images/products/product_1.jpg"
            alt="Banner"
            className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[411px] object-cover col-span-1 sm:col-span-2 lg:col-span-3 rounded-lg"
          />

          {/* 3 ảnh bên dưới */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <Image
                src="/src/assets/images/products/product_1.jpg"
                alt="Image 1"
                className={`${showAllImages ? "h-[250px] sm:h-[300px] md:h-[350px] lg:h-[411px]" : "h-[150px] sm:h-[180px] md:h-[200px]"} w-full object-cover col-span-1 rounded-lg transition-all duration-300`}
              />
              <Image
                src="/src/assets/images/products/product_1.jpg"
                alt="Image 2"
                className={`${showAllImages ? "h-[250px] sm:h-[300px] md:h-[350px] lg:h-[411px]" : "h-[150px] sm:h-[180px] md:h-[200px]"} w-full object-cover col-span-1 rounded-lg transition-all duration-300`}
              />
              <Image
                src="/src/assets/images/products/product_1.jpg"
                alt="Image 3"
                className={`${showAllImages ? "h-[250px] sm:h-[300px] md:h-[350px] lg:h-[411px]" : "h-[150px] sm:h-[180px] md:h-[200px]"} w-full object-cover col-span-1 rounded-lg transition-all duration-300`}
              />

              {/* Overlay với button "xem thêm" */}
              {!showAllImages && (
                <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-10 rounded-lg">
                  <Button
                    onclick={handleShowMore}
                    variant="primary"
                    className="px-6 py-3 text-white bg-[#D39864]! border-none absolute bottom-10"
                    icon={CaretDownOutlined}
                    iconPosition="right"
                  >
                    Xem thêm
                  </Button>
                </div>
              )}
            </div>

            {/* Nút đóng khi đã mở */}
            {showAllImages && (
              <div className="flex justify-center mt-4">
                <Button
                  onclick={handleClose}
                  variant="outline"
                  className="px-6 py-3 text-white bg-[#D39864]! border-none"
                  icon={CaretUpOutlined}
                  iconPosition="right"
                >
                  Thu gọn
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductBanner;
