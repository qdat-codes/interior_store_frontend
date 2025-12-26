import {
  ArrowRightOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Icon } from "../../shared/components/Icon";
import { Image } from "../../shared/components/Image";
import { HoverSelect } from "../../shared/components/Select";
import { Text } from "../../shared/components/Text";
import { Button } from "../../shared/components/Button";
import logo from "../../assets/images/logo new.png";

const Header = () => {
  const navHeader = [
    {
      id: 1,
      tab: "p",
      content: "Trang chủ",
      onclick: "",
    },
    {
      id: 2,
      tab: "Select",
      content: "Sản phẩm",
      option: [
        { label: "Bàn", value: "ban" },
        { label: "Ghế", value: "ghe" },
        { label: "Tủ", value: "tu" },
      ],
    },
    {
      id: 3,
      tab: "p",
      content: "Bộ sưu tập",
      onclick: "",
    },
    {
      id: 4,
      tab: "Select",
      content: "Tư vấn",
      option: [
        { label: "Decor", value: "decor" },
        { label: "Nội thất", value: "noithat" },
      ],
    },
    {
      id: 5,
      tab: "p",
      content: "Tin tức",
      onclick: "",
    },
    {
      id: 6,
      tab: "p",
      content: "Hỗ trợ",
      onclick: "",
    },
  ];

  return (
    <>
      <div className="w-full bg-[url(/images/background-image.jpg)] bg-no-repeat  object-cover">
        <header className="lg:px-[165px] lg:pt-6 lg:flex lg:justify-between lg:items-center">
          {/* logo  */}
          <Image
            src={logo}
            className="lg:w-[71px] lg:h-[71px] lg:rounded-lg cursor-pointer object-cover transition-transform hover:scale-105 active:scale-95 duration-300"
            alt="logo page"
          />

          {/* nav */}
          <div className="lg:flex lg:justify-between lg:items-center lg:space-x-[58.6px] lg:text-[16px] text-[#FFFFFF] lg:font-medium ">
            {navHeader.map((nav, index) => {
              const isLastItem = index === navHeader.length - 1;

              return (
                <ul>
                  <li
                    key={nav.id}
                    className="transition-transform hover:scale-105 active:scale-95 duration-300"
                  >
                    {nav.tab === "p" && (
                      <a
                        href={nav.onclick}
                        className={`cursor-pointer ${
                          isLastItem ? "border-r-2 border-white lg:pr-6" : " "
                        }`}
                      >
                        {nav.content}
                      </a>
                    )}

                    {nav.tab === "Select" && (
                      <HoverSelect
                        placeholder={nav.content}
                        options={nav.option || []}
                        onChange={(e) => console.log("Hover select: ", e)}
                      ></HoverSelect>
                    )}
                  </li>
                </ul>
              );
            })}
          </div>

          {/* desktop menu */}
          <div className="lg:flex lg:justify-between lg:items-center lg:space-x-6">
            <Icon
              size={"md"}
              component={SearchOutlined}
              className="text-white "
              onClick={() => {}}
            />
            <Icon
              size={"md"}
              component={UserOutlined}
              className="text-white "
              onClick={() => {}}
            />
            <Icon
              size={"md"}
              component={ShoppingCartOutlined}
              className="text-white "
              onClick={() => {}}
            />
          </div>
        </header>

        <section>
          <div className="lg:flex lg:flex-col lg:justify-center lg:items-center lg:mt-[155px] w-auto text-white lg:space-y-3 lg:pb-64">
            <Text
              text={"Biến không gian sống của bạn thành tổ ấm hoàn hảo"}
              className="lg:w-[686px] text-center"
              weight="lg:font-bold"
              size="lg:text-[48px]"
              color="lg:!text-white"
            ></Text>

            <Text
              text={"Nội thất tinh tế, phù hợp mọi phong cách sống"}
              weight="lg:font-medium"
              color="lg:!text-white"
              size="lg:text-[20px]"
            ></Text>

            <Button
              children={"Khám phá ngay"}
              className="lg:mt-3 bg-[#D39864]! transition-transform ease-in-out duration-300 hover:scale-105 active:scale-95"
              icon={ArrowRightOutlined}
              iconPosition="right"
            ></Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
