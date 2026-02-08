import type { IUser } from "@/types/user";

export interface IAuthState {
    user: IUser[] | IUser | null;
    accessToken: string | null;
    refreshToken: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
}
