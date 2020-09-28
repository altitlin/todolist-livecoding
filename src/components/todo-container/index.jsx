import React, { useContext } from 'react'
import { AppContext } from '../../App'
import { TodoItem } from '../todo-item'

import { Wrapper } from './styles'

export const TodoContainer = () => {
  const { todos, doneTodo, removeTodo } = useContext(AppContext);

  return (
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
}
