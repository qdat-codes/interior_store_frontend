import { userService } from "@/api/services/user/user.service";
import { setError } from "@/store/slices/auth";
import { setUser } from "@/store/slices/user";
import type { IUser } from "@/types/user";
import { getErrorMessage } from "@/utils/utils";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

export const useGetAllUsers = () => {
    const dispatch = useDispatch();
    return useMutation({
        mutationFn: () => userService.getAllUsers(),
        onSuccess: (data: IUser[]) => {
            dispatch(setUser(data));
        },
        onError: (error: unknown) => {
            dispatch(setError(getErrorMessage(error, "Lấy danh sách người dùng thất bại.")));
        },
    });
}

export const useGetUser = () => {
    const dispatch = useDispatch();
    return useMutation({
        mutationFn: (id: string) => userService.getUser(id)
        ,
        onSuccess: (data: IUser) => {
            console.log("data get user: ", data);
            dispatch(setUser([data]));
        },
        onError: (error: unknown) => {
            dispatch(setError(getErrorMessage(error, "Lấy người dùng thất bại.")));
        },
    });
}

export const useUpdateUser = () => {
    const dispatch = useDispatch();
    return useMutation({
        mutationFn: (data: IUser) => userService.updateUser(data),
        onSuccess: (data: IUser) => {
            dispatch(setUser([data]));
        },
        onError: (error: unknown) => {
            dispatch(setError(getErrorMessage(error, "Cập nhật người dùng thất bại.")));
        },
    });
}

export const useDeleteUser = () => {
    const dispatch = useDispatch();
    return useMutation({
        mutationFn: (id: string) => userService.deleteUser(id),
        onSuccess: () => {
            dispatch(setUser([]));
        },
        onError: (error: unknown) => {
            dispatch(setError(getErrorMessage(error, "Xóa người dùng thất bại.")));
        },
    });
}


