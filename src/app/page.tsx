"use client";
import { useTRPC } from "@/utils/client";
import { useQuery } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import Hero from "@/components/Hero";

export default function Home() {
  const trpc = useTRPC();

  const {data, isError, isLoading, error} = useQuery(
    trpc.example.queryOptions({message: "abc@gmail.com"})
  );

  if (isError) {
    redirect("/sign-in");
  }
  if (isLoading) return <div>Loading...</div>;

  return (
    <main className="flex-1">
      <Hero />
    </main>
  );
}