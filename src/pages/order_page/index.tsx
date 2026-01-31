import Footer from "@/component/footer"
import Header from "@/component/header"
import { Text, Heading } from "@/shared/components/Text"
import { Button } from "@/shared/components/Button"
import { Image } from "@/shared/components/Image"
import { useNavigate } from "@tanstack/react-router"
import { convertToVietnameseCurrency } from "@/utils/utils"
import type { Order } from "./types"
import { EyeOutlined } from "@ant-design/icons"
import { Icon } from "@/shared/components/Icon"

const OrderPage = () => {
    const navigate = useNavigate()

    // Mock data - in real app, this would come from API
    const orders: Order[] = [
        {
            id: "1",
            orderNumber: "ORD-2025-001",
            orderDate: "15 tháng 7, 2025",
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
            shippingMethod: "Giao hàng nhanh",
            paymentMethod: "Mastercard",
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
        },
        {
            id: "2",
            orderNumber: "ORD-2025-002",
            orderDate: "10 tháng 7, 2025",
            status: "shipped",
            totalAmount: 2500000,
            itemCount: 1,
            products: [
                {
                    name: "Bàn trà hiện đại",
                    collection: "Bộ sưu tập Modern",
                    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop",
                    quantity: 1,
                    size: "Vừa",
                    color: "Đen",
                    price: 2500000,
                },
            ],
            shippingMethod: "Giao hàng tiêu chuẩn",
            paymentMethod: "COD",
            shippingAddress: {
                username: "Nguyễn Văn A",
                phone: "0123456789",
                address: "123 Đường ABC",
                province: "Hà Nội",
                district: "Quận 1",
                ward: "Phường 1",
            },
            shippingFee: 150000,
            subtotal: 2500000,
        },
        {
            id: "3",
            orderNumber: "ORD-2025-003",
            orderDate: "5 tháng 7, 2025",
            status: "processing",
            totalAmount: 5000000,
            itemCount: 3,
            products: [
                {
                    name: "Ghế văn phòng",
                    collection: "Bộ sưu tập Office",
                    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=200&h=200&fit=crop",
                    quantity: 3,
                    size: "Nhỏ",
                    color: "Xanh",
                    price: 1500000,
                },
            ],
            shippingMethod: "Giao hàng nhanh",
            paymentMethod: "Credit Card",
            shippingAddress: {
                username: "Nguyễn Văn A",
                phone: "0123456789",
                address: "123 Đường ABC",
                province: "Hà Nội",
                district: "Quận 1",
                ward: "Phường 1",
            },
            shippingFee: 300000,
            subtotal: 5000000,
        },
    ]

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
                        <div className="max-w-4xl mx-auto">
                            <Heading
                                text="Đơn hàng của tôi"
                                level={1}
                                className="text-2xl md:text-3xl font-bold mb-6 text-gray-900"
                            />

                            {orders.length === 0 ? (
                                <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                                    <Text
                                        text="Bạn chưa có đơn hàng nào"
                                        size="text-lg"
                                        color="text-gray-600"
                                    />
                                </div>
                            ) : (
                                <div className="flex flex-col gap-4">
                                    {orders.map((order) => (
                                        <div
                                            key={order.id}
                                            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
                                        >
                                            {/* Order Header */}
                                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4 pb-4 border-b border-gray-200">
                                                <div className="flex flex-col gap-2">
                                                    <div className="flex items-center gap-3">
                                                        <Text
                                                            text={`Đơn hàng: ${order.orderNumber}`}
                                                            size="text-lg"
                                                            color="text-gray-900"
                                                            weight="font-bold"
                                                        />
                                                        <span
                                                            className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}
                                                        >
                                                            {getStatusText(order.status)}
                                                        </span>
                                                    </div>
                                                    <Text
                                                        text={`Ngày đặt: ${order.orderDate}`}
                                                        size="text-sm"
                                                        color="text-gray-600"
                                                    />
                                                </div>
                                                <div className="flex flex-col items-end gap-2">
                                                    <Text
                                                        text={convertToVietnameseCurrency(order.totalAmount)}
                                                        size="text-xl"
                                                        color="text-[#D39864]"
                                                        weight="font-bold"
                                                    />
                                                    <Text
                                                        text={`${order.itemCount} sản phẩm`}
                                                        size="text-sm"
                                                        color="text-gray-600"
                                                    />
                                                </div>
                                            </div>

                                            {/* Order Products Preview */}
                                            <div className="mb-4">
                                                <div className="flex gap-4 overflow-x-auto">
                                                    {order.products.slice(0, 3).map((product, index) => (
                                                        <div key={index} className="flex gap-3 min-w-0 shrink-0">
                                                            <Image
                                                                src={product.image}
                                                                alt={product.name}
                                                                className="w-20 h-20 rounded object-cover shrink-0"
                                                            />
                                                            <div className="flex-1 min-w-0">
                                                                <Text
                                                                    text={product.name}
                                                                    size="text-sm"
                                                                    color="text-gray-900"
                                                                    weight="font-medium"
                                                                    className="mb-1 block truncate"
                                                                />
                                                                <Text
                                                                    text={`Số lượng: ${product.quantity}`}
                                                                    size="text-xs"
                                                                    color="text-gray-600"
                                                                />
                                                            </div>
                                                        </div>
                                                    ))}
                                                    {order.products.length > 3 && (
                                                        <div className="flex items-center justify-center w-20 h-20 rounded bg-gray-100 shrink-0">
                                                            <Text
                                                                text={`+${order.products.length - 3}`}
                                                                size="text-sm"
                                                                color="text-gray-600"
                                                                weight="font-medium"
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Order Footer */}
                                            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                                                <div className="flex-1 flex flex-col gap-1">
                                                    <Text
                                                        text={`Phương thức vận chuyển: ${order.shippingMethod}`}
                                                        size="text-sm"
                                                        color="text-gray-600"
                                                    />
                                                    <Text
                                                        text={`Phương thức thanh toán: ${order.paymentMethod}`}
                                                        size="text-sm"
                                                        color="text-gray-600"
                                                    />
                                                </div>
                                                <Button
                                                    children={
                                                        <div className="flex items-center gap-2">
                                                            <Icon component={EyeOutlined} size="sm" />
                                                            <span>Xem chi tiết</span>
                                                        </div>
                                                    }
                                                    onclick={() => navigate({ to: `/order/${order.id}` })}
                                                    className="rounded-lg px-6 py-2 font-medium bg-[#D39864]! border border-[#D39864]! text-white! whitespace-nowrap"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
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

export default OrderPage
