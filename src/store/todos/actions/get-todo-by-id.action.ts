import { createAsyncAction } from 'typesafe-actions'
import { GetTodoByIdActionType, GetTodoByIdPayloadParams, Todo } from '../types'

export const getTodoById = createAsyncAction(
  GetTodoByIdActionType.GET_TODO_BY_ID,
  GetTodoByIdActionType.GET_TODO_BY_ID_SUCCESS,
  GetTodoByIdActionType.GET_TODO_BY_ID_ERROR,
)<GetTodoByIdPayloadParams, Todo, string>()
