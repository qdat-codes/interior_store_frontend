import { Button } from "../../../shared/components/Button";

export const CarouselNavButton = ({
  icon,
  direction,
  onClick,
  disabled,
  className = "",
}: {
  icon: React.ReactNode;
  direction: "left" | "right";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}) => {
  return (
    <Button
      variant="custom"
      iconSize={24}
      children={icon}
      onclick={onClick}
      disabled={disabled}
      className={`shrink-0 lg:w-12 lg:h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-between disabled:cursor-not-allowed hover:scale-110 active:scale-95 text-black hover:text-[#8591AC] hover:border-[#8591AC] border-3 ${className}`}
      aria-label={`${direction === "left" ? "Previous" : "Next"} slide`}
    ></Button>
  );
};
