export const Dropdown = ({
  options = [],
  value = "",
  onChange,
  placeholder = "Select an option",
  label = "",
  required = false,
  disable = false,
  className = "",
}: {
  options: { label: string; value: string }[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  required?: boolean;
  disable?: boolean;
  className?: string;
}) => {
  return (
    <div className={className}>
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disable}
        className=" w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg
            focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200
            disabled:bg-gray-100 disabled:cursor-not-allowed
            appearance-none bg-white cursor-pointer"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 12px center",
          paddingRight: "36px",
        }}
      >
        {!value && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
