import { apiClient } from "../../api/client"


export const fetchTodosList = async () => {
  const searchParams = [
    ["_start", 0],
    ["_limit", 10]
  ]
  return apiClient.get("todos", {
    searchParams
  })
    .json<any>();
}
