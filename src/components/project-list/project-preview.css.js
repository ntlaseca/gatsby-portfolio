import styled from "styled-components"
import MEDIA from "helpers/mediaTemplates"

export const Preview = styled.div`
  grid-column: span 4;

  ${MEDIA.DESKTOP`
    grid-column: span 6;
  `}
`