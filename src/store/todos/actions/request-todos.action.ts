import { createAsyncAction } from 'typesafe-actions'
import { RequestTodosActionType, Todo } from '../types'

export const requestTodos = createAsyncAction(
  RequestTodosActionType.REQUEST_TODOS,
  RequestTodosActionType.REQUEST_TODOS_SUCCESS,
  RequestTodosActionType.REQUEST_TODOS_ERROR,
)<null, Todo[], string>()
