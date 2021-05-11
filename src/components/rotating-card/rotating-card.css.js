import styled from "styled-components"

export const Container = styled.div`
  padding-top: 6.4rem;
  padding-bottom: 6.4rem;
`

export const Panel = styled.div`
  width: 42.5vmax;
  height: 27.5vmax;
  display: block;
  margin: 0 auto;
  perspective: 64em;
  transform: rotate(-3deg);

  & .front-image, .back-image{
    display: block;
    width: 100%;
    height: auto;
    outline: 1px solid transparent;
  }

  & .front {
    float: none;
    position: absolute;
    margin: auto;
    z-index: 2;
    width: 100%;
    height: auto;
    display: block;
    transform: rotateX(0deg) rotateY(0deg);
    transform-style: preserve-3d;
    backface-visibility: hidden;
    transition: all .4s ease-in-out;

  }
  &:hover .front{
    z-index: 2;
    transform: rotateY(180deg);
  }

  & .back {
    float: none;
    position: absolute;
    z-index: 1;
    width: 100%;
    height: auto;
    transform: rotateY(-180deg);
    transform-style: preserve-3d;
    backface-visibility: hidden;
    transition: all .4s ease-in-out;
  }

  &:hover .back {
    z-index: 3;
    transform: rotateX(0deg) rotateY(0deg);
  }
`