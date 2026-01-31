import { Heading, Text } from "../../shared/components/Text";
import { LineDivider } from "../../shared/components/Divider";

export const SectionHeader = ({
  title,
  subtitle,
  width = "260px",
}: {
  title?: string;
  subtitle?: string;
  width?: string;
}) => {
  return (
    <div className="relative">
      <Text
        text={subtitle?.toLocaleUpperCase()}
        size="md:text-[16px] text-[12px]"
        color="text-black"
        weight="font-normal"
        className="mb-2"
      />

      <Heading text={title?.toLocaleUpperCase()} weight="font-bold" level={1} />
      <div className="md:block flex justify-center items-center md:mb-6 mb-4">
        <LineDivider width={width} thickness={4} />
      </div>
    </div>
  );
};
