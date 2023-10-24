import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  height: 100vh;
  min-width: 34rem;
  width: 100%;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  max-width: 124rem;
  margin: 0 auto;
  padding: 4rem;

  @media only screen and (min-width: 932px) {
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
  height: 60rem;
  margin-top: -2rem;
  border-radius: 1.4rem;
  padding: clamp(1.4rem, 6vw, 8rem);
  background-color: ${({ theme }) => theme.colors.dark_700};

  > .title {
    text-align: center;
    margin-bottom: 3.6rem;
  }

  > a {
    margin-top: 3.2rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
  }

  > .formInput {
    margin-bottom: 2rem;
  }

  > .formInput p {
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.light_400};
  }
`;
