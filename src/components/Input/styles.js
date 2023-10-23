import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  input {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.white};
    padding: 1.6rem 1.4rem;
    border-radius: 0.5rem;
    background: transparent;

    font-size: 1.8rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.colors.light_500};

    &:placeholder {
      color: ${({ theme }) => theme.colors.light_500};
    }
  }

  input:focus {
    -webkit-box-shadow: 0px 0px 10px 5px #193746;
    box-shadow: 0px 0px 10px 5px #193746;
  }

  > svg {
    margin-left: 1.4rem;
  }
`;
