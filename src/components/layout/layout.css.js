import styled from "styled-components"
import MEDIA from "helpers/mediaTemplates"

export const Wrapper = styled.div`
  padding: 3.2rem;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-gap: 2.4rem;
  padding-top: 19.6rem;

  ${MEDIA.DESKTOP`
    padding-top: 12rem;
  `}
`