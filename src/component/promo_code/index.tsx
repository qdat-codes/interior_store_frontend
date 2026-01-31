import { Input } from "@/shared/components/Input"
import { Button } from "@/shared/components/Button"
import { WalletOutlined } from "@ant-design/icons"
import type { PromoCode } from "@/pages/checkout_page/types"
import { Text } from "@/shared/components/Text"
import type { PromoCodeSectionProps } from "./type"

export type { PromoCode }


export const PromoCodeSection = ({
    promoCode,
    selectedPromoCode,
    onPromoCodeChange,
    onApplyPromoCode,
    onShowPromoPopup,
}: PromoCodeSectionProps) => {
    return (
        <div className="mb-6">
            <div className="flex flex-col gap-2 mb-2">
                <Text text="Mã khuyến mãi" size="text-sm" color="text-[#000000]" weight="font-medium" className="mb-1" />
                <div className="flex gap-2 items-center justify-center">
                    <Input
                        placeholder="Nhập thông tin"
                        value={selectedPromoCode ? selectedPromoCode.code : promoCode}
                        onChange={(e) => {
                            onPromoCodeChange(e.target.value)
                        }}
                        className="border-gray-300"
                        width="100%"
                    />
                    <Button
                        children="Áp dụng"
                        onclick={onApplyPromoCode}
                        className="bg-[#D39864]! border border-[#D39864]! text-white! rounded-lg px-4 whitespace-nowrap"
                        disabled={!promoCode ? true : false}
                    />
                </div>
            </div>
            <button
                onClick={onShowPromoPopup}
                className="text-blue-500 text-sm flex items-center gap-1 hover:underline"
            >
                <span>Xem thêm các mã khuyến mãi</span>
                <WalletOutlined style={{ fontSize: 14 }} />
            </button>
        </div>
    )
}
