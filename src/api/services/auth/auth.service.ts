import { setAccessToken, setRefreshToken, clearAuthTokens } from '@/utils/storage';
import type { ILoginRequest, ILoginResponse, ILogoutRequest, IRefreshTokenRequest, ISignUpRequest, ISignUpResponse } from '@/types/auth';
import { apiClient, type SuccessResponse } from '@/api';
/**
 * Authentication Service
 */
export const authService = {
    /**
     * Sign in user
     */
    signIn: async (data: ILoginRequest): Promise<ILoginResponse> => {
        const response = await apiClient.post<SuccessResponse<ILoginResponse> | ILoginResponse>('/auth/login', data);
        const body = response.data;
        const payload: ILoginResponse =
            body && typeof body === 'object' && 'data' in body
                ? (body as SuccessResponse<ILoginResponse>).data
                : (body as ILoginResponse);
        const { accessToken } = payload;
        setAccessToken(accessToken);
        return payload;
    },

    /**
     * Sign up new user
     * Swagger: 200 trả về trực tiếp { user, accessToken } (không bọc trong data)
     */
    signUp: async (data: ISignUpRequest): Promise<ISignUpResponse> => {
        const response = await apiClient.post<SuccessResponse<ISignUpResponse> | ISignUpResponse>('/auth/register', data);
        const body = response.data;
        const payload: ISignUpResponse =
            body && typeof body === 'object' && 'data' in body
                ? (body as SuccessResponse<ISignUpResponse>).data
                : (body as ISignUpResponse);
        const { accessToken } = payload;

        setAccessToken(accessToken);
        if (payload.refreshToken) setRefreshToken(payload.refreshToken);
        return payload;
    },

    /**
     * Sign out user
     */
    logout: async (refresh_token: ILogoutRequest): Promise<void> => {
        try {
            await apiClient.post('/auth/logout', { refresh_token });
        } catch (error) {
            // Even if API call fails, clear local tokens
            console.error('Sign out error:', error);
        } finally {
            clearAuthTokens();
        }
    },

    /**
     * Refresh access token
     */
    refreshToken: async (refresh_token: IRefreshTokenRequest): Promise<string> => {
        const response = await apiClient.post<SuccessResponse<{ token: string }> | { token: string }>('/auth/refresh', { refresh_token });
        const body = response.data;
        const payload =
            body && typeof body === 'object' && 'data' in body
                ? (body as SuccessResponse<{ token: string }>).data
                : (body as { token: string });
        const { token } = payload;
        setAccessToken(token);
        return token;
    },

    /**
     * Request password reset
     */
    requestPasswordReset: async (email: string): Promise<void> => {
        await apiClient.post('/auth/forgot-password', { email });
    },

    /**
     * Reset password with token
     */
    resetPassword: async (token: string, newPassword: string): Promise<void> => {
        await apiClient.post('/auth/reset-password', { token, newPassword });
    },
};
