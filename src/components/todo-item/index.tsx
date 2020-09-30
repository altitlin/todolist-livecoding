import React from 'react'
import { Link } from 'react-router-dom'

import { SpanStyled, Item, DeleteButton, DoneButton } from './styles'

type Props = {
  id: number
  title: string
  completed: boolean
  removeTodo: (id: number) => void
  doneTodo: (id: number) => void
}

export const TodoItem = ({ id, title, completed, doneTodo, removeTodo }: Props) => {
  return (
    <Item>
      <Link to={`/${id}`}>
        <SpanStyled completed={completed}>{title}</SpanStyled>
      </Link>
      <DeleteButton onClick={() => removeTodo(id)}>delete</DeleteButton>
      <DoneButton onClick={() => doneTodo(id)}>done</DoneButton>
    </Item>
  );
}
