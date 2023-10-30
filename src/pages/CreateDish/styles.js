import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-width: 320px;
  height: 100vh;
  min-height: 100%;

  overflow-y: auto;
  overflow: overlay;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 121.2rem;
  height: 100%;
  margin: auto;
  padding: 3.5rem 4rem;

  overflow-y: auto;
  overflow: overlay;

  .button {
    display: flex;
    justify-content: center;
    margin-top: 3.2rem;
  }

  @media only screen and (min-width: 768px) {
    .button {
      align-self: flex-end;
      justify-content: end;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  h1 {
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 4.5rem;
    text-align: left;
    margin-top: -2rem;
  }

  button:first-child {
    font-size: 2.4rem;
  }

  .header {
    justify-content: center;
    text-align: center;
  }

  > div p {
    margin-bottom: 1rem;
  }

  .dishDetails {
    display: flex;
    flex-direction: column;
    width: auto;
    gap: 3.2rem;
  }

  .dish {
    width: 100%;
  }

  .dishCategory select {
    background: ${({ theme }) => theme.colors.header_background};

    border-radius: 0.5rem;
    border: none;

    height: 4.8rem;
    width: 100%;

    padding: 1rem;

    font-size: 1.6rem;

    line-height: 2.6rem;

    color: ${({ theme }) => theme.colors.svg_color};
    margin-bottom: 1.2rem;
  }

  .dishImage {
    display: flex;
    flex-direction: column;

    width: 100%;

    input[type="file"] {
      display: none;
    }

    > label {
      display: flex;
      justify-content: center;

      padding: 1.1rem 0.5rem;
      gap: 0.5rem;
      border-radius: 0.5rem;

      background-color: ${({ theme }) => theme.colors.header_background};

      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2.4rem;

      cursor: pointer;
    }

    > label:hover {
      background-color: ${({ theme }) => theme.colors.text};
    }
  }

  .ingredients {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: left;
    height: auto;
    gap: 1.2rem;
    padding: 0.8rem;

    border-radius: 0.8rem;
    margin-bottom: 3.2rem;

    background-color: ${({ theme }) => theme.colors.header_background};
  }

  .ingredientsTag {
    justify-content: space-between;
  }

  .dishPrice {
    width: 100%;
  }

  @media only screen and (min-width: 768px) {
    h1 {
      text-align: left;
    }

    .dishDetails {
      display: flex;
      flex-direction: row;
    }

    .dishImage {
      max-width: 22.9rem;
    }

    .dish {
      max-width: 48rem;
      width: 100%;
    }

    .dishCategory {
      width: 100%;
    }

    .adjustSize {
      width: 100%;
    }

    > .details {
      display: flex;
      justify-content: space-between;
    }

    .ingredients {
      display: flex;
      flex-wrap: wrap;
      align-content: center;
      width: 100%;
      max-width: 83.7rem;
      height: auto;
      padding: 0.8rem;
      margin-bottom: 0;

      border-radius: 0.8rem;
    }

    .ingredientsTag {
      display: flex;
      justify-content: space-between;
      gap: 3.2rem;
      width: 100%;
    }

    .dishPrice {
      max-width: 25.1rem;
    }
  }
`;
