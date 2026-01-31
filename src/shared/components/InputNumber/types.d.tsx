export interface InputNumberProps {
  min?: number;
  max?: number;
  defaultValue?: number;
  className?: string;
}

export interface HandleInputNumberProps {
  min?: number;
  max?: number;
  defaultValue?: number;
  className?: string;
  onChange?: (value: number) => void;
}
