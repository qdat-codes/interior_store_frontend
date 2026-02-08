import { Image } from "../../shared/components/Image";
import { Text } from "../../shared/components/Text";
import type { ColorOption } from "../../types";
import { Icon } from "../../shared/components/Icon";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import { Link } from "@tanstack/react-router";

export const CardProduct = ({
  image = "",
  classNameImage = "",
  title = "",
  classNameTitle = "",
  rate = 0,
  description = "",
  classNameDescription = "",
  price = "",
  colors = [],
  id = "",
}: {
  image?: string;
  classNameImage?: string;
  title?: string;
  classNameTitle?: string;
  rate?: number;
  description?: string;
  classNameDescription?: string;
  price?: string;
  colors?: ColorOption[];
  id?: string | number;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow mb-6">
      <div className="p-4 flex flex-col space-y-1">
        <div className="relative group overflow-hidden rounded-md">
          <Image
            src={image}
            className={`w-full md:h-[294px] transition-transform duration-300 group-hover:scale-105 ${classNameImage}`}
          />

          <Icon
            component={HeartOutlined}
            size="sm"
            className="
            absolute top-3 right-3
            rounded-full
            bg-[#E9EBF0]
            p-1
            text-[#DC2626]!
            cursor-pointer
            z-20
            hover:scale-110
            transition-transform
    "
          />

          <div
            className="
            hidden lg:flex flex-row flex-nowrap
            absolute inset-0
            bg-black/40
            items-center justify-center gap-3
            opacity-0
            pointer-events-none
            group-hover:opacity-100
            group-hover:pointer-events-auto
            transition-all duration-300
            cursor-pointer
    "
          >
            <button className="cursor-pointer border-2 border-[#D39864] bg-white px-2 py-1.5 rounded-md flex flex-row items-center gap-1 whitespace-nowrap transition-all ease-in-out duration-300 hover:scale-105 active:scale-95">
              <Icon
                component={ShoppingCartOutlined}
                size="sm"
                color="text-[#D39864]"
              />
              <span className="font-medium text-[#D39864] text-[12px]">Thêm vào giỏ</span>
            </button>
            <Link
              to="/product/$id"
              params={{ id: id?.toString() || "" }}
              className="text-[12px] font-medium cursor-pointer bg-[#D39864] text-white px-2 py-[7px] rounded-md whitespace-nowrap transition-all ease-in-out duration-300 hover:scale-105 active:scale-95"
            >
              Xem chi tiết
            </Link>
          </div>
        </div>

        <Text
          text={title}
          size="text-[20px]"
          color="text-[#000000]"
          className={`${classNameTitle} line-clamp-1 hover:line-clamp-none font-bold!`}
        />
        <div className="flex flex-row items-center text-[16px]">
          <Rate allowHalf defaultValue={rate} />
          <p className="mx-2">{rate}</p>
          <p className="text-[#676E8E]">(93)</p>
        </div>
        <Text
          text={description}
          className={`line-clamp-2 hover:line-clamp-none transition-all lg:text-[14px] lg:font-normal lg:text-[#000000]  ${classNameDescription}`}
        ></Text>
        <div className="flex justify-between items-center w-full text-[14px]">
          <div className="flex flex-col ">
            <p className="mb-2 lg:text-[#676E8E]">Giá</p>
            <p className="lg:text-[14px] lg:font-semibold text-[#BC683A]">
              {price}
            </p>
          </div>

          <div className="flex flex-col">
            <p className="mb-2 text-[#676E8E]">Màu sắc</p>
            <div className="flex gap-1">
              {colors &&
                colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-6 h-6 rounded-full border border-gray-300 cursor-pointer hover:scale-110 transition-transform "
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
            </div>
          </div>
        </div>

        <div
          className="
            flex lg:hidden
            items-center justify-between gap-3
            mt-2 
    "
        >
          <button className="border-2 border-[#D39864] bg-white px-3 py-1.5 rounded-md flex justify-between items-center gap-1">
            <Icon
              component={ShoppingCartOutlined}
              size="sm"
              color="text-[#D39864]"
            ></Icon>
            <p className="font-medium text-[#D39864] text-[12px]  ">
              Thêm vào giỏ
            </p>
          </button>

          <Link
            to="/product/$id"
            params={{ id: id?.toString() || "" }}
            className="text-[12px] font-medium cursor-pointer bg-[#D39864] text-white px-4 py-[7px] rounded-md"
          >
            Xem chi tiết
          </Link>
        </div>
      </div>
    </div>
  );
};
