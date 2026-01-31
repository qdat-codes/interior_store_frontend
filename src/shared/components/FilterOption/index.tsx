import { Rate, Slider } from "antd";
import { Text } from "../Text";
import type { FilterOptionProps } from "./types";

export const FilterOption = ({
  type,
  label,
  value,
  checked = false,
  name,
  onChange,
  className = "",
  ratingValue = 0,
  disabled = false,
  min = 0,
  max = 100,
  step = 1,
  formatter,
}: FilterOptionProps) => {
  const handleChange = (
    newValue: string | number | boolean | [number, number]
  ) => {
    if (!disabled && onChange) {
      onChange(newValue);
    }
  };

  const defaultFormatter = (val: number) => `${val}`;
  const formatValue = formatter || defaultFormatter;

  const baseInputClasses =
    "mr-2 w-4 h-4 text-amber-600 border-gray-300 focus:ring-amber-500";
  const baseLabelClasses = "flex items-center cursor-pointer";

  switch (type) {
    case "checkbox":
      return (
        <label className={`${baseLabelClasses} ${className}`}>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => handleChange(value)}
            disabled={disabled}
            className={`${baseInputClasses} rounded`}
          />
          <Text
            text={label}
            size="text-[14px]"
            weight="font-medium"
            color="text-[#2F313C]"
          />
        </label>
      );

    case "radio":
      return (
        <label className={`${baseLabelClasses} ${className}`}>
          <input
            type="radio"
            name={name}
            value={value as string}
            checked={checked}
            onChange={() => handleChange(value)}
            disabled={disabled}
            className={baseInputClasses}
          />
          <Text
            text={label}
            size="text-[14px]"
            weight="font-medium"
            color="text-[#2F313C]"
          />
        </label>
      );

    case "slider": {
      const sliderValue = Array.isArray(value)
        ? value
        : typeof value === "number"
          ? [value, value]
          : [0, 0];
      const isRange = Array.isArray(value) && value.length === 2;

      return (
        <div className={`flex flex-col space-y-3 ${className}`}>
          {isRange ? (
            <Slider
              range
              min={min}
              max={max}
              step={step}
              value={sliderValue as [number, number]}
              onChange={(val) => handleChange(val as [number, number])}
              disabled={disabled}
              tooltip={
                formatter
                  ? {
                      formatter: (value?: number) => formatValue(value || 0),
                    }
                  : undefined
              }
            />
          ) : (
            <Slider
              min={min}
              max={max}
              step={step}
              value={sliderValue[0]}
              onChange={(val) => handleChange(val as number)}
              disabled={disabled}
              tooltip={
                formatter
                  ? {
                      formatter: (value?: number) => formatValue(value || 0),
                    }
                  : undefined
              }
            />
          )}
          {isRange && (
            <div className="flex gap-3 items-center text-sm text-gray-600">
              <div className="border border-[#E1BA90] w-full p-1.5 rounded-[4px]">
                <Text
                  text={"Từ (VNĐ)"}
                  size="text-[12px]"
                  weight="font-medium"
                  color="text-[#8591AC]"
                />
                <p className="text-[14px] font-normal text-black">
                  {`${formatValue(sliderValue[0])} triệu`}
                </p>
              </div>
              <div className="border border-[#E1BA90] w-full p-1.5 rounded-[4px]">
                <Text
                  text={"Đến (VNĐ)"}
                  size="text-[12px]"
                  weight="font-medium"
                  color="text-[#8591AC]"
                />
                <p className="text-[14px] font-normal text-black">
                  {`${formatValue(sliderValue[1])} triệu`}
                </p>
              </div>
            </div>
          )}
        </div>
      );
    }

    case "rate":
      return (
        <button
          onClick={() => handleChange(value)}
          disabled={disabled}
          className={` flex items-center gap-2 py-2 px-4 rounded-full border border-[#D8DDE5]  hover:bg-gray-50 ${
            checked ? "bg-amber-50" : ""
          } ${disabled ? "opacity-50 cursor-no-drop" : ""} ${className}`}
        >
          <Rate disabled value={ratingValue || 0} className="text-[14px]" />
        </button>
      );

    default:
      return null;
  }
};
