import { Button } from "@/shared/components/Button"
import { Text } from "@/shared/components/Text"
import { useState } from "react"
import ProductFilterRateCard from "./product_filter_rate_card"

const ProductFilterRating = () => {
    const filterOptions
        = [
            {
                label: "Tất cả",
                value: null
            },
            {
                label: "Đã mua hàng",
                value: null
            },
            {
                label: "Có hình ảnh",
                value: null
            },
            {
                label: "5 sao",
                value: 5
            },
            {
                label: "4 sao",
                value: 4
            },
            {
                label: "3 sao",
                value: 3
            },
            {
                label: "2 sao",
                value: 2
            },
            {
                label: "1 sao",
                value: 1
            }
        ]


    const reviews = [
        {
            avatar: "/src/assets/images/products/product_1.jpg",
            username: "John Doe",
            status: "Đã mua hàng",
            rate: 5,
            date: "2024-01-01",
            comment: "Sản phẩm rất tốt",
            image: ["/src/assets/images/products/product_1.jpg", "/src/assets/images/products/product_1.jpg"]
        },
        {
            avatar: "/src/assets/images/products/product_2.jpg",
            username: "Jane Doe",
            status: "Đã mua hàng",
            rate: 4,
            date: "2024-01-01",
            comment: "Sản phẩm rất tốt",
            image: ["/src/assets/images/products/product_1.jpg", "/src/assets/images/products/product_1.jpg"]
        },
        {
            avatar: "/src/assets/images/products/product_3.jpg",
            username: "John Doe",
            status: "Đã mua hàng",
            rate: 3,
            date: "2024-01-01",
            comment: "Sản phẩm rất tốt",
            image: ["/src/assets/images/products/product_1.jpg", "/src/assets/images/products/product_1.jpg"]
        },
        {
            avatar: "/src/assets/images/products/product_4.jpg",
            username: "John Doe",
            status: "Đã mua hàng",
            rate: 0,
            date: "",
            comment: "",
            image: ["/src/assets/images/products/product_1.jpg", "/src/assets/images/products/product_1.jpg"]
        },

    ]
    const [selectedFilter, setSelectedFilter] = useState<string[]>([])

    const handleSelectFilter = (value: number | null, label: string) => {
        const filterKey = value !== null ? String(value) : label
        setSelectedFilter((prev) => prev.includes(filterKey) ? prev.filter((v) => v !== filterKey) : [...prev, filterKey])
    }

    return (
        <>
            <div className="flex flex-col sm:flex-row flex-start items-start sm:items-center gap-3 sm:gap-3">
                <Text text="Lọc theo đánh giá" size="text-xl sm:text-2xl" weight="font-bold" color="text-black" className="whitespace-nowrap" />
                <div className="flex flex-wrap gap-2 sm:gap-3">
                    {filterOptions.map((option) => {
                        const filterKey = option.value !== null ? String(option.value) : option.label
                        const isSelected = selectedFilter.includes(filterKey)
                        return (
                            <Button
                                key={option.label}
                                children={option.label}
                                variant="custom"
                                className={`py-1.5 px-2 sm:px-3 rounded-lg font-semibold text-sm sm:text-base border border-[#8591AC] ${isSelected
                                    ? "bg-[#E9E9FA] text-[#007BFF]"
                                    : "bg-white text-[#8591AC]"
                                    }`}
                                onclick={() => handleSelectFilter(option.value, option.label)}
                            />
                        )
                    })}
                </div>
            </div>
            <div className="flex flex-col gap-6 flex-start mt-6">
                {
                    reviews.map((review) => (
                        <ProductFilterRateCard
                            key={review.username}
                            avatar={review.avatar}
                            username={review.username}
                            status={review.status}
                            rate={review.rate}
                            date={review.date ? new Date(review.date) : new Date()}
                            comment={review.comment}
                            image={review.image}
                        />
                    ))
                }
            </div>

        </>
    )
}

export default ProductFilterRating
