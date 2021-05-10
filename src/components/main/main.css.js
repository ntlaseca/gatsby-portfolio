import styled from "styled-components"
import MEDIA from "helpers/mediaTemplates"

export const Wrapper = styled.main`
  display: grid;
  grid-column-start: 3;
  grid-column-end: 7;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  grid-gap: 2.4rem;

  ${MEDIA.DESKTOP`
    grid-column: span 6;
  `}

  & > div {
    grid-column: span ${props => props.span ? props.span : 6};
  }
`