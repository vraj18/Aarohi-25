"use client"
import { getQueryClient } from "@/lib/query-client"
import { QueryClientProvider } from "@tanstack/react-query"

const qc = getQueryClient()

export function TanstackQueryProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <QueryClientProvider client={qc}>{children}</QueryClientProvider>
}