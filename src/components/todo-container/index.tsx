import React from 'react'
import { TodoItem } from '../todo-item'
import { Todo } from '../../store/todos/types'

import { Wrapper } from './styles'

type Props = {
  todos: Array<Todo>
  removeTodo: (id: number) => void
  doneTodo: (id: number) => void
}

export const Todos = ({ todos, removeTodo, doneTodo }: Props) => (
  <Wrapper>
    {todos.map(todo => (
      <TodoItem
        key={todo.id}
        {...todo}
        doneTodo={doneTodo}
        removeTodo={removeTodo}
      />
    ))}
  </Wrapper>
)
