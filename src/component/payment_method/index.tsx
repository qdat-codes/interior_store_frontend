import { Input } from "@/shared/components/Input"
import { Text, Heading } from "@/shared/components/Text"
import { WalletOutlined, CreditCardOutlined, BankOutlined } from "@ant-design/icons"
import type { CreditCardData } from "@/pages/checkout_page/types"
import type { PaymentMethodSectionProps } from "./type"
export type { CreditCardData }

export const PaymentMethodSection = ({
    paymentMethod,
    onPaymentMethodChange,
    creditCardData,
    onCreditCardDataChange,
}: PaymentMethodSectionProps) => {
    return (
        <div className="bg-white rounded-lg shadow-sm p-4">
            <Heading
                text="Phương thức thanh toán"
                level={2}
                className="text-xl font-bold mb-6 text-black"
            />
            <div className="flex flex-col gap-4">
                <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50">
                    <input
                        type="radio"
                        name="payment"
                        value="cod"
                        checked={paymentMethod === "cod"}
                        onChange={(e) => onPaymentMethodChange(e.target.value)}
                        className="w-5 h-5"
                    />
                    <WalletOutlined style={{ fontSize: 20, color: '#4B5563' }} />
                    <Text
                        text="Thanh toán khi nhận hàng (COD)"
                        size="text-base"
                        color="text-gray-700"
                        weight="font-medium"
                    />
                </label>
                <div>
                    <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50">
                        <input
                            type="radio"
                            name="payment"
                            value="credit"
                            checked={paymentMethod === "credit"}
                            onChange={(e) => onPaymentMethodChange(e.target.value)}
                            className="w-5 h-5"
                        />
                        <CreditCardOutlined style={{ fontSize: 20, color: '#4B5563' }} />
                        <Text
                            text="Credit card - Visa/Master/JCB"
                            size="text-base"
                            color="text-gray-700"
                            weight="font-medium"
                        />
                    </label>
                    {paymentMethod === "credit" && (
                        <div className="ml-8 mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                            <div className="flex flex-col gap-4">
                                <div>
                                    <Text
                                        text="Số thẻ"
                                        size="text-sm"
                                        color="text-gray-700"
                                        weight="font-medium"
                                        className="mb-2 block"
                                    />
                                    <Input
                                        placeholder="0123 3120 0312 0231"
                                        value={creditCardData.cardNumber}
                                        onChange={(e) =>
                                            onCreditCardDataChange({ cardNumber: e.target.value })
                                        }
                                        className="w-full border-gray-300"
                                        width="100%"
                                    />
                                </div>
                                <div>
                                    <Text
                                        text="Tên chủ thẻ"
                                        size="text-sm"
                                        color="text-gray-700"
                                        weight="font-medium"
                                        className="mb-2 block"
                                    />
                                    <Input
                                        placeholder="TRAN QUOC SANG"
                                        value={creditCardData.cardholderName}
                                        onChange={(e) =>
                                            onCreditCardDataChange({ cardholderName: e.target.value })
                                        }
                                        className="w-full border-gray-300"
                                        width="100%"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Text
                                            text="CVV/CVC"
                                            size="text-sm"
                                            color="text-gray-700"
                                            weight="font-medium"
                                            className="mb-2 block"
                                        />
                                        <Input
                                            placeholder="123"
                                            value={creditCardData.cvv}
                                            onChange={(e) =>
                                                onCreditCardDataChange({ cvv: e.target.value })
                                            }
                                            className="w-full border-gray-300"
                                            width="100%"
                                        />
                                    </div>
                                    <div>
                                        <Text
                                            text="Ngày hết hạn"
                                            size="text-sm"
                                            color="text-gray-700"
                                            weight="font-medium"
                                            className="mb-2 block"
                                        />
                                        <Input
                                            placeholder="03/30"
                                            value={creditCardData.expiryDate}
                                            onChange={(e) =>
                                                onCreditCardDataChange({ expiryDate: e.target.value })
                                            }
                                            className="w-full border-gray-300"
                                            width="100%"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50">
                    <input
                        type="radio"
                        name="payment"
                        value="ewallet"
                        checked={paymentMethod === "ewallet"}
                        onChange={(e) => onPaymentMethodChange(e.target.value)}
                        className="w-5 h-5"
                    />
                    <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center text-white text-xs font-bold">
                        M
                    </div>
                    <Text
                        text="Ví điện tử - ZaloPay, ShopeePay, Momo, VNPay"
                        size="text-base"
                        color="text-gray-700"
                        weight="font-medium"
                    />
                </label>
                <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50">
                    <input
                        type="radio"
                        name="payment"
                        value="bank"
                        checked={paymentMethod === "bank"}
                        onChange={(e) => onPaymentMethodChange(e.target.value)}
                        className="w-5 h-5"
                    />
                    <BankOutlined style={{ fontSize: 20, color: '#4B5563' }} />
                    <Text
                        text="Ngân hàng nội địa"
                        size="text-base"
                        color="text-gray-700"
                        weight="font-medium"
                    />
                </label>
            </div>
        </div>
    )
}
