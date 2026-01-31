import { Badge } from "antd";
import type React from "react";

const BadgeCount = ({
  count,
  children,
}: {
  count: number;
  children: React.ReactNode;
}) => {
  return (
    <>
      <Badge count={count} overflowCount={99}>
        {children}
      </Badge>
    </>
  );
};

export default BadgeCount;
