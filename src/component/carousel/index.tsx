import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { SectionHeader } from "../section_header";
import { CarouselNavButton } from "./carousel_nav_button";
import { CarouselDots } from "./carousel_dots";
import { useCallback, useEffect, useState } from "react";
import { Image } from "../../shared/components/Image";

export const Carousel = ({
  images,
  autoPlayInterval = 3000,
}: {
  images: string[];
  autoPlayInterval?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const gotoSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const nextSlide = useCallback(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    gotoSlide(nextIndex);
  }, [currentIndex, images.length, gotoSlide]);

  const prevSlide = useCallback(() => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    gotoSlide(prevIndex);
  }, [currentIndex, images.length, gotoSlide]);

  const getPrevIndex = () => (currentIndex - 1 + images.length) % images.length;
  const getNextIndex = () => (currentIndex + 1) % images.length;

  useEffect(() => {
    if (!autoPlayInterval) return;
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [nextSlide, autoPlayInterval]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <>
      <div className="lg:py-6 lg:flex lg:justify-between lg:items-center lg:px-[165px]">
        <SectionHeader
          title="hàng mới về"
          subtitle="bộ sưu tập"
          width="165px"
        />
        <div className="lg:flex lg:items-center lg:space-x-6">
          <CarouselNavButton
            icon={<LeftOutlined />}
            onClick={prevSlide}
            direction={"left"}
          />
          <CarouselNavButton
            icon={<RightOutlined />}
            onClick={nextSlide}
            direction={"right"}
          />
        </div>
      </div>

      <div className="lg:px-0 relative lg:flex lg:items-center lg:justify-between lg:gap-6 -ml-[100px]">
        {/* PREV SLIDE */}
        <div
          onClick={prevSlide}
          className="relative lg:w-[580px] lg:h-[342px] cursor-pointer opacity-60 hover:opacity-80 transition-opacity  hover:scale-105 active:scale-95 duration-300"
        >
          <img
            src={images[getPrevIndex()]}
            alt="Previous"
            className="absolute lg:w-full lg:h-full left-0 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* CURRENT SLIDE */}
        <div className="relative lg:w-[828px] lg:h-[488px]  z-10 cursor-pointer opacity-60 hover:opacity-80 transition-opacity  hover:scale-105 active:scale-95 duration-300">
          <img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="lg:w-full h-full object-cover rounded-lg shadow-2xl "
          />
        </div>

        {/* NEXT SLIDE */}
        <div
          onClick={nextSlide}
          className="relative w-[580px] h-[342px] cursor-pointer opacity-60 hover:opacity-80 transition-opacity -mr-[100px]  hover:scale-105 active:scale-95 duration-300"
        >
          <Image
            src={images[getNextIndex()]}
            alt="Next"
            className="absolute right-0 lg:w-full lg:h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      <CarouselDots
        slides={images}
        currentIndex={currentIndex}
        onDotClick={gotoSlide}
        isAnimating={isAnimating}
      />
    </>
  );
};
