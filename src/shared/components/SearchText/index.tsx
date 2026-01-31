import { Icon } from "@/shared/components/Icon";
import { SearchOutlined } from "@ant-design/icons";

const SearchText = ({
  value,
  placeholder,
  onChange,
  className,
}: {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  className?: string;
}) => {
  return (
    <>
      <div
        className={`flex justify-between items-center space-x-1 border border-[#8591AC] w-[428px] h-[38px] rounded-lg text-[#C2CAD6] bg-[#FFFFFF] px-[9px] ${className}`}
      >
        <Icon component={SearchOutlined} className="text-[#C2CAD6]!"></Icon>
        <input
          value={value}
          type="text"
          placeholder={placeholder}
          onChange={(e) => onChange?.(e.target.value)}
          className="w-full outline-none bg-transparent text-sm text-[14px] font-normal"
        />
      </div>
    </>
  );
};

export default SearchText;
