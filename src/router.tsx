import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { LoaderCircle } from "lucide-react";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultPendingMs: 200,
    defaultPendingMinMs: 300,
    defaultPendingComponent: () => (
      <div className="flex min-h-[40vh] items-center justify-center px-6" role="status">
        <LoaderCircle
          aria-hidden="true"
          className="h-5 w-5 animate-spin motion-reduce:animate-none"
        />
        <span className="sr-only">Loading page</span>
      </div>
    ),
  });

  return router;
};
