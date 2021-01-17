import { spawn } from 'redux-saga/effects'

import todoSaga from './todoSaga'

export default function* rootSaga() {
  console.log("Hello From Redux-Saga!")

  yield spawn(todoSaga)
}
