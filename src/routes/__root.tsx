import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import NotFoundPage from "@/pages/not_found_page";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundPage,
});

function RootComponent() {
  return (
    <div className="w-full max-h-screen">
      <React.Fragment>
        <Outlet />
      </React.Fragment>
    </div>
  );
}
