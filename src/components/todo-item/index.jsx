import React from 'react'

import { SpanStyled, Item, DeleteButton, DoneButton } from './styles'

export const TodoItem = ({ id, title, isDone, doneTodo, removeTodo }) => {
  return (
    <Item>
      <SpanStyled isdone={isDone}>{title}</SpanStyled>
      <DeleteButton onClick={() => removeTodo(id)}>delete</DeleteButton>
      <DoneButton onClick={() => doneTodo(id)}>done</DoneButton>
    </Item>
  );
}
