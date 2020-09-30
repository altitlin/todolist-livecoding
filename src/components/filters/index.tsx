import React from 'react'

import { Wrapper, Button } from './styles'

type TypeButton = {
  id: string
  title: string
}

const BUTTONS: Array<TypeButton> = [ // TypeButton[]
  {
    id: '1',
    title: 'All',
  },
  {
    id: '2',
    title: 'Done',
  },
  {
    id: '3',
    title: 'Active',
  },
]

type Props = {
  count: number
  onChangeFilter: (title: string) => void
}

export const Filters = ({ count, onChangeFilter }: Props) => (
  <Wrapper>
    <span>Count tasks: {count}</span>
    <div>
      {BUTTONS.map(({ id, title }) => (
        <Button key={id} onClick={() => onChangeFilter(title)}>{title}</Button>
      ))}
    </div>
  </Wrapper>
)
