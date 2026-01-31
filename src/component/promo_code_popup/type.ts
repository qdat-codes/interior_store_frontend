import type { PromoCode } from "../promo_code"

export interface PromoCodePopupProps {
    isOpen: boolean
    onClose: () => void
    promoCode: string
    onPromoCodeChange: (code: string) => void
    availablePromoCodes: PromoCode[]
    selectedPromoCode: PromoCode | null
    onSelectPromoCode: (promo: PromoCode) => void
}
