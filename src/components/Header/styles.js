import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.header_background};
  position: sticky;
  top: 0;
  z-index: 9999;

  @keyframes scalingUpAndDown {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1.2);
    }
  }

  .switch {
    margin-top: 0.42rem;
    align-self: center;
  }
  /* Test */
  .hideFull {
    margin-top: -16rem;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  justify-content: space-evenly;

  width: 121.2rem;
  height: 10.4rem;

  padding: 0 4rem;
  gap: 3.2rem;

  .hamburguer-menu {
    display: none;
  }

  .navigation-menu {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 3.2rem;
  }

  .navigation-bar {
    display: block;
    margin: 0.5rem auto;
    width: 2.5rem;
    height: 0.3rem;
    background-color: ${({ theme }) => theme.colors.text};
    transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
  }

  @media only screen and (max-width: 768px) {
    max-width: 768px;

    .navigation-menu {
      flex-direction: column;
      align-items: center;
      text-align: center;
      position: fixed;
      left: -100%;
      top: 10.4rem;
      z-index: 9999;

      width: 100%;
      /* Test: 80% */
      height: 100%;
      gap: 2rem;
      border-radius: 0 0 2rem 2rem;

      padding: 3.2rem;
      background-color: ${({ theme }) => theme.colors.dark_700};
      box-shadow: 0 0.1rem 2.7rem ${({ theme }) => theme.colors.gray_400};
    }

    .navigation-menu.isActive {
      left: 0;
    }

    .navigation-item {
      margin-block: 2.5rem;
      margin-inline: 0;
    }

    .hamburguer-menu {
      display: block;
      cursor: pointer;
    }

    .hamburguer-menu.isActive .navigation-bar:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }

    .hamburguer-menu.isActive .navigation-bar:nth-child(2) {
      opacity: 0;
    }

    .hamburguer-menu.isActive .navigation-bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  position: relative;

  .explorerLogo {
    display: flex;
    gap: 1rem;
  }

  .explorerLogo:hover {
    filter: brightness(0.8);
  }

  .test {
    display: flex;
    flex-direction: row;
    gap: 30px;
  }

  h1 {
    font-size: clamp(2rem, 6vw, 2.4rem);
    white-space: nowrap;
  }

  .span-in-div {
    position: absolute;
    right: 0;
    font-size: 1.2rem;
    margin-top: -1rem;
    color: ${({ theme }) => theme.colors.text_cake};
  }

  a {
    display: flex;
    gap: 1.2rem;
    color: inherit;
  }
`;

export const Search = styled.div`
  width: 100%;
  border-radius: 0.5rem;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;

  background-color: ${({ theme }) => theme.colors.dark_900};

  input {
    display: flex;
    width: 100%;
    height: 4.8rem;
    padding: 1.6rem;
    text-align: left;
    border: 0;
    color: ${({ theme }) => theme.colors.svg_color};
    background: transparent;

    &:placeholder {
      color: ${({ theme }) => theme.colors.gray_200};
    }
    &:focus {
      -webkit-box-shadow: 0px 0px 10px 5px #193746;
      box-shadow: 0px 0px 10px 5px #193746;
    }
  }

  label {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 2rem;
  }

  svg {
    color: ${({ theme }) => theme.colors.svg_color};
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 21.6rem;
  height: 5.6rem;

  border: none;
  border-radius: 0.5rem;

  gap: 1.1rem;

  font-size: 1.4rem;

  background-color: ${({ theme }) => theme.colors.background_tomato};
  color: ${({ theme }) => theme.colors.text_background_button};

  padding: 0 3rem;
`;

export const Logout = styled(Link)`
  display: flex;
  align-self: center;

  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.colors.text};
    font-size: 3.2rem;
  }

  > svg:hover {
    animation: scalingUpAndDown 0.5s ease-in-out both;
    filter: brightness(0.9);
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 5.6rem;
  border: none;
  background: none;

  cursor: pointer;

  > svg {
    color: ${({ theme }) => theme.colors.text};
    font-size: 3.2rem;
  }

  > svg:hover {
    animation: scalingUpAndDown 0.5s ease-in-out both;
  }

  .user-menu {
    display: none;
  }

  .user-menu-mobile {
    display: none;
  }

  .user-menu-mobile.isActive {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 3rem;
  }

  .user-menu.isActive {
    display: flex;
    flex-direction: column;
    align-self: center;
    transition: 0.4s;

    position: absolute;
    margin-top: 28rem;
    padding-bottom: 60rem;
    gap: 1rem;
    padding: 1rem;

    z-index: 9999;

    border-radius: 1rem;

    background-color: ${({ theme }) => theme.colors.background_tomato};
    box-shadow: 0 1rem 2.5rem ${({ theme }) => theme.colors.gray_400};
  }

  .user-menu.isActive.menuAdjust {
    position: absolute;
    margin-top: 28rem;
    padding-bottom: 60rem;
    gap: 1rem;
    padding: 1rem;

    z-index: 9999;
    border-radius: 1rem;

    background-color: ${({ theme }) => theme.colors.background_tomato};
    box-shadow: 0 1rem 2.5rem ${({ theme }) => theme.colors.gray_400};
  }

  @media (min-width: 100px) and (max-width: 768px) {
    .user-menu {
      /* margin-top: -36rem;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 3rem; */
      margin-top: -48rem;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap: 0.6rem;
      width: 100%;
    }
    .user-menu.menuAdjust {
      /* Test: -12rem */
      margin-top: -48rem;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap: 0.6rem;
      width: 100%;
    }
    .iconHide {
      display: none;
    }
  }
`;

export const ButtonMenu = styled.button`
  display: flex;
  align-items: center;

  width: 100%;
  height: 4rem;
  padding: 0 1.6rem;
  gap: 1rem;

  border: none;
  border-radius: 0.5rem;

  font-size: 1.4rem;

  color: ${({ theme }) => theme.colors.text_background_button};
  background-color: ${({ theme }) => theme.colors.background_tomato};
`;
