import { Text, Heading } from "@/shared/components/Text"
import { Button } from "@/shared/components/Button"
import { convertToVietnameseCurrency } from "@/utils/utils"
import type { OrderSummaryProps } from "./type"



export const OrderSummary = ({
    products,
    totalPrice,
    promoDiscount,
    shippingFee,
    subtotal,
    selectedPromoCode,
    formData,
    selectedShippingMethod,
    paymentMethod,
    creditCardData,
    onCheckout,
}: OrderSummaryProps) => {
    const isFormValid =
        formData.username &&
        formData.email &&
        formData.phone &&
        formData.province &&
        formData.district &&
        formData.ward &&
        formData.address &&
        selectedShippingMethod &&
        (paymentMethod !== "credit" ||
            (creditCardData.cardNumber &&
                creditCardData.cardholderName &&
                creditCardData.cvv &&
                creditCardData.expiryDate))

    return (
        <div className="border-t border-gray-200 pt-6">
            <Heading
                text="Tóm tắt đơn hàng"
                level={3}
                className="text-lg font-bold mb-4 text-black"
            />
            <div className="flex flex-col gap-3 mb-6">
                <div className="flex justify-between">
                    <Text text="Số lượng" size="text-sm" color="text-gray-600" />
                    <Text
                        text={products.reduce((sum, p) => sum + p.quantity, 0).toString()}
                        size="text-sm"
                        color="text-gray-900"
                        weight="font-medium"
                    />
                </div>
                <div className="flex justify-between">
                    <Text text="Tổng giá" size="text-sm" color="text-gray-600" />
                    <Text
                        text={convertToVietnameseCurrency(totalPrice)}
                        size="text-sm"
                        color="text-gray-900"
                        weight="font-medium"
                    />
                </div>
                <div className="flex justify-between">
                    <Text text="Mã khuyến mãi" size="text-sm" color="text-gray-600" />
                    <div className="flex items-center gap-2">
                        {selectedPromoCode && (
                            <Text
                                text={`-${convertToVietnameseCurrency(promoDiscount)}`}
                                size="text-sm"
                                color="text-green-600"
                                weight="font-medium"
                            />
                        )}
                        {!selectedPromoCode && (
                            <Text
                                text={convertToVietnameseCurrency(0)}
                                size="text-sm"
                                color="text-gray-900"
                                weight="font-medium"
                            />
                        )}
                    </div>
                </div>
                <div className="flex justify-between">
                    <Text text="Vận chuyển" size="text-sm" color="text-gray-600" />
                    <Text
                        text={convertToVietnameseCurrency(shippingFee)}
                        size="text-sm"
                        color="text-gray-900"
                        weight="font-medium"
                    />
                </div>
                <div className="flex justify-between pt-3 border-t border-gray-200">
                    <Text text="Tổng" size="text-lg" color="text-gray-900" weight="font-bold" />
                    <Text
                        text={convertToVietnameseCurrency(subtotal)}
                        size="text-lg"
                        color="text-gray-900"
                        weight="font-bold"
                    />
                </div>
            </div>
            <Button
                children={
                    <div className="flex items-center justify-between w-full">
                        <span>Hoàn tất</span>
                        <span>{convertToVietnameseCurrency(subtotal)}</span>
                    </div>
                }
                onclick={onCheckout}
                className={`rounded-lg w-full py-4 font-bold text-lg ${isFormValid
                    ? "bg-[#D39864]! border border-[#D39864]! text-white!"
                    : "bg-gray-300! border border-gray-300! text-gray-600!"
                    }`}
                disabled={!isFormValid}
            />
        </div>
    )
}
