import type { PromoCode } from "@/pages/checkout_page/types"

export interface PromoCodeSectionProps {
    promoCode: string
    selectedPromoCode: PromoCode | null
    onPromoCodeChange: (code: string) => void
    onApplyPromoCode: () => void
    onShowPromoPopup: () => void
}
