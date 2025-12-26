export const Image = ({
  src,
  alt = "image",
  width = "w-full",
  height = "h-auto",
  objectFit = "object-cover",
  className = "",
  rouneded = false,
  onError = null,
}: {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
  objectFit?:
    | "object-cover"
    | "object-contain"
    | "object-fill"
    | "object-scale-down"
    | "object-none";
  className?: string;
  rouneded?: boolean;
  onError?: (() => void) | null;
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`${width} ${height} ${objectFit} ${
        rouneded ? "rounded" : ""
      } ${className}`}
      onError={onError ? onError : undefined}
    />
  );
};

export const Avatar = ({
  src,
  alt = "avatar",
  size = "md",
  className = "",
}: {
  src: string;
  alt?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}) => {
  const sizes_avatar = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`w-${size} h-${sizes_avatar[size]} object-cover rounded-full ${className}`}
    />
  );
};
