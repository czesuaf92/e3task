import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import styled from 'styled-components'
import { TODO_ACTIONS } from '../redux/actions/todoActions'
import { DeleteTodoTypes, TodoTypes, ToggleStatusTodoTypes } from '../redux/types'

const mapDispatch = (dispatch: any) => ({
  toggleStatusTodo: (payload: ToggleStatusTodoTypes) => dispatch({ type: TODO_ACTIONS.TOGGLE_STATUS_TODO_REQUESTED, payload }),
  deleteTodo: (payload: DeleteTodoTypes) => dispatch({ type: TODO_ACTIONS.DELETE_TODO_REQUESTED, payload })
})

const connector = connect(null, mapDispatch)
type PropsFromRedux = ConnectedProps<typeof connector>

type TodoItemProps = PropsFromRedux & {
  todo: TodoTypes
}

const TodoItem = ({
  todo: {
    title,
    completed,
    id
  },
  toggleStatusTodo,
  deleteTodo
}: TodoItemProps) => {
  return (
    <StyledTodoItem>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleStatusTodo({ id, completed: !completed })}
      />
      <StyledTodoTitle>{title}</StyledTodoTitle>
      { completed && (
        <StyledDeleteButton
          type="button"
          onClick={() => deleteTodo({ id })}
        >
          Delete
        </StyledDeleteButton>
      )}
    </StyledTodoItem>
  )
}

const StyledTodoItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 1rem 5rem 1rem 1rem;
  box-sizing: border-box;
  &:not(:last-child) {
    border-bottom: 1px solid black;
  }
`

const StyledTodoTitle = styled.p`
  text-align: left;
  margin-left: 0.5rem;
`

const StyledDeleteButton = styled.button`
  position: absolute;
  right: 1rem;
  background-color: red;
  color: white;
  margin-left: auto;
`

export default connector(TodoItem)
