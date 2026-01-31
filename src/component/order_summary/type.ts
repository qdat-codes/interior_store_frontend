import type { CheckoutFormData, CreditCardData, PromoCode } from "@/pages/checkout_page/types"
import type { ProductItem } from "../shipping_product_list"

export interface OrderSummaryProps {
    products: ProductItem[]
    totalPrice: number
    promoDiscount: number
    shippingFee: number
    subtotal: number
    selectedPromoCode: PromoCode | null
    formData: CheckoutFormData
    selectedShippingMethod: string
    paymentMethod: string
    creditCardData: CreditCardData
    onCheckout: () => void
}
