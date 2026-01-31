import { Image } from "@/shared/components/Image"
import type { ProductFilterRateCardProps } from "./type"
import { Text } from "@/shared/components/Text"
import { Icon } from "@/shared/components/Icon"
import { CheckCircleOutlined, LikeOutlined, MessageOutlined } from "@ant-design/icons"
import { Rate } from "antd"

const ProductFilterRateCard = ({
    avatar,
    username,
    status,
    rate,
    date,
    comment,
    image,
}: ProductFilterRateCardProps) => {
    return (
        <>
            <div className="flex flex-start flex-col gap-3 border border-[#E9EBF0] px-4 sm:px-6 py-4 rounded-lg bg-[#E9EBF0]">
                <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
                    <div className="flex items-start sm:items-center gap-3 flex-1">
                        <Image
                            src={avatar || ""}
                            alt={avatar || ""}
                            className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex-shrink-0"
                        />
                        <div className="flex flex-col gap-1 flex-1 min-w-0">
                            <div className="flex flex-start items-center gap-2 flex-wrap">
                                <Text
                                    text={username}
                                    size="text-sm sm:text-base"
                                    weight="font-medium"
                                    color="text-black"
                                    className="truncate"
                                />
                                <Icon component={CheckCircleOutlined} color="text-[#308941]" size="sm" className="flex-shrink-0" />
                                <Text
                                    text={status}
                                    size="text-xs"
                                    weight="font-normal"
                                    color="text-[#308941]"
                                    className="whitespace-nowrap"
                                />
                            </div>

                            <Rate value={rate} className="text-sm sm:text-base" />
                            <p className="text-[#8591AC] text-xs sm:text-sm font-normal">{date?.toLocaleDateString()}</p>
                        </div>
                    </div>

                    <div className="flex flex-start items-center gap-1 self-start sm:self-auto">
                        <Icon component={LikeOutlined} color="text-[#8591AC]" size="md" className="w-9 h-9 sm:w-11 sm:h-11 bg-[#F5F7F9] text-[#BC683A] rounded-full flex-shrink-0" />
                        <Icon component={MessageOutlined} color="text-[#8591AC]" size="md" className="w-9 h-9 sm:w-11 sm:h-11 bg-[#F5F7F9] text-[#BC683A] rounded-full flex-shrink-0" />
                    </div>
                </div>

                <Text text={comment} className="text-sm sm:text-base font-normal text-black" />
                <div className="flex flex-start items-center gap-2 sm:gap-3 overflow-x-auto pb-2">
                    {image?.map((img, index) => (
                        <Image
                            key={index}
                            src={img}
                            alt={img}
                            className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex-shrink-0"
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProductFilterRateCard
