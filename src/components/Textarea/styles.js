import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 17.2rem;
  padding: 1.4rem;

  border-radius: 0.5rem;
  border: none;
  resize: none;

  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.header_background};

  &::placeholder {
    color: ${({ theme }) => theme.colors.svg_color};
  }

  &:focus {
    -webkit-box-shadow: 0px 0px 10px 5px #193746;
    box-shadow: 0px 0px 10px 5px #193746;
  }
`;
