import { Input } from "@/shared/components/Input"
import { Button } from "@/shared/components/Button"
import { Text, Heading } from "@/shared/components/Text"
import { WalletOutlined, CloseOutlined } from "@ant-design/icons"
import type { PromoCodePopupProps } from "./type"



export const PromoCodePopup = ({
    isOpen,
    onClose,
    promoCode,
    onPromoCodeChange,
    availablePromoCodes,
    selectedPromoCode,
    onSelectPromoCode,
}: PromoCodePopupProps) => {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                    <Heading
                        text="Danh sách mã khuyến mãi"
                        level={2}
                        className="text-xl font-bold text-black"
                    />
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <CloseOutlined style={{ fontSize: 20 }} />
                    </button>
                </div>
                <div className="p-6">
                    {/* Promo Code Input */}
                    <div className="mb-6">
                        <Text
                            text="Mã khuyến mãi"
                            size="text-sm"
                            color="text-gray-700"
                            weight="font-medium"
                            className="mb-2 block"
                        />
                        <div className="flex gap-2 mb-2">
                            <Input
                                placeholder="Nhập thông tin"
                                value={promoCode}
                                onChange={(e) => onPromoCodeChange(e.target.value)}
                                className="flex-1 border-gray-300"
                                width="100%"
                            />
                            <Button
                                children="Áp dụng"
                                onclick={() => {
                                    const promo = availablePromoCodes.find(
                                        (p) => p.code === promoCode.toUpperCase()
                                    )
                                    if (promo) {
                                        onSelectPromoCode(promo)
                                        onClose()
                                    }
                                }}
                                className="bg-[#D39864]! border border-[#D39864]! text-white! rounded-lg px-4 whitespace-nowrap"
                            />
                        </div>
                        <button
                            onClick={onClose}
                            className="text-blue-500 text-sm flex items-center gap-1 hover:underline"
                        >
                            <span>Xem thêm các mã khuyến mãi</span>
                            <WalletOutlined style={{ fontSize: 14 }} />
                        </button>
                    </div>

                    {/* Available Promo Codes */}
                    <div>
                        <Text
                            text="Các mã khuyến mãi khả dụng"
                            size="text-base"
                            color="text-gray-900"
                            weight="font-semibold"
                            className="mb-4 block"
                        />
                        <div className="flex flex-col gap-4">
                            {availablePromoCodes.map((promo) => {
                                const isSelected = selectedPromoCode?.id === promo.id
                                return (
                                    <label
                                        key={promo.id}
                                        className={`flex items-start gap-3 cursor-pointer p-4 rounded-lg border-2 transition-all ${isSelected
                                            ? "border-green-500 bg-green-50"
                                            : "border-gray-300 hover:border-gray-400"
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="promo"
                                            checked={isSelected}
                                            onChange={() => {
                                                onSelectPromoCode(promo)
                                                onPromoCodeChange(promo.code)
                                                onClose()
                                            }}
                                            className="mt-1 w-5 h-5"
                                        />
                                        <div className="flex-1">
                                            <Text
                                                text={promo.description}
                                                size="text-xs"
                                                color="text-gray-500"
                                                className="mb-1"
                                            />
                                            <Text
                                                text={promo.title}
                                                size="text-base"
                                                color="text-gray-900"
                                                weight="font-semibold"
                                                className="mb-2"
                                            />
                                            {promo.tag && (
                                                <span className="inline-block bg-[#D39864] text-white text-xs px-2 py-1 rounded mb-2">
                                                    {promo.tag}
                                                </span>
                                            )}
                                            <div className="flex flex-col gap-1 mt-2">
                                                <Text
                                                    text={`Mã: ${promo.code}`}
                                                    size="text-sm"
                                                    color="text-gray-500"
                                                />
                                                <Text
                                                    text={`Hết hạn: ${promo.expiryDate}`}
                                                    size="text-sm"
                                                    color="text-gray-500"
                                                />
                                            </div>
                                        </div>
                                    </label>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
