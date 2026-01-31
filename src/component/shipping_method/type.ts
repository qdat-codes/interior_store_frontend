export interface ShippingMethod {
    id: string
    name: string
    icon: React.ComponentType
    price: number
    description: string
    detail: string
}

export interface ShippingMethodSectionProps {
    isAddressComplete: boolean
    shippingMethods: ShippingMethod[]
    selectedShippingMethod: string
    onSelectShippingMethod: (methodId: string) => void
}
