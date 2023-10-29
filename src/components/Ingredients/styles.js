import styled from "styled-components";

export const Container = styled.div`
  > p {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 140%;
    text-align: center;

    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.ingredients_tag};
    padding: 0.5rem 0.8rem;
    border-radius: 5px;
  }
`;
