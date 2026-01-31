import { useState } from "react";
import { Text } from "@/shared/components/Text";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import type { FilterSectionProps } from "./types";

export const FilterSection = ({
  title,
  children,
  defaultOpen = true,
  isBorderTop = true,
}: FilterSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={`border-gray-200 pb-4 mb-4 ${isBorderTop ? "border-t" : ""}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-3 text-left"
      >
        <Text
          text={title}
          size="text-base"
          weight="font-medium"
          color="text-gray-900"
        />
        <div className="transition-transform duration-300 ease-in-out">
          {isOpen ? (
            <UpOutlined className="text-gray-600" />
          ) : (
            <DownOutlined className="text-gray-600" />
          )}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <div>{children}</div>
      </div>
    </div>
  );
};
