export interface SortSelectProps {
  label?: string;
  value?: string;
  options: {
    label: string;
    value: string;
    icon?: React.ComponentType<{ style?: React.CSSProperties }> | null;
  }[];
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}
