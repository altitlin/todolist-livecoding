import styled from 'styled-components'

export const Wrapper = styled.ul`
  list-style-type: none;
  width: 100%;
  padding: 0;
  margin: 0;
  border: 1px solid rgba(0, 0, 0, .8);
  border-radius: 5px;
  margin-bottom: 2rem;

  & li:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, .8);
  }
`
