import styled from "styled-components"
import MEDIA from "helpers/mediaTemplates"

export const Wrapper = styled.div`
  padding: 3.2rem;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-gap: 4.8rem;
  padding-top: 19.6rem;

  ${MEDIA.DESKTOP`
    padding-top: 16.4rem;
  `}

  ${MEDIA.TABLET`
    padding-top: 12rem;
  `}
`