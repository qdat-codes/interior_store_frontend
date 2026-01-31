import type { IUser } from "../user";

export interface ILoginRequest {
    email: string;
    password: string;
}

export interface ILoginResponse {
    token: string;
    refreshToken: string;
    user: IUser;
}

export interface ISignUpRequest {
    username: string
    email: string;
    password: string;
    phone?: string;
    confirmPassword: string;
}

export interface ISignUpResponse {
    token: string;
    refreshToken: string;
    user: IUser;
}

export interface ILogoutRequest {
    refreshToken: string;
}

export interface ILogoutResponse {
    message: string;
}

export interface IRefreshTokenRequest {
    accessToken: string;
}

export interface IRefreshTokenResponse {
    token: string;
}
