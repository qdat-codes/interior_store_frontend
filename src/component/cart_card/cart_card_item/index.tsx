import { Icon } from "@/shared/components/Icon"
import { Image } from "@/shared/components/Image"
import InputNumber from "@/shared/components/InputNumber"
import { Text } from "@/shared/components/Text"
import { convertToVietnameseCurrency } from "@/utils/utils"
import { DeleteOutlined } from "@ant-design/icons"
import { Flex } from "antd"
import type { CartCardItemProps } from "./type"
import { useNavigate } from "@tanstack/react-router"


const CartCardItem = ({ name, image, price, amount, color, size, key }: CartCardItemProps) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex flex-start justify-between items-center">
                <div className="flex flex-col gap-2">
                    <Flex gap={12} align="flex-start" className="py-2">
                        <Image
                            src={image}
                            alt={name}
                            objectFit="object-cover"
                            className="rounded shrink-0 w-20 h-20"
                        />
                        <Flex vertical gap={4} className="min-w-0" onClick={() => {
                            navigate({
                                to: `/product/${key}`,
                            });
                        }}>
                            <Text
                                text={name}
                                size="text-xl"
                                color="text-gray-900"
                                weight="font-bold"
                                className="leading-tight cursor-pointer"
                            />

                            <div className="flex gap-2">
                                <Text
                                    text={size}
                                    size="text-sm"
                                    color="text-[#676E8E]"
                                    weight="font-normal"
                                    className="leading-tight border-r border-gray-300 pr-2"
                                />

                                <Text
                                    text={color}
                                    size="text-sm"
                                    color="text-[#676E8E]"
                                    weight="font-normal"
                                    className="leading-tight"
                                />

                            </div>
                            <Text
                                text={convertToVietnameseCurrency(price)}
                                size="text-sm"
                                color="text-orange-500"
                                weight="font-medium"
                                className='mt-3'
                            />
                        </Flex>
                    </Flex>
                </div>

                <div className="flex flex-col items-end gap-2">
                    <Icon component={DeleteOutlined}></Icon>
                    <InputNumber defaultValue={amount} min={0} max={100}></InputNumber>
                </div>
            </div>
        </>
    )
}

export default CartCardItem
