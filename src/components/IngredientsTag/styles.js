import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0 0.6rem;
  border-radius: 0.8rem;
  color: ${({ theme }) => theme.colors.svg_color};
  border: ${({ theme, isnew }) =>
    isnew ? `1px dashed ${theme.colors.svg_color}` : "none"};
  background-color: ${({ theme, isnew }) =>
    isnew ? "transparent" : theme.colors.ingredients_background};

  svg {
    vertical-align: middle;
  }

  > button {
    border: none;
    background: none;
    margin-left: -2.2rem;
  }

  .button-delete {
    color: ${({ theme }) => theme.colors.svg_color};
  }

  .button-add {
    color: ${({ theme }) => theme.colors.text};
  }

  > input {
    max-width: 11rem;
    height: 3.2rem;
    text-align: center;

    border: none;

    color: ${({ theme }) => theme.colors.text};
    background: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.colors.svg_color};
    }
  }
`;
