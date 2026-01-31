import Footer from "@/component/footer"
import Header from "@/component/header"
import { Text, Heading } from "@/shared/components/Text"
import { Button } from "@/shared/components/Button"
import { CheckCircleOutlined } from "@ant-design/icons"
import { useNavigate } from "@tanstack/react-router"
import { convertToVietnameseCurrency } from "@/utils/utils"
import type { ProductItem, PromoCode } from "@/pages/checkout_page/types"
import { Icon } from "@/shared/components/Icon"
import { LineDivider } from "@/shared/components/Divider"
import { ProductList } from "@/component/shipping_product_list"

const CheckoutDonePage = () => {
    const navigate = useNavigate()

    // Mock data - in real app, this would come from route params or API
    const orderDate = new Date().toLocaleString("vi-VN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "Asia/Ho_Chi_Minh",
    }) + " (GMT+7)"

    const email = "changbeoquemientay@gmail.com"
    const shippingMethod = "Giao hàng nhanh (nhận hàng từ 1-2 ngày sau khi hoàn tất thanh toán)"
    const paymentMethod = "Mastercard với bốn số cuối 0231"

    const products: ProductItem[] = [
        {
            name: "Sofa phòng khách",
            collection: "Bộ sưu tập Valencia",
            image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop",
            quantity: 2,
            size: "Lớn",
            color: "Xám",
            price: 2000000,
        },
    ]

    const totalPrice = products.reduce((sum, product) => sum + product.price * product.quantity, 0)
    const selectedPromoCode: PromoCode | null = {
        id: "1",
        code: "LANDAUSHIP",
        title: "Giảm 100% phí vận chuyển",
        description: "Cung cấp bởi HomeDesign",
        discountType: "shipping",
        discountValue: 100,
        expiryDate: "21.07.2025",
        tag: "Lần đầu đặt hàng",
    }
    const promoDiscount = 300000
    const shippingFee = 0
    const subtotal = totalPrice - promoDiscount + shippingFee

    return (
        <>
            <div className="w-full font-jakarta bg-[#F5F5F7] min-h-screen">
                <div className="md:block hidden">
                    <Header />
                </div>
                <div className="md:px-3 lg:px-0 md:py-8 lg:py-12">
                    <div className="md:mx-8 lg:mx-40">
                        <div className="max-w-2xl mx-auto">
                            <div className="bg-white rounded-lg shadow-sm p-8 md:p-6">
                                {/* Success Icon and Title */}
                                <div className="flex flex-col items-center mb-8 gap-6">
                                    <Icon component={CheckCircleOutlined} size="xl" color="text-green-500" />
                                    <Heading
                                        text="Cảm ơn bạn đã đặt hàng"
                                        level={1}
                                        className="text-2xl md:text-4xl font-bold text-gray-900 text-center"
                                    />
                                    <Text
                                        text={`Xác nhận đơn hàng đã được gửi đến email: ${email}`}
                                        size="text-sm md:text-base"
                                        color="text-[#676E8E]"
                                        className="text-center"
                                    />
                                </div>

                                {/* Order Details */}
                                <div className="flex flex-col gap-6 mb-8">
                                    <div>
                                        <Text
                                            text="Ngày đặt hàng:"
                                            size="text-2xl"
                                            color="text-gray-900"
                                            weight="font-bold"
                                            className="mb-3 block"
                                        />
                                        <Text
                                            text={orderDate}
                                            size="text-lg"
                                            color="text-[#676E8E]"
                                        />
                                    </div>

                                    <div>
                                        <Text
                                            text="Phương thức vận chuyển"
                                            size="text-2xl"
                                            color="text-gray-900"
                                            weight="font-bold"
                                            className="mb-3 block"
                                        />
                                        <Text
                                            text={shippingMethod}
                                            size="text-lg"
                                            color="text-[#676E8E]"
                                        />
                                    </div>

                                    <div>
                                        <Text
                                            text="Phương thức thanh toán"
                                            size="text-2xl"
                                            color="text-gray-900"
                                            weight="font-bold"
                                            className="mb-3 block"
                                        />
                                        <Text
                                            text={paymentMethod}
                                            size="text-lg"
                                            color="text-[#676E8E]"
                                        />
                                    </div>
                                </div>


                                <div className="mb-6">
                                    <LineDivider color="#C2CAD6" thickness={1} />
                                </div>

                                {/* Product List */}
                                <ProductList products={products} />

                                <div className="flex justify-between mb-6">
                                    <Text
                                        text="Tạm tính"
                                        size="text-2xl"
                                        color="text-gray-900"
                                        weight="font-bold"
                                    />
                                    <Text
                                        text={convertToVietnameseCurrency(totalPrice)}
                                        size="text-2xl"
                                        color="text-[#D39864]"
                                        weight="font-bold"
                                    />
                                </div>

                                {/* Order Summary */}
                                <div className="border-t border-gray-200 pt-6 mb-8">
                                    <div className="flex flex-col gap-6">

                                        <div className="flex justify-between items-center gap-6">
                                            <Text
                                                text="Mã khuyến mãi"
                                                size="text-2xl"
                                                color="text-gray-900"
                                                weight="font-bold"
                                            />
                                            <div className="flex flex-col items-end gap-1">
                                                {selectedPromoCode && (
                                                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                                                        {selectedPromoCode.code}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex justify-between">
                                            <Text
                                                text="Vận chuyển"
                                                size="text-2xl"
                                                color="text-gray-900"
                                                weight="font-bold"
                                            />
                                            <Text
                                                text={convertToVietnameseCurrency(shippingFee)}
                                                size="text-lg"
                                                color="text-[#676E8E]"
                                                weight="font-medium"
                                            />
                                        </div>

                                        <div className="flex justify-between pt-3 border-t border-gray-200">
                                            <Text
                                                text="Tổng cộng"
                                                size="text-2xl"
                                                color="text-[#000000]"
                                                weight="font-bold"
                                            />
                                            <Text
                                                text={convertToVietnameseCurrency(subtotal)}
                                                size="text-2xl"
                                                color="text-[#D39864]"
                                                weight="font-bold"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Continue Shopping Button */}
                                <Button
                                    children="Tiếp tục mua sắm"
                                    onclick={() => navigate({ to: "/" })}
                                    className="rounded-lg w-full py-4 font-bold text-lg bg-[#D39864]! border border-[#D39864]! text-white!"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:block hidden">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default CheckoutDonePage
