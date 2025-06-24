import { z } from "zod"
import { protectedProcedure, publicProcedure, router } from "./trpc"

export const appRouter = router({
  example: protectedProcedure
    .input(
      z.object({
        message: z.string().email(),
      }),
    )
    .query(({ input }) => {
      return input
    }),
})

export type AppRouter = typeof appRouter