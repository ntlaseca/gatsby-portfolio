import styled from "styled-components"
import MEDIA from "helpers/mediaTemplates"

export const Wrapper = styled.aside`
  grid-column: span 2;
  position: sticky;
  max-height: 100vh;
  top: 22.8rem;

  & > div {
    grid-column: span 6;
  }

  ${MEDIA.DESKTOP`
    grid-column: span 6;
    position: relative;
    max-width: none;
    max-height: none;
    top: 0;
  `}
`