import React from "react"
import styled from "styled-components"
import { TodoTypes } from "../redux/types"
import TodoItem from "./TodoItem"

interface TodosListProps {
  todos: TodoTypes[]
}


export const TodosList = ({ todos }: TodosListProps) => {
  return (
    <StyledTodosList>
      {todos?.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </StyledTodosList>
  )
}

const StyledTodosList = styled.div`
display: flex;
  flex-direction: column;
  width: 100%;
`
