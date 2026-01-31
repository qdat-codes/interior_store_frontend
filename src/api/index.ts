/**
 * API Services Export
 * Import all services from here: import { authService, productService } from '@/api'
 */

export { productService } from './services/product.service';
export { orderService } from './services/order.service';

// Export types
export * from './type';

// Export axios instance (for advanced usage)
export { default as apiClient } from './axios';
