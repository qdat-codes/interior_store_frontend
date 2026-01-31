import { useState, useRef, useEffect } from "react";
import { Text } from "../Text";
import { DownOutlined } from "@ant-design/icons";
import type { SortSelectProps } from "./types";
import { Icon } from "../Icon";

export const SortSelect = ({
  label = "Sắp xếp: ",
  value = "",
  options = [],
  onChange,
  placeholder = "Chọn sắp xếp",
  className = "",
}: SortSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Đóng dropdown khi click bên ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const selectedOption = options.find((option) => option.value === value);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div
      className={`relative flex items-center gap-2 ${className}`}
      ref={dropdownRef}
    >
      <Text
        text={label}
        size="text-[14px]"
        weight="font-normal"
        color="text-gray-500"
        className="whitespace-nowrap"
      />
      {/* Select Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
      >
        <Text
          text={selectedOption ? selectedOption.label : placeholder}
          size="text-sm"
          weight="font-medium"
          color="text-gray-900"
          className="whitespace-nowrap"
        />
        <DownOutlined
          className={`text-gray-600 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          style={{ fontSize: "12px" }}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-10 right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50 overflow-hidden">
          <ul className="py-1">
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className={`px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors ${
                  value === option.value ? "bg-amber-50 text-amber-700" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <Text
                    text={option.label}
                    size="text-sm"
                    weight={
                      value === option.value ? "font-medium" : "font-normal"
                    }
                    color={
                      value === option.value
                        ? "text-amber-700"
                        : "text-gray-900"
                    }
                  />
                  {option.icon && <Icon component={option.icon} size="sm" />}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
