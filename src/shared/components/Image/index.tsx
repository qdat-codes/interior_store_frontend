export const Image = ({
  src,
  alt = "image",
  width = "",
  height = "",
  objectFit = "object-cover",
  className = "",
  rouneded = false,
  onError = null,
  onclick = null,
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
  onclick?: (() => void) | null;
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={` ${width} ${height} ${objectFit} ${
        rouneded ? "rounded" : ""
      } ${className}`}
      onError={onError ? onError : undefined}
      onClick={onclick ? onclick : undefined}
    />
  );
};

export const Avatar = ({
  src,
  alt = "avatar",
  size = "md",
  className = "",
  onclick = null,
}: {
  src: string;
  alt?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  onclick?: (() => void) | null;
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
      className={`w-${size} h-${sizes_avatar[size]} cursor-pointer object-cover rounded-full ${className}`}
      onClick={onclick ? onclick : undefined}
    />
  );
};
