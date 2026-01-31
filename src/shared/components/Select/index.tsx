import { useState, useEffect, useRef } from "react";
import { Icon } from "../Icon";
import { CaretDownOutlined } from "@ant-design/icons";
import type { SelectProps } from "./type";


const variantStyles = {
  default: {
    trigger:
      "py-2 flex items-center justify-between rounded-lg cursor-pointer lg:px-4 lg:rounded-lg lg:hover:bg-gray-700 transition-colors",
    triggerText: "text-white",
    triggerTextPlaceholder: "text-white",
    iconColor: "text-white",
    dropdown:
      "absolute left-0 right-0 mt-1 w-full rounded-lg shadow-md z-50 bg-inherit",
    option: "px-4 py-2 hover:bg-gray-600 cursor-pointer text-white",
  },
  form: {
    trigger:
      "py-2 px-3 cursor-pointer flex items-center justify-between rounded-lg border border-gray-300 bg-white",
    triggerText: "text-gray-900",
    triggerTextPlaceholder: "text-gray-400",
    iconColor: "text-gray-500",
    dropdown:
      "absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-60 overflow-auto",
    option: "px-4 py-2 cursor-pointer hover:bg-gray-100 text-gray-900",
  },
};

export const Select = ({
  options = [],
  value = "",
  onChange,
  placeholder = "Chọn một tùy chọn",
  className = "",
  variant = "default",
  trigger = "click",
}: SelectProps) => {
  const [open, setOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const styles = variantStyles[variant];

  useEffect(() => {
    if (trigger !== "click" || !open) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, trigger]);

  const handleToggle = () => {
    if (trigger === "click") setOpen((prev) => !prev);
  };

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setOpen(false);
  };

  const triggerContent = (
    <>
      <span
        className={
          value ? styles.triggerText : styles.triggerTextPlaceholder
        }
      >
        {value ? options.find((o) => o.value === value)?.label : placeholder}
      </span>
      <Icon
        component={CaretDownOutlined}
        size="sm"
        color={styles.iconColor}
        className={`transition-transform duration-300 ${variant === "form" ? "" : "mr-4"} ${open ? "rotate-180" : ""}`}
      />
    </>
  );

  const dropdown = open && (
    <ul className={styles.dropdown} onClick={(e) => e.stopPropagation()}>
      {options.map((option) => (
        <li
          key={option.value}
          className={styles.option}
          onClick={() => handleSelect(option.value)}
        >
          {option.label}
        </li>
      ))}
    </ul>
  );

  if (trigger === "hover") {
    return (
      <div
        className={`relative inline-block ${className}`}
        ref={selectRef}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <div className={styles.trigger}>{triggerContent}</div>
        {dropdown}
      </div>
    );
  }

  return (
    <div
      className={`relative w-full ${className}`}
      ref={selectRef}
      onClick={handleToggle}
    >
      <div className={styles.trigger}>{triggerContent}</div>
      {dropdown}
    </div>
  );
};
