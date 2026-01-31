export interface AppPaginationProps {
  total: number;
  pageSize: number;
  current: number;
  onChange: (page: number) => void;
  className?: string;
}
