import styled from "styled-components"
import MEDIA from "helpers/mediaTemplates"

export const Wrapper = styled.header`
  display: flex;
  position: fixed;
  z-index: 10;
`

export const Logo = styled.div`
  opacity: 1;
  
  & img {
    height: 7.2rem;
    transition: all 250ms ease;

    ${MEDIA.DESKTOP`
      height: 6rem;
    `}

    ${MEDIA.TABLET`
      height: 4.8rem;
    `}

    &:hover {
      background: none;
    }
  }
`