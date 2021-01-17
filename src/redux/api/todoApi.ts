import { apiClient } from "../../api/client"
import { TodoTypes, ToggleStatusTodoPayload } from "../types";


export const fetchTodosList = async () => {
  const searchParams = [
    ["_start", 0],
    ["_limit", 10]
  ]
  return apiClient.get("todos", {
    searchParams
  })
    .json<TodoTypes[]>();
}

export const toggleStatusTodo = async ({ id, completed }: ToggleStatusTodoPayload) => {
  return apiClient.patch(`todos/${id}`, {
    json: { completed }
  }).json<TodoTypes>()
}
