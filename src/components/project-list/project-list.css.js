import styled from "styled-components"
import MEDIA from "helpers/mediaTemplates"

export const PreviewGrid = styled.div`
  grid-column: span 6;
  display: grid;
  grid-template-rows: auto;
  grid-gap: 6.4rem;
  margin-top: 12.8rem;

  ${MEDIA.TABLET`
    margin-top: 7.2rem;
  `}
`