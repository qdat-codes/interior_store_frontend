import apiClient from '../axios';
import type {
  Order,
  CreateOrderRequest,
  PaginatedResponse,
  SuccessResponse,
} from '../type';

/**
 * Order Service
 */
export const orderService = {
  /**
   * Get all orders for current user
   */
  getOrders: async (params?: { page?: number; pageSize?: number; status?: string }): Promise<PaginatedResponse<Order>> => {
    const response = await apiClient.get<SuccessResponse<PaginatedResponse<Order>>>('/orders', {
      params,
    });
    return response.data.data;
  },

  /**
   * Get order by ID
   */
  getOrderById: async (id: string): Promise<Order> => {
    const response = await apiClient.get<SuccessResponse<Order>>(`/orders/${id}`);
    return response.data.data;
  },

  /**
   * Create new order
   */
  createOrder: async (data: CreateOrderRequest): Promise<Order> => {
    const response = await apiClient.post<SuccessResponse<Order>>('/orders', data);
    return response.data.data;
  },

  /**
   * Cancel order
   */
  cancelOrder: async (id: string): Promise<Order> => {
    const response = await apiClient.put<SuccessResponse<Order>>(`/orders/${id}/cancel`);
    return response.data.data;
  },

  /**
   * Update order status (admin only)
   */
  updateOrderStatus: async (id: string, status: string): Promise<Order> => {
    const response = await apiClient.put<SuccessResponse<Order>>(`/orders/${id}/status`, { status });
    return response.data.data;
  },

  /**
   * Get order tracking information
   */
  // getOrderTracking: async (id: string): Promise<{ status: string; trackingNumber?: string; updates: Array<{ status: string; timestamp: string; location?: string }> }> => {
  //   const response = await apiClient.get<SuccessResponse>(`/orders/${id}/tracking`);
  //   return response.data.data;
  // },
};
