import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5, // data được coi là fresh trong 5 minutes
            gcTime: 1000 * 60 * 10, // sau 30 minutes thì data được xóa khỏi cache
            refetchOnWindowFocus: false, // không refetch khi focus lại window
            retry: false, // query lỗi có retry lại không: không
        },
        mutations: {
            retry: false // mutation lỗi có retry lại 1 lần mấy lần : 1 lần
        }
    },
});

