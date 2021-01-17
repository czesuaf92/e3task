import React, { Dispatch, useEffect } from 'react'
import styled from 'styled-components'
import { connect, ConnectedProps } from 'react-redux'
import { TODO_ACTIONS } from '../redux/actions/todoActions'
import { TodosState } from '../redux/types'
import { TodosList } from './TodosList'

interface RootState {
  todo: TodosState
}

const mapState = (state: RootState) => ({
  todo: state.todo
})

const mapDispatch = (dispatch: any) => ({
  fetchTodos: () => dispatch({ type: TODO_ACTIONS.FETCH_TODOS_REQUESTED })
})

const connector = connect(mapState, mapDispatch)
type TodosProps = ConnectedProps<typeof connector>

const Todos = ({
  todo: { loading, todos },
  fetchTodos,
}: TodosProps) => {

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <Container>
      <Title>To Do</Title>
      {loading && 'Loading...'}
      <TodosList todos={todos} />
    </Container>
  );
}



const Container = styled.div`
  max-width: 600px;
  width: 100%;
`

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`

export default connector(Todos)
