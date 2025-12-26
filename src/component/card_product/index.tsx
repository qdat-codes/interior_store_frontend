import { Rate } from "antd";
import { Image } from "../../shared/components/Image";
import { Text } from "../../shared/components/Text";
import type { ColorOption } from "../../types";
import { Icon } from "../../shared/components/Icon";
import { HeartOutlined } from "@ant-design/icons";

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
}) => {
  return (
    <div className="bg-white lg:rounded-lg lg:shadow-md hover:shadow-lg cursor-pointer transition-shadow lg:mb-6">
      <div className="lg:p-4 lg:flex lg:flex-col lg:space-y-1 transition-transform hover:scale-105 active:scale-105 ease-in-out duration-300 lg:w-full lg:object-cover lg:rounded-md">
        <div className="relative">
          <Image src={image} className={`${classNameImage} lg:h-[294px] `} />
          <Icon
            component={HeartOutlined}
            size="sm"
            color="red"
            className="rounded-full bg-[#E9EBF0] lg:p-1 lg:absolute lg:top-3 lg:right-3 hover:scale-110 transition-transform cursor-pointer text-[#DC2626]"
          />
        </div>
        <Text
          text={title}
          size="text-[20px]"
          color="text-black"
          className={`${classNameTitle} lg:font-bold`}
        />
        <div className="lg:flex lg:flex-row lg:items-center lg:space-x-2 lg:text-[16px]">
          <Rate allowHalf defaultValue={rate} />
          <p className="lg:ml-2">{rate}</p>
          <p className="text-[#676E8E]">(93)</p>
        </div>
        <Text
          text={description}
          className={`line-clamp-2 hover:line-clamp-none transition-all lg:text-[14px] lg:font-normal lg:text-[#000000]  ${classNameDescription}`}
        ></Text>
        <div className="lg:flex lg:justify-between lg:items-center lg:w-full lg:text-[14px]">
          <div className="lg:flex lg:flex-col ">
            <p className="lg:mb-2 lg:text-[#676E8E]">Giá</p>
            <p className="lg:text-[14px] lg:font-semibold text-[#BC683A]">
              {price}
            </p>
          </div>

          <div className="lg:flex lg:flex-col">
            <p className="lg:mb-2 lg:text-[#676E8E]">Màu sắc</p>
            <div className="lg:flex lg:gap-1">
              {colors &&
                colors.map((color, index) => (
                  <div
                    key={index}
                    className="lg:w-6 lg:h-6 lg:rounded-full lg:border lg:border-gray-300 cursor-pointer hover:scale-110 transition-transform "
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
