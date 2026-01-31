export interface CartTableRow {
    key: string;
    name: string;
    image: string;
    collection?: string;
    unitPrice: number;
    color?: string;
    size?: string;
    amount: number;
    total: number;
}
