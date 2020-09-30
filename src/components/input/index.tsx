import React from 'react'

import { InputStyled } from './styles'

interface Props {
  value: string
  onChange: any
  onKeyPress: any
}

export const Input = ({ value, onChange, onKeyPress }: Props) => (
  <InputStyled
    className="input-text"
    type='text'
    placeholder='Enter name a new todo'
    value={value}
    onChange={onChange}
    onKeyPress={onKeyPress}
  />
)
