/**
 * API Types and Interfaces
 */


/**
 * Generic API Response wrapper
 */
export interface SuccessResponse<T> {
    success: boolean;
    code: string;
    data: T;
    message: string;
    status: number
}

/**
 * Paginated Response
 */
export interface PaginatedResponse<T> {
    items: T[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
}

/**
 * API Error Response Structure
 */
export interface ErrorResponse<T> {
    success: boolean;
    code: string;
    message: string;
    data: T;
}

/**
 * Custom API Error Class
 */
export class ApiError extends Error {
    statusCode: number;
    errors?: Record<string, string[]>;

    constructor(message: string, statusCode: number = 500, errors?: Record<string, string[]>) {
        super(message);
        this.name = 'ApiError';
        this.statusCode = statusCode;
        this.errors = errors;
    }
}

/**
 * Product Types
 */
export interface Product {
    id: string;
    name: string;
    description?: string;
    price: number;
    image: string;
    images?: string[];
    category?: string;
    colors?: string[];
    sizes?: string[];
    stock?: number;
    rating?: number;
    reviewsCount?: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface ProductQueryParams {
    page?: number;
    pageSize?: number;
    category?: string;
    search?: string;
    minPrice?: number;
    maxPrice?: number;
    sortBy?: 'price' | 'name' | 'rating' | 'createdAt';
    sortOrder?: 'asc' | 'desc';
}

/**
 * Order Types
 */
export interface Order {
    id: string;
    userId: string;
    items: OrderItem[];
    totalPrice: number;
    shippingAddress: ShippingAddress;
    shippingMethod: string;
    paymentMethod: string;
    status: OrderStatus;
    promoCode?: string;
    discount?: number;
    shippingFee?: number;
    createdAt: string;
    updatedAt: string;
}

export interface OrderItem {
    productId: string;
    productName: string;
    productImage: string;
    quantity: number;
    price: number;
    size?: string;
    color?: string;
}

export interface ShippingAddress {
    username: string;
    phone: string;
    province: string;
    district: string;
    ward: string;
    address: string;
}

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

export interface CreateOrderRequest {
    items: OrderItem[];
    shippingAddress: ShippingAddress;
    shippingMethod: string;
    paymentMethod: string;
    promoCode?: string;
}
