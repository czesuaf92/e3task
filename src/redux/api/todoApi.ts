import { apiClient } from "../../api/client"
import { CreateTodoTypes, DeleteTodoTypes, TodoTypes, ToggleStatusTodoTypes } from "../types";


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

export const createTodo = async ({ title }: CreateTodoTypes) => {
  return await apiClient.post('todos', {
    json: {
      title,
      completed: false,
      userId: 1
    }
  }).json<TodoTypes>()
}
