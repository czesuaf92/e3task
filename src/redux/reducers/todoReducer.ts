import { TODO_ACTIONS } from '../actions/todoActions';
import { TodosActionTypes, TodosState } from '../types';

const initialState: TodosState = {
  loading: true,
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
    case TODO_ACTIONS.TOGGLE_STATUS_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => todo.id === payload.id ? payload : todo),
        loading: false
      }
    case TODO_ACTIONS.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
        loading: false
      }
    case TODO_ACTIONS.CREATE_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
        loading: false
      }
    default:
      return state
  }
}

export default todoReducer
