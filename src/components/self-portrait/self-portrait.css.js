import styled from "styled-components"
import MEDIA from "helpers/mediaTemplates"

export const Container =  styled.div`
  position: fixed;
  z-index: 0;
  width: calc(33.333% - 4.8rem);
  height: 60%;

  & canvas {
    width: 100% !important;
    height: auto !important;
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