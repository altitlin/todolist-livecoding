import { put, call } from 'redux-saga/effects'
import { ActionType } from 'typesafe-actions'

import { ApiTodos } from '../../../service/ApiTodos'
import * as actions from '../actions'
import { Todo } from '../types'

export function* GetTodoById({ payload }: ActionType<typeof actions.getTodoById.request>) {
  try {
    const data: Todo = yield call(ApiTodos.getTodoById, payload)
    yield put(actions.getTodoById.success(data))
  } catch (error) {
    yield put(actions.getTodoById.failure(error.response.data.error))
  }
}
