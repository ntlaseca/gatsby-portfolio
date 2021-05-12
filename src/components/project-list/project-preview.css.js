import styled from "styled-components"
import MEDIA from "helpers/mediaTemplates"

export const Preview = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  width: 100%;

  & a {
    text-decoration: none;
    display: block;
  }

  ${MEDIA.PHONE`
    flex-wrap: wrap;
  `}

`

export const Number = styled.div`
  padding-right: 2.4rem;

  ${MEDIA.PHONE`
    margin-bottom: 1.2rem;
  `}
`

export const Container = styled.div`
  width: 100%;

  & > span {
    display: block;
    font-size: 1em;
    margin-top: 1em;
  }
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

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
    & h2 {
      padding-right: 1.2rem;
    }

    & span {
      font-size: 2.4rem;
      margin-left: initial;
    }
  `}
`