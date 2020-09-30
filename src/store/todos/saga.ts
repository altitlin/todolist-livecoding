import { all, takeEvery } from 'redux-saga/effects'
import { getType } from 'typesafe-actions'
import * as actions from './actions'
import { GetTodos, GetTodoById } from './sagas'

export function* todosSaga() {
  yield all([
    takeEvery(getType(actions.requestTodos.request), GetTodos),
    takeEvery(getType(actions.getTodoById.request), GetTodoById),
  ])
}
