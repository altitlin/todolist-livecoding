import styled, { css } from 'styled-components'

export const SpanStyled = styled.span`
  ${({ isdone }) => isdone && css`
    text-decoration: line-through;
  `}
`

export const Item = styled.li`
  padding: .7rem .9rem;
  display: grid;
  grid-template-columns: 1fr repeat(2, max-content);
  column-gap: 10px;
`

const Button = styled.button`
  outline: none;
  border: none;
  border-radius: 3px;
  padding: .4rem .7rem;
  cursor: pointer;
`

export const DeleteButton = styled(Button)`
  background-color: red;
  opacity: .9;
  color: #fff;
`

export const DoneButton = styled(Button)`
  background-color: green;
  opacity: .9;
  color: #fff;
`
