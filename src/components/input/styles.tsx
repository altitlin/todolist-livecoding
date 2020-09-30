import styled from 'styled-components'

export const InputStyled = styled.input`
  padding: .6rem .8rem;
  border-radius: .2rem;
  border: .1rem solid #ccc;
  outline: none;
  width: 100%;
  margin-bottom: 2rem;
  box-sizing: border-box;

  &:focus {
    border: .1rem solid rgba(0,0,0,0.8);
  }
`
