"use client"
import { getQueryClient } from "@/lib/query-client"
import type { AppRouter } from "@/server/_app"
import { transformer } from "@/utils/transformer"
import { createTRPCClient, httpBatchLink } from "@trpc/client"
import { createTRPCContext } from "@trpc/tanstack-react-query"
import { useState } from "react"

export const { TRPCProvider, useTRPC, useTRPCClient } =
  createTRPCContext<AppRouter>()

function getUrl() {
  const base = (() => {
    if (typeof window !== "undefined") return ""
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
    return "http://localhost:3000"
  })()
  return `${base}/api/trpc`
}

export function TRPCReactProvider(
  props: Readonly<{
    children: React.ReactNode
  }>,
) {
  const queryClient = getQueryClient()
  const [trpcClient] = useState(() =>
    createTRPCClient<AppRouter>({
      links: [
        httpBatchLink({
          transformer,
          url: getUrl(),
        }),
      ],
    }),
  )
  return (
    <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
      {props.children}
    </TRPCProvider>
  )
}