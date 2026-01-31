import Footer from "@/component/footer"
import Header from "@/component/header"
import { Text, Heading } from "@/shared/components/Text"
import { Button } from "@/shared/components/Button"
import { useNavigate } from "@tanstack/react-router"
import { Route } from "@/routes/order/$id"
import { convertToVietnameseCurrency } from "@/utils/utils"
import type { Order } from "@/pages/order_page/types"
import { ProductList } from "@/component/shipping_product_list"
import { LineDivider } from "@/shared/components/Divider"
import { ArrowLeftOutlined } from "@ant-design/icons"
import { Icon } from "@/shared/components/Icon"

const OrderDetailPage = () => {
    const navigate = useNavigate()
    const { id } = Route.useParams()

    // Mock data - in real app, this would come from API based on id
    const order: Order = {
        id: id || "1",
        orderNumber: "ORD-2025-001",
        orderDate: "Thứ 3, 15 tháng 7, 2025 (GMT+7)",
        status: "delivered",
        totalAmount: 4000000,
        itemCount: 2,
        products: [
            {
                name: "Sofa phòng khách",
                collection: "Bộ sưu tập Valencia",
                image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop",
                quantity: 2,
                size: "Lớn",
                color: "Xám",
                price: 2000000,
            },
        ],
        shippingMethod: "Giao hàng nhanh (nhận hàng từ 1-2 ngày sau khi hoàn tất thanh toán)",
        paymentMethod: "Mastercard với bốn số cuối 0231",
        shippingAddress: {
            username: "Nguyễn Văn A",
            phone: "0123456789",
            address: "123 Đường ABC",
            province: "Hà Nội",
            district: "Quận 1",
            ward: "Phường 1",
        },
        promoCode: {
            code: "LANDAUSHIP",
            discount: 300000,
        },
        shippingFee: 0,
        subtotal: 4000000,
    }

    const totalPrice = order.products.reduce(
        (sum, product) => sum + product.price * product.quantity,
        0
    )

    const getStatusColor = (status: Order["status"]) => {
        switch (status) {
            case "delivered":
                return "bg-green-100 text-green-700"
            case "shipped":
                return "bg-blue-100 text-blue-700"
            case "processing":
                return "bg-yellow-100 text-yellow-700"
            case "pending":
                return "bg-gray-100 text-gray-700"
            case "cancelled":
                return "bg-red-100 text-red-700"
            default:
                return "bg-gray-100 text-gray-700"
        }
    }

    const getStatusText = (status: Order["status"]) => {
        switch (status) {
            case "delivered":
                return "Đã giao hàng"
            case "shipped":
                return "Đang giao hàng"
            case "processing":
                return "Đang xử lý"
            case "pending":
                return "Chờ xử lý"
            case "cancelled":
                return "Đã hủy"
            default:
                return status
        }
    }

    return (
        <>
            <div className="w-full font-jakarta bg-[#F5F5F7] min-h-screen">
                <div className="md:block hidden">
                    <Header />
                </div>
                <div className="md:px-3 lg:px-0 md:py-8 lg:py-12">
                    <div className="md:mx-8 lg:mx-40">
                        <div className="max-w-2xl mx-auto">
                            {/* Back Button */}
                            <button
                                onClick={() => navigate({ to: "/order" })}
                                className="flex items-center gap-2 mb-6 text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                <Icon component={ArrowLeftOutlined} size="sm" />
                                <Text
                                    text="Quay lại danh sách đơn hàng"
                                    size="text-sm"
                                    color="text-current"
                                />
                            </button>

                            <div className="bg-white rounded-lg shadow-sm p-8 md:p-6">
                                {/* Order Header */}
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                                    <div className="flex flex-col gap-2">
                                        <Heading
                                            text={`Đơn hàng ${order.orderNumber}`}
                                            level={1}
                                            className="text-2xl md:text-3xl font-bold text-gray-900"
                                        />
                                        <span
                                            className={`px-3 py-1 rounded-full text-sm font-medium w-fit ${getStatusColor(order.status)}`}
                                        >
                                            {getStatusText(order.status)}
                                        </span>
                                    </div>
                                    <Text
                                        text={convertToVietnameseCurrency(order.totalAmount)}
                                        size="text-2xl"
                                        color="text-[#D39864]"
                                        weight="font-bold"
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
                                            text={order.orderDate}
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
                                            text={order.shippingMethod}
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
                                            text={order.paymentMethod}
                                            size="text-lg"
                                            color="text-[#676E8E]"
                                        />
                                    </div>

                                    <div>
                                        <Text
                                            text="Địa chỉ giao hàng"
                                            size="text-2xl"
                                            color="text-gray-900"
                                            weight="font-bold"
                                            className="mb-3 block"
                                        />
                                        <div className="flex flex-col gap-1">
                                            <Text
                                                text={order.shippingAddress.username}
                                                size="text-lg"
                                                color="text-[#676E8E]"
                                            />
                                            <Text
                                                text={order.shippingAddress.phone}
                                                size="text-lg"
                                                color="text-[#676E8E]"
                                            />
                                            <Text
                                                text={`${order.shippingAddress.address}, ${order.shippingAddress.ward}, ${order.shippingAddress.district}, ${order.shippingAddress.province}`}
                                                size="text-lg"
                                                color="text-[#676E8E]"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <LineDivider color="#C2CAD6" thickness={1} />
                                </div>

                                {/* Product List */}
                                <ProductList products={order.products} />

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
                                        {order.promoCode && (
                                            <div className="flex justify-between items-center gap-6">
                                                <Text
                                                    text="Mã khuyến mãi"
                                                    size="text-2xl"
                                                    color="text-gray-900"
                                                    weight="font-bold"
                                                />
                                                <div className="flex flex-col items-end gap-1">
                                                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                                                        {order.promoCode.code}
                                                    </span>
                                                    <Text
                                                        text={`-${convertToVietnameseCurrency(order.promoCode.discount)}`}
                                                        size="text-lg"
                                                        color="text-[#676E8E]"
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        <div className="flex justify-between">
                                            <Text
                                                text="Vận chuyển"
                                                size="text-2xl"
                                                color="text-gray-900"
                                                weight="font-bold"
                                            />
                                            <Text
                                                text={convertToVietnameseCurrency(order.shippingFee)}
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
                                                text={convertToVietnameseCurrency(order.subtotal)}
                                                size="text-2xl"
                                                color="text-[#D39864]"
                                                weight="font-bold"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Button
                                        children="Quay lại danh sách đơn hàng"
                                        onclick={() => navigate({ to: "/order" })}
                                        className="rounded-lg w-full sm:w-auto px-6 py-3 font-medium bg-white! border border-gray-300! text-gray-700! hover:bg-gray-50!"
                                    />
                                    {order.status === "delivered" && (
                                        <Button
                                            children="Mua lại"
                                            onclick={() => {
                                                // Add to cart logic here
                                                console.log("Mua lại", order.products)
                                            }}
                                            className="rounded-lg w-full sm:w-auto px-6 py-3 font-medium bg-[#D39864]! border border-[#D39864]! text-white!"
                                        />
                                    )}
                                </div>
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

export default OrderDetailPage
