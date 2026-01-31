import Footer from "@/component/footer"
import Header from "@/component/header"
import { useState } from "react"
import { ClockCircleOutlined, CarOutlined } from "@ant-design/icons"
import { ShippingInfoForm } from "@/component/shipping_info_form"
import { ShippingMethodSection } from "@/component/shipping_method"
import { PaymentMethodSection } from "@/component/payment_method"
import { ProductList } from "@/component/shipping_product_list"
import { PromoCodeSection } from "@/component/promo_code"
import { OrderSummary } from "@/component/order_summary"
import { PromoCodePopup } from "@/component/promo_code_popup"
import { useNavigate } from "@tanstack/react-router"
import type { CheckoutFormData, ProductItem, CreditCardData, PromoCode, ShippingMethod } from "./types"
import { LineDivider } from "@/shared/components/Divider"

const CheckoutPage = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState<CheckoutFormData>({
        username: "",
        email: "",
        phone: "",
        province: "",
        district: "",
        ward: "",
        address: "",
    })

    const [paymentMethod, setPaymentMethod] = useState<string>("cod")
    const [promoCode, setPromoCode] = useState<string>("")
    const [selectedProvince, setSelectedProvince] = useState<string>("")
    const [selectedShippingMethod, setSelectedShippingMethod] = useState<string>("")
    const [showPromoPopup, setShowPromoPopup] = useState<boolean>(false)
    const [selectedPromoCode, setSelectedPromoCode] = useState<PromoCode | null>(null)
    const [creditCardData, setCreditCardData] = useState<CreditCardData>({
        cardNumber: "",
        cardholderName: "",
        cvv: "",
        expiryDate: "",
    })

    // Mock data - replace with actual data from cart/state
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

    // Calculate promo discount
    const calculatePromoDiscount = () => {
        if (!selectedPromoCode) return 0
        if (selectedPromoCode.discountType === "shipping") {
            return shippingFee
        } else if (selectedPromoCode.discountType === "percentage") {
            return (totalPrice * selectedPromoCode.discountValue) / 100
        }
        return 0
    }

    // Calculate shipping fee based on selected method
    const shippingFee = selectedShippingMethod === "fast" ? 300000 : selectedShippingMethod === "standard" ? 150000 : 0
    const promoDiscount = calculatePromoDiscount()
    const subtotal = totalPrice - promoDiscount + shippingFee

    // Check if all address fields are filled
    const isAddressComplete: boolean = Boolean(formData.province && formData.district && formData.ward)

    // Mock shipping methods
    const shippingMethods: ShippingMethod[] = [
        {
            id: "fast",
            name: "Giao hàng nhanh",
            icon: CarOutlined,
            price: 300000,
            description: "Nhanh nhất",
            detail: "Nhận hàng từ 1-3 ngày sau khi hoàn tất thanh toán",
        },
        {
            id: "standard",
            name: "Giao hàng tiêu chuẩn",
            icon: ClockCircleOutlined,
            price: 150000,
            description: "Thường được chọn nhất",
            detail: "Nhận hàng từ 5-7 ngày sau khi hoàn tất thanh toán",
        },
    ]

    // Mock promo codes
    const availablePromoCodes: PromoCode[] = [
        {
            id: "1",
            code: "LANDAUSHIP",
            title: "Giảm 100% phí vận chuyển",
            description: "Cung cấp bởi HomeDesign",
            discountType: "shipping",
            discountValue: 100,
            expiryDate: "21.07.2025",
            tag: "Lần đầu đặt hàng",
        },
        {
            id: "2",
            code: "LANDAUTHANHTOAN",
            title: "Giảm 10% cho đơn hàng đầu tiên",
            description: "Cung cấp bởi HomeDesign",
            discountType: "percentage",
            discountValue: 10,
            expiryDate: "21.07.2025",
            tag: "Lần đầu đặt hàng",
        },
    ]

    // Mock options - replace with actual API data
    const provinceOptions = [
        { label: "Hà Nội", value: "hanoi" },
        { label: "Hồ Chí Minh", value: "hcm" },
        { label: "Đà Nẵng", value: "danang" },
    ]

    const districtOptions = selectedProvince
        ? [
            { label: "Quận 1", value: "q1" },
            { label: "Quận 2", value: "q2" },
            { label: "Quận 3", value: "q3" },
        ]
        : []

    const wardOptions = [
        { label: "Phường 1", value: "p1" },
        { label: "Phường 2", value: "p2" },
        { label: "Phường 3", value: "p3" },
    ]

    const handleInputChange = (field: keyof CheckoutFormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const handleProvinceChange = (value: string) => {
        setSelectedProvince(value)
        handleInputChange("province", value)
        // Reset district and ward when province changes
        handleInputChange("district", "")
        handleInputChange("ward", "")
    }

    const handleCreditCardDataChange = (data: Partial<CreditCardData>) => {
        setCreditCardData((prev) => ({ ...prev, ...data }))
    }

    const handleApplyPromoCode = () => {
        const promo = availablePromoCodes.find((p) => p.code === promoCode.toUpperCase())
        if (promo) {
            setSelectedPromoCode(promo)
        }
    }

    const handleSelectPromoCode = (promo: PromoCode) => {
        setSelectedPromoCode(promo)
        setPromoCode(promo.code)
    }

    const handleCheckout = () => {
        console.log("Checkout completed", { formData, paymentMethod, products })
        navigate({ to: "/checkout/done" })
    }

    return (
        <>
            <div className="w-full font-jakarta bg-[#F5F5F7] min-h-screen">
                <div className="md:block hidden">
                    <Header />
                </div>
                <div className="md:px-3 lg:px-0 md:py-8 lg:py-12">
                    <div className="md:mx-8 lg:mx-40">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Left Column */}
                            <div className="lg:col-span-1 flex flex-col gap-6">
                                <ShippingInfoForm
                                    formData={formData}
                                    onInputChange={(field, value) => handleInputChange(field as keyof CheckoutFormData, value)}
                                    onProvinceChange={handleProvinceChange}
                                    selectedProvince={selectedProvince}
                                    provinceOptions={provinceOptions}
                                    districtOptions={districtOptions}
                                    wardOptions={wardOptions}
                                />

                                <ShippingMethodSection
                                    isAddressComplete={isAddressComplete}
                                    shippingMethods={shippingMethods}
                                    selectedShippingMethod={selectedShippingMethod}
                                    onSelectShippingMethod={setSelectedShippingMethod}
                                />

                                <PaymentMethodSection
                                    paymentMethod={paymentMethod}
                                    onPaymentMethodChange={setPaymentMethod}
                                    creditCardData={creditCardData}
                                    onCreditCardDataChange={handleCreditCardDataChange}
                                />
                            </div>

                            {/* Right Column */}
                            <div className="lg:col-span-1">
                                <div className="bg-white rounded-lg shadow-sm p-4 sticky top-6">
                                    <ProductList products={products} />

                                    <div className="mb-6">
                                        <LineDivider color="#C2CAD6" thickness={1} />
                                    </div>

                                    <PromoCodeSection
                                        promoCode={promoCode}
                                        selectedPromoCode={selectedPromoCode}
                                        onPromoCodeChange={(code) => {
                                            setPromoCode(code)
                                            if (!code) {
                                                setSelectedPromoCode(null)
                                            }
                                        }}
                                        onApplyPromoCode={handleApplyPromoCode}
                                        onShowPromoPopup={() => setShowPromoPopup(true)}
                                    />

                                    <OrderSummary
                                        products={products}
                                        totalPrice={totalPrice}
                                        promoDiscount={promoDiscount}
                                        shippingFee={shippingFee}
                                        subtotal={subtotal}
                                        selectedPromoCode={selectedPromoCode}
                                        formData={formData}
                                        selectedShippingMethod={selectedShippingMethod}
                                        paymentMethod={paymentMethod}
                                        creditCardData={creditCardData}
                                        onCheckout={handleCheckout}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:block hidden">
                    <Footer />
                </div>
            </div>

            <PromoCodePopup
                isOpen={showPromoPopup}
                onClose={() => setShowPromoPopup(false)}
                promoCode={promoCode}
                onPromoCodeChange={setPromoCode}
                availablePromoCodes={availablePromoCodes}
                selectedPromoCode={selectedPromoCode}
                onSelectPromoCode={handleSelectPromoCode}
            />
        </>
    )
}

export default CheckoutPage
