import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 34rem;
  height: 100vh;

  @keyframes scalingUpAndDown {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  max-width: 124rem;
  margin: 0 auto;
  padding: 2rem;
  overflow-y: auto;

  @media only screen and (min-width: 736px) {
    padding: 2rem;
    max-width: 74rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  max-width: 48rem;
  width: 100%;
  height: 50rem;
  border-radius: 1.4rem;
  padding: clamp(1.4rem, 6vw, 8rem);
  background-color: ${({ theme }) => theme.colors.dark_700};

  .inputReduce {
    height: 4rem;
  }

  .title {
    font-size: 2.2rem;
    white-space: nowrap;
  }

  .icon:hover {
    cursor: pointer;
    filter: brightness(0.9);
    animation: scalingUpAndDown 0.5s ease-in-out both;
  }

  > a {
    margin-top: 3.2rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
  }

  > .formInput {
    margin-bottom: 1.6rem;
  }

  > .formInput p {
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.light_400};
  }

  > .formInput:nth-child(5) {
    margin-bottom: 2rem;
  }

  > .alignTitle {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
    margin-bottom: 2rem;

    > h2 {
      flex-grow: 1;
    }
  }
`;
