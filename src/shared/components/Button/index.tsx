export const Button = ({
  children,
  className = "",
  onclick,
  variant = "primary",
  size = "md",
  disabled = false,
  icon: Icon = null,
  iconPosition = "left",
  iconSize,
  type = "button",
}: {
  children: React.ReactNode;
  className?: string;
  onclick?: () => void;
  variant?:
  | "primary"
  | "secondary"
  | "tertiary"
  | "outline"
  | "danger"
  | "ghost"
  | "custom";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  icon?: React.ComponentType<{ size: number }> | null;
  iconPosition?: "left" | "right";
  iconSize?: number;
  type?: "button" | "submit" | "reset";
}) => {
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    tertiary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
    danger: "bg-red-600 text-white hover:bg-red-700",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
    custom: "",
  };

  const size_btn = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onclick}
      disabled={disabled}
      className={`cursor-pointer transition-transform hover:scale-105 active:scale-95 duration-300 ${variants[variant]
        } ${size_btn[size]} ${disabled ? "opacity-50 cursor-not-allowed" : ""
        } flex items-center gap-2 justify-center rounded ${className}`}
    >
      {Icon && iconPosition === "left" && Icon && <Icon size={iconSize || 18} />}
      {children}
      {Icon && iconPosition === "right" && Icon && <Icon size={iconSize || 18} />}
    </button>
  );
};
