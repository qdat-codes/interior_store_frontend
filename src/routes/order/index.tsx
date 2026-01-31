import OrderPage from "@/pages/order_page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/order/")({
  component: OrderPage,
});
