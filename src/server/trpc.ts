import { db } from "@/db"
import { transformer } from "@/utils/transformer"
import { auth } from "@clerk/nextjs/server"
import { initTRPC, TRPCError } from "@trpc/server"
import { redirect } from "next/navigation"
import { cache } from "react"

export const createTRPCContext = cache(async (opts?: Headers) => {
  const session = await auth()

  return async () => ({
    auth: session,
    db,
    ...opts,
  })
})

export type TRPCContext = Awaited<ReturnType<typeof createTRPCContext>>

const t = initTRPC.context<TRPCContext>().create({
  transformer,
})

const authMiddleware = t.middleware( async ({ ctx, next }) => {
  if (!ctx.auth || !ctx.auth.userId) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "You must be logged in to access this resource.",
    })
  }
  return next();
})



export const router = t.router
export const publicProcedure = t.procedure
export const protectedProcedure = t.procedure.use(authMiddleware);
export const createCallerFactory = t.createCallerFactory