import { LineDivider } from "@/shared/components/Divider"
import { Text } from "@/shared/components/Text"
import { StarFilled } from "@ant-design/icons"
import { Rate } from "antd"

export const ProductRating = () => {
    return (
        <>
            <div className="flex flex-col gap-6 border-b border-[#8591AC] mb-6">
                <div className="flex flex-col justify-between items-start gap-2">
                    <Text
                        text="Đánh giá"
                        size="text-2xl sm:text-3xl lg:text-4xl"
                        color="text-black"
                        weight="font-bold"
                    />

                    <div className="md:block flex justify-center items-center ">
                        <LineDivider width={"100%"} className="md:w-[600px]" thickness={4} />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x my-6">
                    <div className="flex flex-col gap-1 text-black justify-center items-center border-b sm:border-b-0 sm:border-r border-[#8591AC] pb-4 sm:pb-0 sm:pr-6">
                        <Text text="Tổng đánh giá" size="text-lg sm:text-xl" weight="font-medium" color="text-black" />
                        <Text text="345" size="text-2xl sm:text-3xl lg:text-4xl" weight="font-bold" />
                        <Text text="3000 lượt thích sản phẩm" size="text-sm sm:text-base" weight="font-normal" color="text-[#8591AC]" className="text-center" />
                    </div>

                    <div className="flex flex-col gap-1 text-black justify-center items-center border-b sm:border-b-0 sm:border-r border-[#8591AC] pb-4 sm:pb-0 sm:pr-6">
                        <Text text="Tổng quan" size="text-lg sm:text-xl" weight="font-medium" color="text-black" />
                        <div className="flex justify-center items-center gap-1.5 flex-wrap">
                            <Text text="5.0" size="text-2xl sm:text-3xl lg:text-4xl" weight="font-bold" />
                            <Rate value={5}></Rate>
                        </div>
                        <Text text="Tổng lượt đánh giá trong năm nay" size="text-sm sm:text-base" weight="font-normal" color="text-[#8591AC]" className="text-center" />
                    </div>

                    <div className="flex flex-col gap-1 text-black flex-start justify-center pt-4 sm:pt-0">
                        <div className="flex gap-3 flex-start items-center">
                            <StarFilled style={{ color: "#FF9534" }} />
                            <Text text="5" size="text-base" color="text-black" weight="font-normal" />
                            <LineDivider width="150px" color="#65C376" thickness={4} />
                            <Text text="300" size="text-base" color="text-black" weight="font-normal" />
                        </div>

                        <div className="flex gap-3 items-center">
                            <StarFilled style={{ color: "#FF9534" }} />
                            <Text text="4" size="text-base" color="text-black" weight="font-normal" />
                            <LineDivider width="30px" color="#E1BA90" thickness={4} />
                            <Text text="40" size="text-base" color="text-black" weight="font-normal" />
                        </div>

                        <div className="flex gap-3 flex-start items-center">
                            <StarFilled style={{ color: "#FF9534" }} />
                            <Text text="3" size="text-base" color="text-black" weight="font-normal" />
                            <LineDivider width="10px" color="#9DA9BD" thickness={4} />
                            <Text text="5" size="text-base" color="text-black" weight="font-normal" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductRating
