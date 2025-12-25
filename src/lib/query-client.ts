// query-client.ts
import { QueryCache, QueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { getReadableAxiosError } from "@/lib/error";

let queryClient: QueryClient;

const queryCache = new QueryCache({
  onError: (error, query) => {
    // opt-in only (recommended) to avoid toasting *every* query in the app
    if (query.meta?.toastError !== true) return;

    const info = getReadableAxiosError(error);

    toast.error(info.title, {
      description: info.detail,
      // stable id prevents duplicates / updates same toast
      id: query.queryHash,
      action: {
        label: "Retry",
        onClick: () => {
          queryClient.invalidateQueries({ queryKey: query.queryKey });
        },
      },
    });
  },
});

queryClient = new QueryClient({ queryCache });

export { queryClient };
