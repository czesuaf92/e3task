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

export interface DeleteTodoTypes {
  id: number;
}

export interface ToggleStatusTodoTypes {
  id: number;
  completed: boolean;
}

export interface TodosActionTypes {
  type: TODO_ACTIONS;
  payload: any;
}

export type SearchParamsTypes = (string | number)[][];

