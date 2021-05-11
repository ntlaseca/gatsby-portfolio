import styled from "styled-components"

export const Wrapper = styled.section`
  grid-column: span ${props => props.span};

  & > img {
    display: block;
    width: 100%;
  }
`