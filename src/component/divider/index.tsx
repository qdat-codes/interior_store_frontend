import { Divider } from "antd";

export const LineDivider = ({
  className = "",
  width = "",
  thickness = 1,
  color = "#D39864",
}: {
  className?: string;
  width?: string;
  thickness?: number;
  color?: string;
}) => {
  return (
    <div style={{ width: width }}>
      <Divider
        className={`${className} rounded-xs`}
        style={{
          borderColor: color,
          borderTopWidth: thickness,
          marginTop: "6px",
        }}
      />
    </div>
  );
};
