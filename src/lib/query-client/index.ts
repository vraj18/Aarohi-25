"use client"
import { transformer } from "@/utils/transformer"
import { QueryClient, defaultShouldDehydrateQuery } from "@tanstack/react-query"

export function makeQueryClient() {
  const qc = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30 * 1000,
      },

      dehydrate: {
        serializeData: transformer.serialize,
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === "pending",
      },
      hydrate: {
        deserializeData: transformer.deserialize,
      },
    },
  })

  return qc
}

export const queryClient = makeQueryClient()

let browserQueryClient: QueryClient

export function getQueryClient() {
  if (!browserQueryClient) browserQueryClient = makeQueryClient()
  return browserQueryClient
}