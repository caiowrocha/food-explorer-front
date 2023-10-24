import styled from "styled-components";

export const Container = styled.footer`
  height: 7.7rem;

  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.dark_600};
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 122rerem;
  padding: 0 4rem;
  margin: auto;

  color: ${({ theme }) => theme.colors.gray_300};

  > p {
    font-size: 1.4rem;
    font-family: "DM Sans", sans-serif;
    text-align: right;
  }
`;

export const Logo = styled.div`
  .explorerLogo {
    display: flex;
    justify-content: center;
    height: 7.7rem;
    gap: 1rem;

    align-items: center;
    white-space: nowrap;

    color: ${({ theme }) => theme.colors.gray_300};
  }

  span {
    font-family: "Roboto", sans-serif;
    font-size: clamp(1.6rem, 4vw, 2.2rem);
    font-weight: 700;
    font-size: 2rem;
    flex-wrap: wrap;
  }
`;
