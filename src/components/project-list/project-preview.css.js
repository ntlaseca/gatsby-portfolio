import styled from "styled-components"
import MEDIA from "helpers/mediaTemplates"

export const Preview = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  width: 100%;

  & a {
    text-decoration: none;
  }

  & span {
    display: block;
    font-size: 1.6rem;
  }
`

export const Number = styled.div`
  padding-right: 2.4rem;
`

export const Container = styled.div`
  width: 100%;
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  & h2 {
  }

  & span {
    font-size: 4.8rem;
    margin-left: auto;
  }

  ${MEDIA.DESKTOP`
    & span {
      font-size: 3.6rem;
    }
  `}

  ${MEDIA.PHONE`
    & span {
      font-size: 2.4rem;
      margin-left: initial;
    }
  `}
`