export type FilterType = "checkbox" | "radio" | "switch" | "rate" | "slider";

export interface FilterOptionProps {
  type: FilterType;
  label: string;
  value: string | number | boolean | [number, number];
  checked?: boolean;
  name?: string;
  onChange: (value: string | number | boolean | [number, number]) => void;
  className?: string;
  ratingValue?: number;
  disabled?: boolean;
  // Slider specific props
  min?: number;
  max?: number;
  step?: number;
  formatter?: (value: number) => string;
}
