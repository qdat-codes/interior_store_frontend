import { createFileRoute } from "@tanstack/react-router";
import ProductDetailPage from "@/pages/product_detail_page";

export const Route = createFileRoute("/product/$id")({
  component: ProductDetailPage,
});
