export interface IUser {
    _id: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    role: string;
    phone: string;
    address: string;
    avatar: string;
    favoriteProducts: string[];
    refreshToken: string;
}
