import React from "react"
import styled from "styled-components"
import { TodoTypes } from "../redux/types"
import TodoItem from "./TodoItem"

interface TodosListProps {
  todos: TodoTypes[]
}


export const TodosList = ({ todos }: TodosListProps) => {
  if (todos.length === 0) {
    return null
  }
  return (
    <StyledTodosList>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </StyledTodosList>
  )
}

const StyledTodosList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid black;
`
