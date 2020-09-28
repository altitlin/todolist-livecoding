import React, { useContext } from 'react'
import { AppContext } from '../../App'

import { Wrapper, Button } from './styles'

export const Filters = () => {
  const { todos, filterTodos } = useContext(AppContext)

  return (
    <Wrapper>
      <span>Count tasks: {todos.length}</span>
      <div>
        <Button onClick={() => filterTodos('All')}>All</Button>
        <Button onClick={() => filterTodos('Done')}>Done</Button>
        <Button onClick={() => filterTodos('Active')}>Active</Button>
      </div>
    </Wrapper>
  )
}
