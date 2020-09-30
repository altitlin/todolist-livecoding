import { all, fork } from 'redux-saga/effects'
import { todosSaga } from './todos/saga'

export function* rootSaga() {
  yield all([
    fork(todosSaga),
  ])
}
