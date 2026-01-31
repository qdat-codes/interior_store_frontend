import { Icon } from "../Icon";
import type { InputNumberProps } from "./types.d";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

const InputNumber = ({
  min = 0,
  max = 100,
  defaultValue = 0,
  className = "w-24",
}: InputNumberProps) => {
  const [value, setValue] = useState<number>(defaultValue);

  const handleDecrease = () => {
    if (value > min) {
      setValue(value - 1);
    }
  };
  const handleIncrease = () => {
    if (value < max) {
      setValue(value + 1);
    }
  };

  return (
    <>
      <div
        className={`flex justify-between items-center gap-3 border border-[#2F313C] rounded-sm p-2 ${className}`}
      >
        <Icon
          component={MinusOutlined}
          size="sm"
          color="text-[#8591AC]"
          onClick={handleDecrease}
        />
        {value}
        <Icon
          component={PlusOutlined}
          size="sm"
          color="text-[#000000]"
          onClick={handleIncrease}
        />
      </div>
    </>
  );
};

export default InputNumber;
