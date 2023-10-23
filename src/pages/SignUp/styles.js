import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 110rem;
  padding: 10rem 4rem;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;

  > .switch {
    position: absolute;
    top: 6rem;
    right: 4rem;
  }

  @media only screen and (min-width: 932px) {
    flex-direction: row;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  max-width: 48rem;
  width: 100%;
  height: 68rem;
  border-radius: 1.4rem;
  padding: clamp(1.4rem, 6vw, 8rem);
  background-color: ${({ theme }) => theme.colors.dark_700};

  > .title {
    text-align: center;
    padding-top: 2rem;
    margin-bottom: 4.2rem;
  }

  > a {
    margin-top: 3.2rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
  }

  > .formInput {
    margin-bottom: 3.2rem;
  }

  > .formInput p {
    margin-bottom: 0.8rem;
    color: ${({ theme }) => theme.colors.light_400};
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3.8rem;
  color: ${({ theme }) => theme.colors.cake_200};

  h1 {
    color: ${({ theme }) => theme.colors.white};
    padding-left: 2rem;
    font-size: clamp(2.6rem, 3rem + 1.3vw, 4rem);
    white-space: nowrap;
  }

  .explorerLogo {
    display: flex;
    gap: 1.9rem;
  }
`;
