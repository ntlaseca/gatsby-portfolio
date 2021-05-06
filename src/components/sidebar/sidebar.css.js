import styled from "styled-components"
import MEDIA from "helpers/mediaTemplates"

export const Wrapper = styled.aside`
  grid-column: span 4;
  position: sticky;
  max-height: 100vh;
  top: 22.8rem;

  & > div {
    grid-column: span 12;
  }

  ${MEDIA.DESKTOP`
    grid-column: span 12;
    position: relative;
    max-width: none;
    max-height: none;
    top: 0;
  `}
`