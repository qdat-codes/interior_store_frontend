import { authService } from "@/api/services/auth/auth.service";
import { queryClient } from "@/react-query";
import { clearError, logout, setError, setToken, setUser } from "@/store/slices/auth";
import type { ILoginRequest, ILoginResponse, ILogoutRequest, IRefreshTokenRequest, ISignUpRequest, ISignUpResponse } from "@/types/auth";
import { getErrorMessage } from "@/utils/utils";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

export const useLogin = () => {
    const dispatch = useDispatch();
    return useMutation({
        mutationFn: (data: ILoginRequest) => authService.signIn(data),
        onSuccess: (data: ILoginResponse) => {
            dispatch(setUser(data.user));
            dispatch(setToken({ accessToken: data.token }));
            dispatch(clearError());
            queryClient.invalidateQueries({ queryKey: ['user'] });
        },
        onError: (error: unknown) => {
            dispatch(setError(getErrorMessage(error, "Đăng nhập thất bại. Vui lòng thử lại.")));
        },
    });
}

export const useSignUp = () => {
    const dispatch = useDispatch();
    return useMutation({
        mutationFn: (data: ISignUpRequest) => authService.signUp(data),
        onSuccess: (data: ISignUpResponse) => {
            dispatch(setUser(data.user));
            dispatch(setToken({ accessToken: data.token }));
            dispatch(clearError());
            queryClient.invalidateQueries({ queryKey: ['user'] });
        },
        onError: (error: unknown) => {
            dispatch(setError(getErrorMessage(error, "Đăng ký thất bại. Vui lòng thử lại.")));
        },
    });
}

export const useLogout = () => {
    const dispatch = useDispatch();
    return useMutation({
        mutationFn: (refreshToken: ILogoutRequest) => authService.logout(refreshToken),
        onSuccess: () => {
            dispatch(logout());
            queryClient.clear();
        },
        onError: (error: unknown) => {
            dispatch(setError(getErrorMessage(error, "Đăng xuất thất bại. Vui lòng thử lại.")));
        },
    });
}

export const useRefreshToken = () => {
    const dispatch = useDispatch();
    return useMutation({
        mutationFn: (refreshToken: IRefreshTokenRequest) => authService.refreshToken(refreshToken),
        onSuccess: (accessToken: string) => {
            dispatch(setToken({ accessToken }));
            dispatch(clearError());
        },
        onError: (error: unknown) => {
            dispatch(setError(getErrorMessage(error, "Làm mới phiên đăng nhập thất bại. Vui lòng đăng nhập lại.")));
        },
    });
}

