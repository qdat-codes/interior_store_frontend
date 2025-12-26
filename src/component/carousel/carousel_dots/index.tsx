export const CarouselDots = ({
  slides,
  currentIndex,
  onDotClick,
  isAnimating,
}: {
  slides: string[];
  currentIndex: number;
  onDotClick: (index: number) => void;
  isAnimating: boolean;
}) => {
  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      {slides.map((_, index) => (
        <button
          children={undefined}
          onClick={() => onDotClick(index)}
          disabled={isAnimating}
          className={`transition-all duration-300 rounded-full ${
            index === currentIndex
              ? "w-12 h-3 bg-gray-900"
              : "w-3 h-3 bg-gray-400 hover:bg-gray-600"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        ></button>
      ))}
    </div>
  );
};
