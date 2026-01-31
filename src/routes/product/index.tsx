import ProductPage from "@/pages/product_page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/product/")({
  component: ProductPage,
});
