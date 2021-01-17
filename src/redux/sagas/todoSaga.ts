import { AnyAction } from 'redux';
import {
  put,
  call,
  takeLatest,
  takeEvery
} from 'redux-saga/effects'
import {
  TODO_ACTIONS
} from "../actions/todoActions"
import * as Api from '../api/todoApi';

function* fetchTodos() {
  yield put({ type: TODO_ACTIONS.SET_LOADING })

  const todos = yield call(Api.fetchTodosList)

  yield put({ type: TODO_ACTIONS.FETCH_TODOS, payload: todos })
}

function* toggleStatusTodo({ payload }: AnyAction) {
  yield put({ type: TODO_ACTIONS.SET_LOADING })

  const updatedTodo = yield call(Api.toggleStatusTodo, payload)

  yield put({ type: TODO_ACTIONS.TOGGLE_STATUS_TODO, payload: updatedTodo })
}

function* deleteTodo({ payload }: AnyAction) {
  yield put({ type: TODO_ACTIONS.SET_LOADING })

  const deletedTodo = yield call(Api.deleteTodo, payload)

  yield put({ type: TODO_ACTIONS.DELETE_TODO, payload: deletedTodo })
}

export default function* todoSaga() {
  yield takeEvery(TODO_ACTIONS.FETCH_TODOS_REQUESTED, fetchTodos)
  yield takeEvery(TODO_ACTIONS.TOGGLE_STATUS_TODO_REQUESTED, toggleStatusTodo)
  yield takeEvery(TODO_ACTIONS.DELETE_TODO_REQUESTED, deleteTodo)
}
