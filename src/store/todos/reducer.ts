import { createReducer, ActionType } from 'typesafe-actions'
import * as actions from './actions'
import { TodosState } from './types'

const initialState: TodosState = {
  todos: [],
  activeFilter: 'All',
  error: '',
  loading: false,
  todo: null,
}

type TodosAction = ActionType<typeof actions>

export const todosReducer = createReducer<TodosState, TodosAction>(initialState)
  .handleAction(actions.addNewTodo, (state, { payload }) => ({
    ...state,
    todos: [...state.todos, payload],
  }))
  .handleAction(actions.removeTodo, (state, { payload }) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== payload),
  }))
  .handleAction(actions.doneTodo, (state, { payload }) => ({
    ...state,
    todos: state.todos.map(todo => todo.id === payload ? ({ ...todo, completed: !todo.completed }) : todo),
  }))
  .handleAction(actions.changeFilter, (state, { payload }) => ({
    ...state,
    activeFilter: payload,
  }))
  .handleAction(actions.requestTodos.request, state => ({ ...state, loading: true }))
  .handleAction(actions.requestTodos.success, (state, { payload }) => ({
    ...state,
    todos: payload,
    loading: false,
  }))
  .handleAction(actions.requestTodos.failure, (state, { payload }) => ({
    ...state,
    error: payload,
  }))
  .handleAction(actions.getTodoById.request, state => ({ ...state, loading: true }))
  .handleAction(actions.getTodoById.success, (state, { payload }) => ({
    ...state,
    todo: payload,
    loading: false,
  }))
