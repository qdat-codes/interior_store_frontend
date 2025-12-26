export const Heading = ({
  level = 1,
  text,
  className = "",
  color = "text-gray-900",
  weight = "font-bold",
  size = null,
}: {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  text: React.ReactNode;
  className?: string;
  color?: string;
  weight?: string;
  size?: string | null;
}) => {
  const sizes = {
    1: size || "text-4xl",
    2: size || "text-3xl",
    3: size || "text-2xl",
    4: size || "text-xl",
    5: size || "text-lg",
    6: size || "text-base",
  };

  const Tag = `h${level}` as React.ElementType;

  return (
    <Tag className={`${sizes[level]} ${color} ${weight} ${className}`}>
      {text}
    </Tag>
  );
};

export const Text = ({
  text,
  className = "",
  size = "text-base",
  color = "text-gray-900",
  weight = "font-normal",
}: {
  text: React.ReactNode;
  className?: string;
  size?: string;
  color?: string;
  weight?: string;
}) => {
  return <p className={`${size} ${color} ${weight} ${className}`}>{text}</p>;
};

export const Label = ({
  text,
  className = "",
  required = false,
  size = "text-sm",
  color = "text-gray-700",
  weight = "font-medium",
}: {
  text: React.ReactNode;
  className?: string;
  required?: boolean;
  size?: string;
  color?: string;
  weight?: string;
}) => {
  return (
    <label className={`${size} ${color} ${weight} ${className}`}>
      {text}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
};
