import styled from "styled-components";

export const Wrapper = styled.aside`
  position: fixed;
  max-width: calc(33.33333% - 3em);
  padding-right: 2.5rem;

  & > div {
    grid-column: span 12;
  }
`