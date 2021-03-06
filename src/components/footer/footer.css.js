import styled from "styled-components"
import MEDIA from "helpers/mediaTemplates"

export const Wrapper = styled.footer`
  margin-top: 12.8rem;
  font-size: 2.8rem;

  ${MEDIA.DESKTOP`
    font-size: 2.4rem;
  `}

  ${MEDIA.TABLET`
    margin-top: 9.6rem;
    font-size: 2rem;
  `}
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`