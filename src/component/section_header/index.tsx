import { Heading, Text } from "../../shared/components/Text";
import { LineDivider } from "../divider";

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
        size="lg:text-[16px]"
        color="text-black"
        weight="font-normal"
        className="lg:mb-2"
      />

      <Heading text={title?.toLocaleUpperCase()} />
      <LineDivider width={width} thickness={4} />
    </div>
  );
};
