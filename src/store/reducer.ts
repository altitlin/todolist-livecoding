import { combineReducers } from 'redux'
import { StateType } from 'typesafe-actions'
import { todosReducer } from './todos/reducer'

export const rootReducer = combineReducers({
  todos: todosReducer
})

export type RootState = StateType<typeof rootReducer>
