import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  @keyframes scaleUpDown {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1.3);
    }
  }
`;

export const Content = styled.div`
  position: relative;

  width: 30rem;
  height: 51.2rem;
  border-radius: 0.8rem;
  background: rgba(0, 0, 0, 0.01);

  .favoriteButton,
  .editDishButton {
    position: absolute;
    top: 1.2rem;
    right: 5rem;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.text};
    font-size: 3rem;
  }

  .editDishButton svg {
    color: ${({ theme }) => theme.colors.svg_color};
  }

  .favoriteButton svg {
    fill: ${({ theme }) => theme.colors.text_description};
  }

  .favoritedDish svg,
  .favoritedDish {
    fill: ${({ theme }) => theme.colors.tomato_100};
  }

  .favoriteButton svg:hover,
  .editDishButton svg:hover {
    animation: scaleUpDown 0.25s 0.1s ease-in-out both;
  }

  .wrapper {
    display: grid;
    padding: 3.8rem 2.6rem;
    text-align: center;
    align-items: center;

    > img {
      width: 17.6rem;
      height: 17.6rem;
      margin: 3rem auto 1.6rem;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  .product-title {
    font-weight: 700;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.text};

    margin-bottom: 1.8rem;
    white-space: nowrap;
  }

  .product-description {
    font-family: "Roboto", sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text_description};

    margin-bottom: 1.6rem;
    height: 3.4rem;
  }

  .product-price {
    font-family: "Roboto", sans-serif;
    font-size: 3.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text_cake};
    margin-top: 1.6rem;
    margin-bottom: 1.6rem;
  }
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
    color: ${({ theme }) => theme.colors.text_description};
    text-align: center;
  }
`;
