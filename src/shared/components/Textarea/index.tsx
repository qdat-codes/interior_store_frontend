export const Textarea = ({
  placeholder,
  className,
  width = "100%",
  height = "120px",
  value,
  onChange,
  rows,
  cols,
  disabled = false,
  maxLength,
  resize = "vertical",
}: {
  placeholder?: string;
  className?: string;
  width?: string;
  height?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  cols?: number;
  disabled?: boolean;
  maxLength?: number;
  resize?: "none" | "both" | "horizontal" | "vertical";
}) => {
  const resizeClass = {
    none: "resize-none",
    both: "resize",
    horizontal: "resize-x",
    vertical: "resize-y",
  };

  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      cols={cols}
      disabled={disabled}
      maxLength={maxLength}
      style={{ width, height, minHeight: height }}
      className={`rounded-lg border px-3 py-2 text-black cursor-pointer ${resizeClass[resize]} ${
        disabled ? "bg-gray-100 cursor-not-allowed opacity-60" : ""
      } ${className}`}
    />
  );
};

export default Textarea;
