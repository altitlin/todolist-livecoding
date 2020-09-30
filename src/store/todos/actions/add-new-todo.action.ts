import { createAction } from 'typesafe-actions'
import { TodosActionType, Todo } from '../types'

export const addNewTodo = createAction(
  TodosActionType.ADD_TODO
)<Todo>()
