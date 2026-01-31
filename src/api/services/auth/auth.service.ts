import { setAccessToken, setRefreshToken, clearAuthTokens } from '@/utils/storage';
import type { IUser } from '@/types/user';
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
        const response = await apiClient.post<SuccessResponse<ILoginResponse>>('/auth/login', data);
        const { token, refreshToken } = response.data.data;

        // Store tokens
        setAccessToken(token);
        if (refreshToken) {
            setRefreshToken(refreshToken);
        }

        return response.data.data;
    },

    /**
     * Sign up new user
     */
    signUp: async (data: ISignUpRequest): Promise<ISignUpResponse> => {
        const response = await apiClient.post<SuccessResponse<ISignUpResponse>>('/auth/register', data);

        const { token, refreshToken } = response.data.data;

        // Store tokens
        setAccessToken(token);
        if (refreshToken) {
            setRefreshToken(refreshToken);
        }

        return response.data.data;
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
        const response = await apiClient.post<SuccessResponse<{ token: string }>>('/auth/refresh', { refresh_token });
        const { token } = response.data.data;
        setAccessToken(token);
        return token;
    },

    /**
     * Get current authenticated user
     */
    getCurrentUser: async (): Promise<IUser> => {
        const response = await apiClient.get<SuccessResponse<IUser>>('/auth/me');
        return response.data.data;
    },

    /**
     * Verify email
     */
    verifyEmail: async (token: string): Promise<void> => {
        await apiClient.post('/auth/verify-email', { token });
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
