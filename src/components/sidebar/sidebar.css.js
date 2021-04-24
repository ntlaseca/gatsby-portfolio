import styled from "styled-components"
import MEDIA from "helpers/mediaTemplates"

export const Wrapper = styled.aside`
  position: fixed;
  max-width: calc(33.33333% - 3.6rem);

  & > div {
    grid-column: span 12;
  }

  ${MEDIA.DESKTOP`
    position: relative;
    max-width: none;
    grid-column: span 12;
  `}
`