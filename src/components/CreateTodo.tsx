import React, { ChangeEvent, FormEvent, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import styled from "styled-components";
import { TODO_ACTIONS } from "../redux/actions/todoActions";
import { CreateTodoTypes } from "../redux/types";

const mapDispatch = (dispatch: any) => ({
  createTodo: (payload: CreateTodoTypes) => dispatch({ type: TODO_ACTIONS.CREATE_TODO_REQUESTED, payload })
})

const connector = connect(null, mapDispatch)
type PropsFromRedux = ConnectedProps<typeof connector>

const CreateTodo = ({ createTodo }: PropsFromRedux) => {
  const [inputValue, setInputValue] = useState<string>('')
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    createTodo({ title: inputValue })
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        onChange={handleChange}
        value={inputValue}
        placeholder="Enter a title for a new task"
      />
      <button type="submit">Create</button>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`

const StyledInput = styled.input`
  flex: 1 0 auto;
  margin-right: 2rem;
`


export default connector(CreateTodo)
