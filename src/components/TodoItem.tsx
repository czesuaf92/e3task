import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import styled from 'styled-components'
import { TODO_ACTIONS } from '../redux/actions/todoActions'
import { TodoTypes, ToggleStatusTodoPayload } from '../redux/types'

const mapDispatch = (dispatch: any) => ({
  toggleStatusTodo: (payload: ToggleStatusTodoPayload) => dispatch({ type: TODO_ACTIONS.TOGGLE_STATUS_TODO_REQUESTED, payload: payload })
})

const connector = connect(null, mapDispatch)
type PropsFromRedux = ConnectedProps<typeof connector>

type TodoItemProps = PropsFromRedux & {
  todo: TodoTypes
}

const TodoItem = ({ todo: { title, completed, id }, toggleStatusTodo }: TodoItemProps) => {
  return (
    <StyledTodoItem>
      <input type="checkbox" checked={completed} onChange={() => toggleStatusTodo({ id: id, completed: !completed })} />
      <StyledTodoTitle>{title}</StyledTodoTitle>
      { completed && <StyledDeleteButton type="button">Delete</StyledDeleteButton>}
    </StyledTodoItem>
  )
}

const StyledTodoItem = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  margin-bottom: 1rem;
  position: relative;
  /* background-color: red; */
`

const StyledTodoTitle = styled.p`
  text-align: left;
  margin-left: 0.5rem;
  padding-right: 5rem;
`

const StyledDeleteButton = styled.button`
  position: absolute;
  right: 0;
  background-color: red;
  color: white;
  margin-left: auto;
`

export default connector(TodoItem)
