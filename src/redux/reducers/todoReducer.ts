import { TODO_ACTIONS } from '../actions/todoActions';
import { TodosActionTypes, TodosState } from '../types';

const initialState: TodosState = {
  loading: false,
  todos: []
}

const todoReducer = (state = initialState, { type, payload }: TodosActionTypes) => {
  switch (type) {
    case TODO_ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case TODO_ACTIONS.FETCH_TODOS:
      return {
        ...state,
        todos: payload,
        loading: false
      }
    default:
      return state
  }
}

export default todoReducer
