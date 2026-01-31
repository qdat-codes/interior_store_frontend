import { Text, Heading } from "@/shared/components/Text"
import { Image } from "@/shared/components/Image"
import type { ProductItem } from "@/pages/checkout_page/types"

export type { ProductItem }

interface ProductListProps {
    products: ProductItem[]
}

export const ProductList = ({ products }: ProductListProps) => {
    return (
        <>
            <Heading
                text="Danh sách sản phẩm"
                level={2}
                className="text-xl font-bold mb-6 text-black"
            />
            <div className="flex flex-col gap-4 mb-6">
                {products.map((product, index) => (
                    <div key={index} className="flex gap-4">
                        <Image
                            src={product.image}
                            alt={product.name}
                            className="w-40 h-w-40 rounded object-cover shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                            <div className="flex flex-col gap-1 mb-9">
                                <Text
                                    text={product.name}
                                    size="text-base"
                                    color="text-gray-900"
                                    weight="font-semibold"
                                    className="mb-1"
                                />
                                <Text
                                    text={product.collection}
                                    size="text-sm"
                                    color="text-gray-600"
                                    className="mb-2"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                                    <span>Số lượng: </span>
                                    <Text
                                        text={product.quantity}
                                        size="text-sm"
                                        color="text-black"
                                        weight="font-normal"
                                    />
                                </div>

                                <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                                    <span>Kích thước: </span>
                                    <Text
                                        text={product.size}
                                        size="text-sm"
                                        color="text-black"
                                        weight="font-normal"
                                    />
                                </div>


                                <div className="flex items-center gap-1 text-sm text-gray-600 ">
                                    <span>Màu sắc: </span>
                                    <Text
                                        text={product.color}
                                        size="text-sm"
                                        color="text-black"
                                        weight="font-normal"
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}
