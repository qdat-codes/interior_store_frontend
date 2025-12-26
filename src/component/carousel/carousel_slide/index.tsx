import { Image } from "../../../shared/components/Image";

export const CarouselSlide = ({
  slide,
  isActive,
  direction,
  index,
  currentIndex,
}: {
  slide: string;
  isActive: boolean;
  direction: "prev" | "next" | null;
  index: number;
  currentIndex: number;
}) => {
  const getTransfromClass = () => {
    if (isActive) {
      return "translate-x-0 scale-100 opacity-100";
    }

    if (direction === "prev") {
      return index < currentIndex
        ? "opacity-0 -translate-x-full scale-95"
        : "opacity-0 translate-x-full scale-95";
    }
    if (direction === "next") {
      return index > currentIndex
        ? "opacity-0 translate-x-full scale-95"
        : "opacity-0 -translate-x-full scale-95";
    }
  };
  return (
    <div
      className={`absolute inset-0 transition-all duration-500 ease-in-out ${getTransfromClass()}`}
    >
      <Image src={slide} className="w-full h-full object-cover" />
    </div>
  );
};
