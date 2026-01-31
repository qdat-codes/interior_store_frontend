import { Pagination } from "antd";
import type { AppPaginationProps } from "./type";

const AppPagination = ({
  total,
  pageSize = 10,
  current = 1,
  onChange,
  className = "",
}: AppPaginationProps) => {
  return (
    <div className="flex justify-center items-center mt-4 flex-nowrap overflow-hidden">
      <Pagination
        defaultCurrent={current}
        total={total}
        onChange={onChange}
        defaultPageSize={pageSize}
        pageSize={pageSize}
        className={className}
      />
    </div>
  );
};

export default AppPagination;
