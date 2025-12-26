import type { ComponentType } from "react";

export const Icon = ({
  component: IconComponent,
  size = "md",
  color = "text-gray-900",
  className = "",
  onClick = null,
}: {
  component: ComponentType<{ style?: React.CSSProperties }>;
  size?: "sm" | "md" | "lg" | "xl";
  color?: string;
  className?: string;
  onClick?: (() => void) | null;
}) => {
  const sizes_icon = {
    sm: 16,
    md: 24,
    lg: 32,
    xl: 48,
  };

  return (
    <div
      onClick={onClick ? onClick : undefined}
      className={`inline-flex items-center justify-center cursor-pointer transition-transform ease-in-out hover:scale-105 active:scale-95 duration-300 ${color} ${className}`}
    >
      <IconComponent style={{ fontSize: sizes_icon[size] }} />
    </div>
  );
};
