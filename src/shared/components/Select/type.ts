export type SelectVariant = "default" | "form";
export type SelectTrigger = "click" | "hover";

export interface SelectProps {
    options: { label: string; value: string }[];
    value?: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
    variant?: SelectVariant;
    trigger?: SelectTrigger;
}
