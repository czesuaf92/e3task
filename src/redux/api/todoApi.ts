import { apiClient } from "../../api/client"
import { DeleteTodoTypes, TodoTypes, ToggleStatusTodoTypes } from "../types";


export const fetchTodosList = async () => {
  const searchParams = [
    ["_start", 0],
    ["_limit", 10]
  ]
  return await apiClient.get("todos", {
    searchParams
  })
    .json<TodoTypes[]>();
}

export const toggleStatusTodo = async ({ id, completed }: ToggleStatusTodoTypes) => {
  return await apiClient.patch(`todos/${id}`, {
    json: { completed }
  }).json<TodoTypes>()
}

export const deleteTodo = async ({ id }: DeleteTodoTypes) => {
  await apiClient.delete(`todos/${id}`)

  return id
}
