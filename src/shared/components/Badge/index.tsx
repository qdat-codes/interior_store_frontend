import { Badge } from "antd";
import type React from "react";

const BadgeCount = ({
  count,
  children,
  onClick,
}: {
  count: number;
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <>
      <Badge count={count} overflowCount={99} onClick={onClick}>
        {children}
      </Badge>
    </>
  );
};

export default BadgeCount;
