import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 4.8rem;
  padding: 1.2rem 2.4rem;
  gap: 0.6rem;
  border: none;
  border-radius: 0.5rem;

  font-weight: 500;
  font-size: 1.4rem;

  color: #ffffff;
  /* color: ${({ theme }) => theme.colors.white}; */
  background-color: ${({ theme }) => theme.colors.tomato_100};
`;
