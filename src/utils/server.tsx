import { appRouter } from "@/server/_app"
import { createTRPCContext } from "@/server/trpc"
import { HydrationBoundary, dehydrate } from "@tanstack/react-query"
import { getQueryClient } from "./proxy"

import type { TRPCQueryOptions } from "@trpc/tanstack-react-query"

export const trpc = appRouter.createCaller(createTRPCContext)

export function HydrateClient(props: { children: React.ReactNode }) {
  const queryClient = getQueryClient()
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {props.children}
    </HydrationBoundary>
  )
}
export function prefetch<T extends ReturnType<TRPCQueryOptions<any>>>(
  queryOptions: T,
) {
  const queryClient = getQueryClient()
  if (queryOptions.queryKey[1]?.type === "infinite") {
    void queryClient.prefetchInfiniteQuery(queryOptions as any)
  } else {
    void queryClient.prefetchQuery(queryOptions)
  }
}