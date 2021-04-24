import styled from "styled-components"
import MEDIA from "helpers/mediaTemplates"

export const Wrapper = styled.header`
  display: flex;
  position: fixed;
  z-index: 10;
`

export const Logo = styled.div`
  & img {
    height: 7.2rem;

    ${MEDIA.DESKTOP`
      height: 4.8rem;
    `}

    &:hover {
      background: none;
    }
  }
`