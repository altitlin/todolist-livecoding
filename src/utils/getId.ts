import { Todo } from '../store/todos/types'

export const getId = (arr: Array<Todo>): number => Math.max(...arr.map(item => +item.id)) + 1
