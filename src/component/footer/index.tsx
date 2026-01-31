import { Image } from "@/shared/components/Image";
import logo from "@/assets/images/logo new.png";
import { Icon } from "@/shared/components/Icon";
import {
  FacebookOutlined,
  HomeOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
  TikTokOutlined,
} from "@ant-design/icons";
import { LineDivider } from "../../shared/components/Divider";

const Footer = () => {
  return (
    <>
      <div className=" relative w-full min-h-[300px] bg-[url('/images/footer_background.jpg')] bg-cover bg-center text-[#FBF7F1] ">
        <div className="absolute inset-0 bg-[#000000D9]/85 z-0"></div>
        <div className="relative z-10">
          <div className=" lg:mx-[165px] md:mx-16 mx-4">
            <div className="py-[62px]">
              <div className="lg:block flex justify-center items-center">
                <Image
                  src={logo}
                  className="w-[100px] h-[100px] rounded-sm cursor-pointer object-cover transition-transform hover:scale-105 active:scale-95 duration-300 mb-[18px]"
                />
              </div>

              <div className=" lg:flex justify-between items-center ">
                <div className="flex flex-col justify-start items-start space-y-[18px] lg:max-w-[430px]">
                  <p className="lg:text-[16px] font-normal text-center">
                    HomeDesign là nền tảng thương mại nội thất thông minh, nơi
                    người dùng có thể dễ dàng xây dựng, khám phá, nhận được đánh
                    giá đáng tin cậy và được gợi ý những lựa chọn phù hợp với gu
                    thẩm mỹ cá nhân
                  </p>

                  <div className="flex">
                    <Icon
                      component={PhoneOutlined}
                      className="flex items-center justify-center w-8 h-8 rounded-full text-white bg-white/15 mr-4"
                      size="sm"
                    />

                    <div className="mr-8 text-[12px]">
                      <p className="md:text-[16px] font-bold">Liên hệ</p>
                      <p className="md:text-[14px] font-normal">
                        0123 3120 012
                      </p>
                    </div>

                    <Icon
                      component={MailOutlined}
                      className="flex items-center justify-center w-8 h-8 rounded-full text-white bg-white/15 mr-4"
                      size="sm"
                    ></Icon>
                    <div className="text-[12px]">
                      <p className="md:text-[16px] font-bold">Email</p>
                      <p className="md:text-[14px] font-normal">
                        HomeDesign@email.com
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <Icon
                      component={HomeOutlined}
                      className="flex items-center justify-center w-8 h-8 rounded-full text-white bg-white/15 mr-4"
                      size="sm"
                    />

                    <div className="mr-8 text-[12px]">
                      <p className="md:text-[16px] font-bold">Showroom</p>
                      <p className="md:text-[14px] font-normal">
                        123 Thành Thái, Phường 12, Quận 10, TP. HCM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-20 md:mx-0 mx-4 text-[12px] md:text-[16px]">
                  <div className="lg:-mt-20 mt-8">
                    <p className="mb-2  font-bold text-[#FFFFF]">Thông tin</p>
                    <ul className="list-disc marker:text-[#D39864]">
                      <li>Về chúng tôi</li>
                      <li>Đội ngũ của chúng tôi</li>
                      <li>Tuyển dụng</li>
                      <li>Tin tức</li>
                    </ul>
                  </div>

                  <div className="lg:-mt-20 mt-8">
                    <p className="mb-2 font-bold text-[#FFFFF]">Chính sách</p>
                    <ul className="list-disc marker:text-[#D39864]">
                      <li>Chính sách đổi trả</li>
                      <li>Điều khoản dịch vụ</li>
                      <li>Cookie</li>
                      <li>Hỗ trợ tiếp cận</li>
                    </ul>
                  </div>

                  <div className="lg:-mt-20 mt-8">
                    <p className="mb-2 font-bold text-[#FFFFF]">
                      Danh mục đầu tư
                    </p>
                    <ul className="list-disc marker:text-[#D39864]">
                      <li>Tư vấn trực tiếp</li>
                      <li>Nội thất theo yêu cầu</li>
                      <li>Trước & sau</li>
                      <li>Dự án</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <LineDivider className="w-full" thickness={1}></LineDivider>
          <div className="lg:mx-[165px] lg:flex lg:justify-between lg:items-center pb-[23px] md:block mt-8 md:text-[16px] text-[12px]">
            <div className="flex justify-center items-center lg:mb-0 mb-[27px]">
              <p className="mr-6">Kết nối với chúng tôi</p>
              <Icon
                component={FacebookOutlined}
                className="border-none rounded-full bg-[#D39864] w-8 h-8"
                size="md"
              ></Icon>
              <Icon
                component={InstagramOutlined}
                className="border-none rounded-full bg-[#D39864] w-8 h-8 mx-3"
                size="md"
              ></Icon>
              <Icon
                component={TikTokOutlined}
                className="border-none rounded-full bg-[#D39864] w-8 h-8"
                size="md"
              ></Icon>
            </div>

            <p className="flex justify-center items-center">
              © 2025 HomeDesign. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
