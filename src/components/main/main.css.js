import styled from "styled-components"
import MEDIA from "helpers/mediaTemplates"

export const Wrapper = styled.main`
  display: grid;
  grid-column-start: 5;
  grid-column-end: 13;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-gap: 2.4rem;

  ${MEDIA.DESKTOP`
    grid-column: span 12;
  `}

  & > div {
    grid-column: span ${props => props.span ? props.span : 12};
  }
`