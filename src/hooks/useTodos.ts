import { useQuery } from "react-query";
import { client } from "@/pages/api/client";

export function useTodos() {
  return useQuery("todos", async () => {
    const { data } = await client.get("users/1/todos");
    return data;
  });
}
