import { TODO_ACTIONS } from "./actions/todoActions";

export interface TodoTypes {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TodosState {
  loading: boolean;
  todos: TodoTypes[];
}

export interface FetchTodosTypes {
  type: TODO_ACTIONS;
  payload: TodosState;
}

export type TodosActionTypes = FetchTodosTypes;

export type SearchParamsTypes = (string | number)[][];
