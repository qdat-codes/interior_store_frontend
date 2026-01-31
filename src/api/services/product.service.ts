import apiClient from '../axios';
import type {
  Product,
  ProductQueryParams,
  SuccessResponse,
  PaginatedResponse,
} from '../type';

/**
 * Product Service
 */
export const productService = {
  /**
   * Get all products with optional filters and pagination
   */
  getProducts: async (params?: ProductQueryParams): Promise<PaginatedResponse<Product>> => {
    const response = await apiClient.get<SuccessResponse<PaginatedResponse<Product>>>('/products', {
      params,
    });
    return response.data.data;
  },

  /**
   * Get product by ID
   */
  getProductById: async (id: string): Promise<Product> => {
    const response = await apiClient.get<SuccessResponse<Product>>(`/products/${id}`);
    return response.data.data;
  },

  /**
   * Search products
   */
  searchProducts: async (query: string, params?: Omit<ProductQueryParams, 'search'>): Promise<PaginatedResponse<Product>> => {
    const response = await apiClient.get<SuccessResponse<PaginatedResponse<Product>>>('/products/search', {
      params: {
        ...params,
        q: query,
      },
    });
    return response.data.data;
  },

  /**
   * Get products by category
   */
  getProductsByCategory: async (category: string, params?: Omit<ProductQueryParams, 'category'>): Promise<PaginatedResponse<Product>> => {
    const response = await apiClient.get<SuccessResponse<PaginatedResponse<Product>>>('/products', {
      params: {
        ...params,
        category,
      },
    });
    return response.data.data;
  },

  /**
   * Get featured products
   */
  getFeaturedProducts: async (limit?: number): Promise<Product[]> => {
    const response = await apiClient.get<SuccessResponse<Product[]>>('/products/featured', {
      params: { limit },
    });
    return response.data.data;
  },

  /**
   * Get related products
   */
  getRelatedProducts: async (productId: string, limit?: number): Promise<Product[]> => {
    const response = await apiClient.get<SuccessResponse<Product[]>>(`/products/${productId}/related`, {
      params: { limit },
    });
    return response.data.data;
  },
};
