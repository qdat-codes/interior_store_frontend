export const Input = ({
  placeholder,
  className,
  width = "355px",
  height = "38px",
}: {
  placeholder?: string;
  className?: string;
  width?: string;
  height?: string;
}) => {
  return (
    <input
      placeholder={placeholder}
      style={{ width, height }}
      className={`rounded-lg border lg:pl-3 text-black cursor-pointer ${className}`}
    />
  );
};
