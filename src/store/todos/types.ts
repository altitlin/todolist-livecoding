export type Todo = {
  userId?: number
  id: number
  title: string
  completed: boolean
}

export enum RequestTodosActionType {
  REQUEST_TODOS = 'REQUEST_TODOS/get',
  REQUEST_TODOS_SUCCESS = 'REQUEST_TODOS/get/success',
  REQUEST_TODOS_ERROR = 'REQUEST_TODOS/get/error',
}

export enum GetTodoByIdActionType {
  GET_TODO_BY_ID = 'GET_TODO_BY_ID/get',
  GET_TODO_BY_ID_SUCCESS = 'GET_TODO_BY_ID/get/success',
  GET_TODO_BY_ID_ERROR = 'GET_TODO_BY_ID/get/error',
}

export enum TodosActionType {
  ADD_TODO = 'ADD_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
  DONE_TODO = 'DONE_TODO',
  CHANGE_FILTER = 'CHANGE_FILTER',
}

export type TodosState = {
  todos: Array<Todo>
  activeFilter: string
  error: string
  loading: boolean
  todo: Todo | null
}

export type GetTodoByIdPayloadParams = {
  id: string
}
