import React, { useState } from 'react'

import { InputStyled } from './styles'

export const Input = ({ addNewTodo, value }) => {
  const [textInput, setTextInput] = useState('')

  const onChange = ({ target: { value } }) => setTextInput(value)

  const onKeyPress = ({ key }) => {
    if (key === 'Enter' && textInput !== '' && textInput.length >= 3) {
      addNewTodo(textInput)
      setTextInput('')
    }
  }

  return (
    <InputStyled
      className="input-text"
      type='text'
      placeholder='Enter name a new todo'
      value={textInput}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
};
