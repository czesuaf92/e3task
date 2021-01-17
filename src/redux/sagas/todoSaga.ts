import {
  put,
  call,
  takeLatest,
  takeEvery
} from 'redux-saga/effects'

import {
  TODO_ACTIONS
} from "../actions/todoActions"

import { fetchTodosList } from '../api/todoApi';

function* fetchTodos() {
  yield put({ type: TODO_ACTIONS.SET_LOADING })

  const todos = yield call(fetchTodosList)

  yield put({ type: TODO_ACTIONS.FETCH_TODOS, payload: todos })
}

export default function* todoSaga() {
  yield takeEvery(TODO_ACTIONS.FETCH_TODOS_REQUESTED, fetchTodos)
}
