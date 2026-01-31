import type { CreditCardData } from "@/pages/checkout_page/types"

export interface PaymentMethodSectionProps {
    paymentMethod: string
    onPaymentMethodChange: (method: string) => void
    creditCardData: CreditCardData
    onCreditCardDataChange: (data: Partial<CreditCardData>) => void
}
