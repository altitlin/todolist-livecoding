import { createAction } from 'typesafe-actions'
import { TodosActionType } from '../types'

export const removeTodo = createAction(TodosActionType.REMOVE_TODO)<number>()
