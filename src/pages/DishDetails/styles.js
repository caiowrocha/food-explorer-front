import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-width: 35rem;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.body_background};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 121.2rem;
  height: 100%;
  margin: auto;
  padding: 3.5rem 4rem;

  button:first-child {
    font-size: 2.4rem;
    font-weight: 500;
  }

  .product-description {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .product-description h4 {
    margin: 2rem 0 2rem;
    font-size: 3.2rem;
    line-height: 5.12rem;
    color: ${({ theme }) => theme.colors.svg_color};
  }

  .content {
    font-size: 2rem;
    line-height: 4.75rem;
    margin-top: 1rem;
    text-align: center;

    h1 {
      font-size: 3rem;
      font-weight: 500;
      margin-bottom: 0.8rem;
    }

    h3 {
      max-width: 60rem;
      font-size: 1.8rem;
      font-weight: 400;
      line-height: 140%;
      margin-bottom: 2.6rem;
      color: ${({ theme }) => theme.colors.svg_color};
    }

    h4 {
      height: 5.6rem;
      padding: 0 2rem;
      border-radius: 0.8rem;
      text-align: center;
      white-space: nowrap;
      line-height: 5.6rem;

      border: 1px solid white;
      background-color: ${({ theme }) => theme.colors.text};
    }

    button:first-child {
      font-size: 1.6rem;
    }

    img {
      width: 22rem;
      height: 22rem;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  @media only screen and (min-width: 768px) {
    width: 100%;
    max-width: 121.2rem;
    margin: auto;
    padding: 3.5rem 4rem;

    .dish {
      display: flex;
      justify-content: center;
      gap: 8rem;
    }

    .product-description {
      align-items: flex-start;
      text-align: left;
      align-self: center;
    }

    .product-description h4 {
      margin: 0;
    }

    .product-price {
      display: flex;
      align-items: center;
      gap: 5.4rem;
      margin-top: 4.3rem;
    }

    .content {
      margin-top: 4.2rem;

      h1 {
        font-size: 4rem;
        font-weight: 500;
        margin-bottom: 0.8rem;
      }

      h3 {
        font-size: 2.4rem;
        font-weight: 400;
        line-height: 140%;
        margin-bottom: 2.6rem;
        max-width: 60rem;
      }

      img {
        width: clamp(5rem, 5rem + 30vw, 39rem);
        height: clamp(5rem, 5rem + 30vw, 39rem);
      }
    }
  }
`;

export const Ingredient = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.6rem;
  margin-bottom: 2rem;
`;

export const ShoppingCard = styled.div`
  display: flex;

  button {
    height: 5.6rem;
    max-width: 24.6rem;
    white-space: nowrap;
  }

  .counter {
    display: flex;
    align-items: center;
    gap: 1.4rem;
    margin: 0 2.4rem 0 0;
  }

  .counter span {
    font-size: 2rem;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
  }

  p {
    font-weight: 700;
    line-height: 160%;
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
  }
`;
