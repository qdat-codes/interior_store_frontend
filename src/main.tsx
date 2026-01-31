import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ErrorBoundary from "./shared/components/ErrorBoundary";
import "./index.css";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen.ts";
import { store } from "./store";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./react-query";
import { Provider } from "react-redux";

// tạo router instance
const router = createRouter({ routeTree });

// Declare router types để TypeScript hiểu
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary>
          <RouterProvider router={router} />
        </ErrorBoundary>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
