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
      <div className="lg:px-[165px] lg:py-6">
        <SectionHeader subtitle="tin tức và xu hướng" title="blog hôm nay" />

        <div className="columns-1 md:columns-3 lg:columns-3v gap-6 space-y-4">
          {images?.map((img, index) => (
            <div key={index} className="break-inside-avoid mb-4">
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
                  className="absolute lg:bottom-[90px] lg:left-6 lg:text-[14px] lg:text-[#FFFFFF] font-normal"
                ></Text>
                <Text
                  text={img.title}
                  className="absolute lg:bottom-14 lg:left-6 lg:text-[20px] lg:text-[#FFFFFF] font-bold"
                ></Text>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex justify-center items-center">
        <Image src={slide_1} className="object-contain w-full lg:h-[640px]" />

        <div className="absolute lg:top-20 flex justify-center items-center flex-col">
          <Text
            text="THAM GIA NGAY"
            className="lg:text-[16px] lg:font-normal lg:text-[#000000 lg:mb-2"
          />
          <Text
            text="ĐĂNG KÝ NHẬN TIN TỪ CHÚNG TÔI"
            className="lg:text-[36px] lg:font-bold lg:text-[#000000] lg:mb-8"
          />
          <div className="flex justify-between items-center space-x-2 lg:mb-8">
            <Avatar image={avatar_1} className="lg:w-8 lg:h-8" />
            <Avatar image={avatar_2} className="lg:w-8 lg:h-8 lg:-ml-3" />
            <Avatar image={avatar_3} className="lg:w-8 lg:h-8 lg:-ml-3" />
            <Avatar image={avatar_4} className="lg:w-8 lg:h-8 lg:-ml-3" />

            <p className="lg:text-[24px] font-semibold text-[#CA7D45]">
              {formatNumber(3000)}+
            </p>
            <p className="lg:text-[14px] font-bold text-[#000000]">
              thành viên
            </p>
          </div>

          <div className="flex justify-between items-center space-x-6">
            <Input
              placeholder="Điền địa chỉ email của bạn"
              className="border-[#8591AC]"
            ></Input>
            <Button
              children={"Đăng ký"}
              className="lg:text-[16px] text-[#FBF7F1] font-semibold bg-[#D39864]!"
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSection;
