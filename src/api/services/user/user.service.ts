import { apiClient, type SuccessResponse } from "@/api";
import type { IUser } from "@/types/user";

export const userService = {
    getAllUsers: async (): Promise<IUser[]> => {
        const response = await apiClient.get<SuccessResponse<IUser[]>>('/user');
        return response.data.data;
    },
    getUser: async (id: string): Promise<IUser> => {
        const response = await apiClient.get<SuccessResponse<IUser>>(`/user/${id}`);
        const body = response.data;
        const payload: IUser =
            body && typeof body === 'object' && 'data' in body
                ? (body as SuccessResponse<IUser>).data
                : (body as IUser);
        return payload;
    },
    updateUser: async (data: IUser): Promise<IUser> => {
        const response = await apiClient.put<SuccessResponse<IUser>>(`/user/${data._id}`, data);
        return response.data.data;
    },
    deleteUser: async (id: string): Promise<void> => {
        await apiClient.delete(`/users/${id}`);
    },
    getUserById: async (id: string): Promise<IUser> => {
        const response = await apiClient.get<SuccessResponse<IUser>>(`/user/${id}`);
        return response.data.data;
    },
    getUsersByRole: async (role: string): Promise<IUser[]> => {
        const response = await apiClient.get<SuccessResponse<IUser[]>>(`/user?role=${role}`);
        return response.data.data;
    }
}
