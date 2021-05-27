import styled from "styled-components"
import MEDIA from "helpers/mediaTemplates"

export const Container =  styled.div`
  position: fixed;
  z-index: 0;
  display: block;
  width: calc(33.333% - 6.4rem);
  height: 60%;

  & canvas {
    width: 100% !important;
    height: 100% !important;
    display: block;
  }

  ${MEDIA.DESKTOP`
    position: absolute;
    width: 100%;
    height: 32rem;
    top: 16.4rem;
    right: 0;
    bottom: 0;
    left: 20%;
    z-index: -1;

    & canvas {
      opacity: .5;
    }
  `}

  ${MEDIA.TABLET`
    height: 25.4rem;
    top: 12.8rem;
  `}
`