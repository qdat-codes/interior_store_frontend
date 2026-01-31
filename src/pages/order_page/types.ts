import type { ProductItem } from "@/pages/checkout_page/types"

export interface Order {
    id: string
    orderNumber: string
    orderDate: string
    status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
    totalAmount: number
    itemCount: number
    products: ProductItem[]
    shippingMethod: string
    paymentMethod: string
    shippingAddress: {
        username: string
        phone: string
        address: string
        province: string
        district: string
        ward: string
    }
    promoCode?: {
        code: string
        discount: number
    }
    shippingFee: number
    subtotal: number
}
