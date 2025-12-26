export const CarouselProgressBar = ({
  isAnimating = false,
}: {
  isAnimating: boolean;
}) => {
  return (
    <div className="absolute top-0 left-0 right-0 h-1 bg-white/30 z-10">
      <div
        className="h-full bg-white transition-all duration-500 ease-linear"
        style={{
          width: isAnimating ? "0%" : "100%",
          transition: isAnimating ? "none" : "width 5s linear",
        }}
      ></div>
    </div>
  );
};
