import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { IUser } from '@/types/user'
import type { IUserState } from './type'

const initialState: IUserState = {
    user: null,
    isLoading: false,
    error: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // set | clear user
        setUser: (state, action: PayloadAction<IUser[] | null>) => {
            state.user = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        createUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        updateUser: (state, action: PayloadAction<IUser>) => {
            if (state.user) {
                state.user = { ...state.user, ...action.payload };
            } else {
                state.user = action.payload;
            }
            state.isLoading = false;
            state.error = null;
        },
        deleteUser: (state) => {
            state.user = null;
            state.isLoading = false;
            state.error = null;
        },
        resetUser: (state) => {
            state.user = null;
            state.isLoading = false;
            state.error = null;
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setUser, createUser, updateUser, deleteUser, resetUser, setIsLoading, setError } = userSlice.actions

export default userSlice.reducer
