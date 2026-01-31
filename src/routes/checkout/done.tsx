import CheckoutDonePage from "@/pages/checkout_done_page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/checkout/done")({
  component: CheckoutDonePage,
});
