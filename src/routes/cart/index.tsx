import CartPage from "@/pages/cart_page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cart/")({
  component: CartPage,
});
