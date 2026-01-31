import OrderDetailPage from "@/pages/order_detail_page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/order/$id")({
  component: OrderDetailPage,
});
