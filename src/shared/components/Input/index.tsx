import { forwardRef } from "react";

export interface InputProps {
  placeholder?: string;
  className?: string;
  width?: string;
  height?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "password" | "email" | "number" | "tel";
  name?: string;
  id?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      placeholder,
      className = "",
      width = "355px",
      height = "38px",
      type = "text",
      name,
      id,
      ...rest
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        style={{ width, height }}
        className={`rounded-lg border pl-3 text-black cursor-pointer ${className}`}
        {...rest}
      />
    );
  }
);

Input.displayName = "Input";
