/**
 * Storage utilities for managing JWT tokens
 */

/**
 * Get JWT token from localStorage
 */
export const getAccessToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(import.meta.env.ACCESS_TOKEN_KEY);
};

/**
 * Set JWT token to localStorage
 */
export const setAccessToken = (token: string): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(import.meta.env.ACCESS_TOKEN_KEY, token);
};

/**
 * Remove JWT token from localStorage
 */
export const removeAccessToken = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(import.meta.env.ACCESS_TOKEN_KEY);
};

/**
 * Get refresh token from localStorage
 */
export const getRefreshToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(import.meta.env.REFRESH_TOKEN_KEY);
};

/**
 * Set refresh token to localStorage
 */
export const setRefreshToken = (token: string): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(import.meta.env.REFRESH_TOKEN_KEY, token);
};

/**
 * Remove refresh token from localStorage
 */
export const removeRefreshToken = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(import.meta.env.REFRESH_TOKEN_KEY);
};

/**
 * Clear all authentication tokens
 */
export const clearAuthTokens = (): void => {
  removeAccessToken();
  removeRefreshToken();
};
