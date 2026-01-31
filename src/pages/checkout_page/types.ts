export interface CheckoutFormData {
    username: string
    email: string
    phone: string
    province: string
    district: string
    ward: string
    address: string
}

export interface ProductItem {
    name: string
    collection: string
    image: string
    quantity: number
    size: string
    color: string
    price: number
}

export interface CreditCardData {
    cardNumber: string
    cardholderName: string
    cvv: string
    expiryDate: string
}

export interface PromoCode {
    id: string
    code: string
    title: string
    description: string
    discountType: "shipping" | "percentage"
    discountValue: number
    expiryDate: string
    tag?: string
}

export interface ShippingMethod {
    id: string
    name: string
    icon: React.ComponentType
    price: number
    description: string
    detail: string
}
