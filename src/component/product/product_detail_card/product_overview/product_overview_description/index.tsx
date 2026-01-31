import { Text } from "@/shared/components/Text";
import type { ProductOverviewDescriptionProps } from "./types";

const ProductOverviewDescription = ({
  title,
  description,
}: ProductOverviewDescriptionProps) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-2 border border-[#D8DDE5]">
        <Text
          text={title}
          size="text-base"
          color="text-[#2F313C]"
          weight="font-normal"
          className="bg-[#E9EBF0] p-4"
        />
        <Text
          text={description}
          size="text-base"
          color="text-[#2F313C]"
          weight="font-normal"
          className="p-4"
        ></Text>
      </div>
    </>
  );
};

export default ProductOverviewDescription;
