import { put, call } from 'redux-saga/effects'

import { ApiTodos } from '../../../service/ApiTodos'
import * as actions from '../actions'
import { Todo } from '../types'

export function* GetTodos() {
  try {
    const data: Array<Todo> = yield ApiTodos.getTodos() // const data = yield call(ApiTodos.deleteTodo, payload)
    yield put(actions.requestTodos.success(data))
  } catch (error) {
    yield put(actions.requestTodos.failure(error.response.data.error))
  }
}
