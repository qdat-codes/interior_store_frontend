import { PRODUCT_COLORS } from "@/constants";
import { Button } from "@/shared/components/Button";
import { FilterOption } from "@/shared/components/FilterOption";
import { FilterSection } from "@/shared/components/FilterSection";
import { Text } from "@/shared/components/Text";
import { useState } from "react";

const ProductSidebar = () => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const [waterResistance, setWaterResistance] = useState<string>("");
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50]);

  const brands = [
    "Hoà Phát",
    "Erado",
    "Phố Xinh",
    "Tứ Gia",
    "Toàn Phú Furniture",
  ];

  const waterResistanceOptions = [
    { value: "yes", label: "Có" },
    { value: "no", label: "Không" },
    { value: "dont-care", label: "Không quan tâm" },
  ];

  const filterColors = PRODUCT_COLORS;

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleColorToggle = (colorHex: string) => {
    setSelectedColors((prev) =>
      prev.includes(colorHex)
        ? prev.filter((c) => c !== colorHex)
        : [...prev, colorHex]
    );
  };

  const handleSearch = () => {
    // Handle search logic here
    console.log({
      brands: selectedBrands,
      waterResistance,
      colors: selectedColors,
      rating: selectedRating,
      priceRange,
    });
  };

  return (
    <>
      <div className="flex flex-col w-full md:w-[240px] lg:w-[260px] md:pr-4 bg-[white] px-4 py-4 sm:px-6 sm:py-6 md:px-[24px] md:py-[16px] box-shadow-md rounded-[8px]">
        <Text
          text={"Bộ lọc"}
          className="mb-4"
          weight="font-medium"
          size="text-[20px]"
          color="text-black"
        />

        {/* Thương hiệu (Brand) */}
        <FilterSection title="Thương hiệu">
          <div className="space-y-2">
            {brands.map((brand) => (
              <FilterOption
                key={brand}
                type="checkbox"
                label={brand}
                value={brand}
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandToggle(brand)}
              />
            ))}
          </div>
        </FilterSection>

        {/* Bộ sưu tập (Collection) */}
        <FilterSection title="Bộ sưu tập" defaultOpen={false}>
          <Text
            text="Chưa có bộ sưu tập nào"
            size="text-sm"
            color="text-gray-500"
          />
        </FilterSection>

        {/* Kháng nước (Water Resistance) */}
        <FilterSection title="Kháng nước">
          <div className="space-y-2">
            {waterResistanceOptions.map((option) => (
              <FilterOption
                key={option.value}
                type="radio"
                label={option.label}
                value={option.value}
                name="waterResistance"
                checked={waterResistance === option.value}
                onChange={(value) => setWaterResistance(value as string)}
              />
            ))}
          </div>
        </FilterSection>

        {/* Màu sắc (Color) */}
        <FilterSection title="Màu sắc">
          <div className=" grid grid-flow-col grid-rows-3 auto-cols-max gap-2 overflow-x-auto pb-2">
            {filterColors.map((color) => (
              <button
                key={color.hex}
                onClick={() => handleColorToggle(color.hex)}
                className={`w-8 h-8 rounded-full border-2 transition-all hover:scale-110 ${
                  selectedColors.includes(color.hex)
                    ? "border-amber-600 ring-2 ring-amber-200"
                    : "border-gray-300"
                }`}
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
          </div>
        </FilterSection>

        {/* Đánh giá (Rating) */}
        <FilterSection title="Đánh giá">
          <div className="space-y-3">
            {[5, 4, 3, 2, 1].map((rating) => (
              <FilterOption
                key={rating}
                type="rate"
                label={""}
                value={rating}
                ratingValue={rating}
                checked={selectedRating === rating}
                onChange={(value) =>
                  setSelectedRating(
                    selectedRating === value ? null : (value as number)
                  )
                }
              />
            ))}
          </div>
        </FilterSection>

        {/* Giá (Price) */}
        <FilterSection title="Giá">
          <div className="space-y-3">
            <FilterOption
              type="slider"
              label="Giá"
              value={priceRange}
              onChange={(value) => setPriceRange(value as [number, number])}
            />
          </div>
        </FilterSection>

        {/* Search Button */}
        <Button
          onclick={handleSearch}
          variant="custom"
          className="w-full bg-[#D39864] text-white py-1.5 rounded-lg font-semibold"
        >
          Tìm kiếm
        </Button>
      </div>
    </>
  );
};

export default ProductSidebar;
