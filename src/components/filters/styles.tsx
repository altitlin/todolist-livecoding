import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: center;

  & div {
    justify-self: end;
  }
`

export const Button = styled.button`
  outline: none;
  border: none;
  margin-left: 10px;
  padding: .5rem;
  border-radius: 3px;
  cursor: pointer;
`
