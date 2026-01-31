import { Image } from "../../shared/components/Image";
import { Text } from "../../shared/components/Text";
import { SectionHeader } from "../section_header";
import { Button } from "../../shared/components/Button";
import Avatar from "../../shared/components/Avatar";
import { formatNumber } from "../../utils/utils";
import { Input } from "../../shared/components/Input";
import slide_1 from "@/assets/images/products/slide_1.jpg";
import avatar_1 from "@/assets/images/avatar/avatar_1.jpg";
import avatar_2 from "@/assets/images/avatar/avatar_2.jpg";
import avatar_3 from "@/assets/images/avatar/avatar_3.jpg";
import avatar_4 from "@/assets/images/avatar/avatar_4.jpg";

const BlogSection = () => {
  const images = [
    {
      image: "/src/assets/images/products/blog_1.jpg",
      title: "Bộ sưu tập phòng khách 2025",
      subTitle: "Cảm hứng trang trí",
    },
    {
      image: "/src/assets/images/products/blog_4.jpg",
      title: "Xu hướng thiết kế nội thất 2025",
      subTitle: "Tin tức & xu hướng",
    },
    {
      image: "/src/assets/images/products/blog_2.jpg",
      title: "Tận dụng tối đa ánh sáng để ",
      subTitle: "Thiết kế phòng khách với ánh sáng tự nhiên",
    },
    {
      image: "/src/assets/images/products/blog_5.jpg",
      title: "6 nguyên tắc giúp tự phối màu",
      subTitle: "Tips trang trí hiện đại",
    },
    {
      image: "/src/assets/images/products/blog_3.jpg",
      title: "Bộ sưu tập phòng khách 2025",
      subTitle: "Không gian sống đậm dấu ấn nghệ thuật",
    },
    {
      image: "/src/assets/images/products/blog_6.jpg",
      title: "Bộ sưu tập phòng khách 2025",
      subTitle: "Phòng khách tối giản cho gia chủ yêu sự tinh tế",
    },
  ];
  return (
    <>
      <div className="lg:mx-[165px] md:my-6 md:mx-16 mx-4">
        <div className="md:text-start text-center">
          <SectionHeader subtitle="tin tức và xu hướng" title="blog hôm nay" />
        </div>

        <div className="columns-1 lg:columns-3 gap-6 space-y-4">
          {images?.map((img, index) => (
            <div key={index} className="break-inside-avoid mb-4 md:mb-6">
              <div className=" relative overflow-hidden shadow-md bg-white">
                <div className="group relative overflow-hidden rounded-lg">
                  {/* Image */}
                  <Image
                    src={img.image}
                    alt={img.title}
                    className="w-full h-auto object-cover
                        transition-transform duration-500
                        group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div
                    className="
                    absolute inset-0
                    bg-black/10
                    transition-colors duration-500
                    group-hover:bg-black/25
                    "
                  />
                </div>

                <Text
                  text={img.subTitle}
                  className="absolute bottom-[90px] left-6 text-[14px] text-[#FFFFFF]! font-normal"
                />
                <Text
                  text={img.title}
                  className="absolute bottom-14 left-6 text-[20px] text-[#FFFFFF]! font-bold"
                />
                <Text
                  text={"Xem chi tiết"}
                  className="absolute bottom-6 left-6 text-[16px] text-[#FFFFFF]! font-normal lg:hidden md:block border-b-2 cursor-pointer md:hover:text-[#D39864]!"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative  flex justify-center items-center">
        <Image
          src={slide_1}
          className="object-cover w-full md:h-full h-[359px]"
        />

        <div className="absolute md:top-20 top-6 flex justify-center items-center flex-col pb-6">
          <Text
            text="THAM GIA NGAY"
            className="md:text-[16px] text-[12px] font-normal text-[#000000] mb-2"
          />
          <Text
            text="ĐĂNG KÝ NHẬN TIN TỪ CHÚNG TÔI"
            className="md:text-[36px] text-[20px] font-bold text-[#000000] mb-8"
          />
          <div
            className="flex justify-center items-center space-x-2 md:mb-8 mb-0 flex-wrap
          "
          >
            <Avatar image={avatar_1} />
            <Avatar image={avatar_2} />
            <Avatar image={avatar_3} />
            <Avatar image={avatar_4} />

            <p className="text-[24px] font-semibold text-[#CA7D45]">
              {formatNumber(3000)}+
            </p>
            <p className="text-[14px] font-bold text-[#000000]">thành viên</p>
          </div>

          <div className="lg:flex lg:justify-center lg:items-center space-x-6 md:mt-0 mt-3">
            <Input
              placeholder="Điền địa chỉ email của bạn"
              className="border-[#8591AC] lg:mb-0 mx-4 mb-3"
            />
            <div className="flex justify-center items-center">
              <Button
                children={"Đăng ký"}
                className="text-[16px] text-[#FBF7F1] font-semibold bg-[#D39864]!"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSection;
