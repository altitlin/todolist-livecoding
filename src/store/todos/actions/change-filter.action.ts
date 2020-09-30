import { createAction } from 'typesafe-actions'
import { TodosActionType } from '../types'

export const changeFilter = createAction(
  TodosActionType.CHANGE_FILTER
)<string>()
