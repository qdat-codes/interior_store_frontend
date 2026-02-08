import type { IUser } from "@/types/user";

export interface IUserState {
    user: IUser[] | IUser | null;
    isLoading: boolean;
    error: string | null;
}
