import type { IUser } from "@/types/user";

export interface IUserState {
    user: IUser | null;
    isLoading: boolean;
    error: string | null;
}
