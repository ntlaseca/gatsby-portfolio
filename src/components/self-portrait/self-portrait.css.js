import styled from "styled-components"
import MEDIA from "helpers/mediaTemplates"

export const Container = styled.div`
  position: fixed;
  width: 25%;

  & canvas {
    width: 100% !important;
    height: auto !important;
  }

  ${MEDIA.DESKTOP`
    position: absolute;
    width: 25%;
    top: 20vh;
    right: 2.8rem;
    left: initial;
    bottom: initial;
    z-index: -1;

    & canvas {
      opacity: .5;
    }
  `}
`