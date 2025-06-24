import "server-only" // <-- ensure this file cannot be imported from the client
import { makeQueryClient } from "@/lib/query-client"
import { appRouter } from "@/server/_app"
import { createTRPCContext } from "@/server/trpc"
import { createTRPCOptionsProxy } from "@trpc/tanstack-react-query"
import { cache } from "react"

export const getQueryClient = cache(makeQueryClient)

export const trpc = createTRPCOptionsProxy({
  ctx: createTRPCContext,
  router: appRouter,
  queryClient: getQueryClient,
})