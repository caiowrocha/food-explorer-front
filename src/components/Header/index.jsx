/*
Hooks
*/
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

/*
Icons
*/
import { IoExitOutline } from "react-icons/io5";
import { FiSearch, FiUser, FiShoppingBag, FiHeart } from "react-icons/fi";
import { BsReceipt } from "react-icons/bs";

/*
Elements
*/
import {
  Button,
  ButtonMenu,
  Container,
  Content,
  Logo,
  Profile,
  Search,
} from "./styles";

/*
Assets
*/
import explorerLogo from "../../assets/polygon-logo-small.svg";

/*
Components
*/
import { Switch } from "../Switch";

export function Header({ searchDishes, favoritesDishesFilter, pathname }) {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const cart = [1, 2, 3, 4, 5];
  const orders = [1, 2, 3, 4, 5];

  const handleSignOut = () => {
    signOut();
    navigate(-1);
  };

  const handleMobileMenu = () => {
    document.getElementById("hamburguer-menu").classList.toggle("isActive");
    document.getElementById("navigation-menu").classList.toggle("isActive");
    document.getElementById("user-menu").classList.remove("isActive");
  };

  const handleUserOptionsMenu = () => {
    document.getElementById("user-menu").classList.toggle("isActive");
  };

  const handleProfile = (pathname) => {
    if (pathname === "/profile") {
      alert("Você já está na página do seu perfil");
      return;
    }
  };

  return (
    <Container>
      <div className=""></div>
      <Content>
        <div
          className="hamburguer-menu"
          id="hamburguer-menu"
          onClick={handleMobileMenu}
        >
          <span className="navigation-bar"></span>
          <span className="navigation-bar"></span>
          <span className="navigation-bar"></span>
        </div>
        <Logo>
          <Link to="/">
            <div className="explorerLogo">
              <img src={explorerLogo} alt="Explorer Logo" />
            </div>
            {user.isAdmin ? (
              <div>
                <h1>Food explorer</h1>
                <span className="span-in-div">admin</span>
              </div>
            ) : (
              <h1>Food explorer</h1>
            )}
          </Link>
          {/* <Switch className="switchSmall" /> */}
        </Logo>

        <div className="navigation-menu" id="navigation-menu">
          <Search>
            <label>
              <FiSearch size={24} />
              <input
                type="text"
                placeholder="Busque nossas opções de pratos"
                onChange={(e) => {
                  handleSearch(e.target.value);
                }}
              ></input>
            </label>
          </Search>

          {user.isAdmin ? (
            <Link to="/ordersIndex">
              <Button type="button">
                <BsReceipt size={24} />
                Ver pedidos <span>({orders.length})</span>
              </Button>
            </Link>
          ) : (
            <Link to="/shoppingCart">
              <Button type="button" disabled={true}>
                <BsReceipt size={24} />
                Pedidos<span>({cart.length})</span>
              </Button>
            </Link>
          )}

          {user.isAdmin ? (
            <Profile onClick={handleUserOptionsMenu}>
              <div className="user-menu testingPosition" id="user-menu">
                <Link to="/profile">
                  <ButtonMenu>
                    <FiShoppingBag size={24} />
                    Perfil
                  </ButtonMenu>
                </Link>

                <Link to="/orders">
                  <ButtonMenu onClick={favoritesFilter}>
                    <FiHeart size={24} />
                    Ver pedidos
                  </ButtonMenu>
                </Link>

                <Link to="/createdish">
                  <ButtonMenu>
                    <FiUser size={24} />
                    Novo Prato
                  </ButtonMenu>
                </Link>
                <Link onClick={signOut}>
                  <ButtonMenu>
                    <IoExitOutline size={24} />
                    Sair
                  </ButtonMenu>
                </Link>
              </div>
              <FiUser className="iconHide" />
            </Profile>
          ) : (
            <Profile onClick={handleUserOptionsMenu}>
              <FiUser className="iconHide" />
              <div className="user-menu" id="user-menu">
                <Link to="/profile">
                  <ButtonMenu
                    onClick={() => {
                      handleProfile(pathname);
                    }}
                  >
                    <FiUser size={24} />
                    Meu Perfil
                  </ButtonMenu>
                </Link>
                <Link to="/" onClick={handleSignOut}>
                  <ButtonMenu>
                    <IoExitOutline size={24} />
                    Sair
                  </ButtonMenu>
                </Link>
              </div>
            </Profile>
          )}
        </div>
        <Switch className="switchBig" />
      </Content>
    </Container>
  );
}
