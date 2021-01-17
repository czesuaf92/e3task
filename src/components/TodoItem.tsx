import React from 'react'
import styled from 'styled-components'
import { TodoTypes } from '../redux/types'

interface TodoItemProps {
  todo: TodoTypes
}
export const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <StyledTodoItem>
      {todo.title}
    </StyledTodoItem>
  )
}

const StyledTodoItem = styled.div`
  display: flex;
  margin-bottom: 1rem;
  /* background-color: red; */
`
