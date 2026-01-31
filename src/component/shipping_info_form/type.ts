import type { CheckoutFormData } from "."

export interface ShippingInfoFormProps {
    formData: CheckoutFormData
    onInputChange: (field: keyof CheckoutFormData, value: string) => void
    onProvinceChange: (value: string) => void
    selectedProvince: string
    provinceOptions: { label: string; value: string }[]
    districtOptions: { label: string; value: string }[]
    wardOptions: { label: string; value: string }[]
}
