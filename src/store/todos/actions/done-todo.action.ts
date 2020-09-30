import { createAction } from 'typesafe-actions'
import { TodosActionType } from '../types'

export const doneTodo = createAction(TodosActionType.DONE_TODO)<number>()
