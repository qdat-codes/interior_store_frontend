import { ApiError } from "@/api";
import { ERROR_MESSAGES, PRODUCT_COLORS } from "@/constants";
import type { ColorOption } from "@/types";
import type { AxiosError } from "axios";

export const convertToVietnameseCurrency = (amount: number) => {
  return amount.toLocaleString("en-US") + " VNĐ";
};

/**
 * @deprecated Use getColorsByIds from constants instead
 * Lấy danh sách colors theo ids
 */
export const getColorHexByIds = (ids: string[]): ColorOption[] => {
  return getColorsByIds(ids);
};

export const formatNumber = (number: number) => {
  return new Intl.NumberFormat("vi-VN").format(number);
};

/**
 * Utility functions để sử dụng màu với Tailwind CSS
 */

/**
 * Lấy hex color theo id
 */
export const getColorHexById = (id: string): string | undefined => {
  const color = PRODUCT_COLORS.find((color) => color.id === id);
  return color?.hex;
};

/**
 * Lấy color object theo id
 */
export const getColorById = (id: string): ColorOption | undefined => {
  return PRODUCT_COLORS.find((color) => color.id === id);
};

/**
 * Lấy danh sách colors theo ids
 */
export const getColorsByIds = (ids: string[]): ColorOption[] => {
  return ids
    .map((id) => getColorById(id))
    .filter((color): color is ColorOption => color !== undefined);
};

/**
 * Tạo Tailwind class cho text color
 * @example textColor("red") => "text-[#FF0000]"
 */
export const textColor = (colorId: string): string => {
  const hex = getColorHexById(colorId);
  return hex ? `text-[${hex}]` : "";
};

/**
 * Tạo Tailwind class cho background color
 * @example bgColor("red") => "bg-[#FF0000]"
 */
export const bgColor = (colorId: string): string => {
  const hex = getColorHexById(colorId);
  return hex ? `bg-[${hex}]` : "";
};

/**
 * Tạo Tailwind class cho border color
 * @example borderColor("red") => "border-[#FF0000]"
 */
export const borderColor = (colorId: string): string => {
  const hex = getColorHexById(colorId);
  return hex ? `border-[${hex}]` : "";
};

/**
 * Tạo inline style object cho backgroundColor
 * @example styleBgColor("red") => { backgroundColor: "#FF0000" }
 */
export const styleBgColor = (
  colorId: string
): { backgroundColor: string } | Record<string, never> => {
  const hex = getColorHexById(colorId);
  if (hex) {
    return { backgroundColor: hex };
  }
  return {} as Record<string, never>;
};

/**
 * Tạo inline style object cho color (text)
 * @example styleTextColor("red") => { color: "#FF0000" }
 */
export const styleTextColor = (
  colorId: string
): { color: string } | Record<string, never> => {
  const hex = getColorHexById(colorId);
  if (hex) {
    return { color: hex };
  }
  return {} as Record<string, never>;
};

/**
 * Tạo inline style object cho borderColor
 * @example styleBorderColor("red") => { borderColor: "#FF0000" }
 */
export const styleBorderColor = (
  colorId: string
): { borderColor: string } | Record<string, never> => {
  const hex = getColorHexById(colorId);
  if (hex) {
    return { borderColor: hex };
  }
  return {} as Record<string, never>;
};

/* 
* Lấy message lỗi từ ApiError, AxiosError hoặc Error (axios interceptor reject ApiError)
* @param error - Lỗi từ ApiError, AxiosError hoặc Error
* @param fallback - Message lỗi mặc định nếu không tìm thấy message lỗi từ ApiError, AxiosError hoặc Error
* @returns Message lỗi
*/
export function getErrorMessage(error: unknown, fallback: string): string {
  if (error instanceof ApiError) {
    return ERROR_MESSAGES[error.statusCode] ?? error.message ?? fallback;
  }
  if (typeof error === "object" && error !== null && "response" in error) {
    const axiosErr = error as AxiosError<{ message?: string }>;
    const status = axiosErr.response?.status;
    const msg = axiosErr.response?.data?.message ?? axiosErr.message;
    if (status && ERROR_MESSAGES[status]) return ERROR_MESSAGES[status];
    if (!axiosErr.response) return "Lỗi kết nối. Vui lòng kiểm tra mạng và thử lại.";
    return msg ?? fallback;
  }
  if (error instanceof Error) return error.message || fallback;
  return fallback;
}
