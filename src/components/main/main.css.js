import styled from "styled-components";

export const Wrapper = styled.main`
  display: grid;
  grid-column-start: 5;
  grid-column-end: 13;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-gap: 1em;
`