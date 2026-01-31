import CheckoutPage from "@/pages/checkout_page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/checkout/")({
  component: CheckoutPage,
});
