import { PRODUCT_COLORS } from "../contant/contant";

export const convertToVietnameseCurrency = (amount: number) => {
  return amount.toLocaleString("en-US") + " VNĐ";
};

export const getColorHexById = (id: string) => {
  return PRODUCT_COLORS.find((color) => color.id === id);
};

export const getColorHexByIds = (ids: string[]) => {
  return ids
    .map((id) => getColorHexById(id))
    .filter((color) => color !== undefined);
};

export const formatNumber = (number: number) => {
  return new Intl.NumberFormat("vi-VN").format(number);
};
