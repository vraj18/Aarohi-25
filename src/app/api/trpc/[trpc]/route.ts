import { appRouter } from "@/server/_app"
import { createTRPCContext } from "@/server/trpc"
import { fetchRequestHandler } from "@trpc/server/adapters/fetch"

async function handler(req: Request) {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: await createTRPCContext(req.headers),
  })
}
export { handler as GET, handler as POST }