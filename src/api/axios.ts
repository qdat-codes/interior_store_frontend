import axios, { type AxiosError, type AxiosInstance, type InternalAxiosRequestConfig } from 'axios';
import { getAccessToken, clearAuthTokens } from '@/utils/storage';
import { ApiError } from '@/api/type';

/**
 * Create axios instance with base configuration
 */
const apiClient: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
    withCredentials: false,
});

/**
 * Request Interceptor
 * Automatically add Authorization header with JWT token
 */
apiClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = getAccessToken();

        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        // Log request in development mode
        if (import.meta.env.DEV) {
            console.log(`[API Request] ${config.method?.toUpperCase()} ${config.url}`, {
                data: config.data,
                params: config.params,
            });
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

/**
 * Response Interceptor
 * Handle errors and transform responses
 */
apiClient.interceptors.response.use(
    (response) => {
        // Log response in development mode
        if (import.meta.env.DEV) {
            console.log(`[API Response] ${response.config.method?.toUpperCase()} ${response.config.url}`, {
                status: response.status,
                data: response.data,
            });
        }

        // If API returns wrapped response, extract data
        if (response.data && typeof response.data === 'object' && 'data' in response.data) {
            return response.data;
        }

        return response;
    },
    // error handler
    async (error: AxiosError<{ message?: string; errors?: Record<string, string[]> }>) => {
        // Log error in development mode
        if (import.meta.env.DEV) {
            console.error(`[API Error] ${error.config?.method?.toUpperCase()} ${error.config?.url}`, {
                status: error.response?.status,
                data: error.response?.data,
                message: error.message,
            });
        }

        const statusCode = error.response?.status || 500;
        const errorMessage = error.response?.data?.message || error.message || 'An error occurred';
        const errors = error.response?.data?.errors;

        // Handle specific status codes
        switch (statusCode) {
            case 401:
                // Unauthorized - clear tokens and redirect to login
                clearAuthTokens();
                // Redirect to login page
                if (typeof window !== 'undefined' && !window.location.pathname.includes('/sign_in')) {
                    window.location.href = '/sign_in';
                }
                break;

            case 403:
                // Forbidden
                console.error('Access forbidden');
                break;

            case 404:
                // Not Found
                console.error('Resource not found');
                break;

            case 500:
                // Server Error
                console.error('Server error occurred');
                break;

            default:
                // Network error or other errors
                if (!error.response) {
                    console.error('Network error - please check your connection');
                }
                break;
        }

        // Create and throw custom ApiError
        const apiError = new ApiError(errorMessage, statusCode, errors);
        return Promise.reject(apiError);
    }
);

export default apiClient;
