import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  text-align: end;

  width: 35%;
  height: 4.8rem;

  background: none;
  border: none;
  gap: 1rem;

  color: ${({ theme }) => theme.colors.text};
`;
