import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 12.8rem;
  padding-bottom: 12.8rem;

  & > div {
    width: 80%;

    & > svg {
      @keyframes floating-text {
        0% {
          transform: translateY(3em);
          filter: drop-shadow(
            0 .5em .5em rgba(0,0,0,.2)
          );
        }
        100% {
          filter: drop-shadow(
            0 2.5em 2.5em rgba(0,0,0,.1)
          );
        }
      }
      animation: floating-text 4s ease-in-out infinite alternate;
    }
  }
`