import styled from "styled-components"
import MEDIA from "helpers/mediaTemplates"

export const Wrapper = styled.div`
  grid-column: span 12;
  display: flex;
  justify-content: space-between;
  margin-top: 4.8rem;
  ${MEDIA.DESKTOP`
    display: none;
  `}
`

export const MobileWrapper = styled(Wrapper)`
  display: none;
  ${MEDIA.DESKTOP`
    display: flex;
  `}
`