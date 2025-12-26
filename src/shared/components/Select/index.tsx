import { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Icon } from "../Icon";

export const HoverSelect = ({
  options = [],
  value = "",
  onChange,
  placeholder = "Chọn một tùy chọn",
  className = "",
}: {
  options: { label: string; value: string }[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Selected box */}
      <div className="lg:px-4 lg:py-2 lg:rounded-lg cursor-pointer  lg:flex lg:items-center lg:justify-between lg:space-x-2.5">
        <span>
          {value ? options.find((o) => o.value === value)?.label : placeholder}
        </span>

        {/* icon */}
        <Icon component={DownOutlined} size={"sm"} color="#FFFFFF"></Icon>
      </div>

      {/* Dropdown menu */}
      {open && (
        <ul className="absolute left-0 mt-1 w-full rounded-lg shadow-md z-50">
          {options.map((option) => (
            <li
              key={option.value}
              className="lg:px-4 lg:py-2 hover:bg-gray-600 cursor-pointer"
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
