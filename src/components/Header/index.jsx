/*
Hooks
*/
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useShoppingCart } from "../../hooks/useShoppingCart";

/*
Icons
*/
import { IoExitOutline } from "react-icons/io5";
import { FiSearch, FiUser, FiShoppingBag, FiHeart } from "react-icons/fi";
import { BsReceipt, BsHeartbreak } from "react-icons/bs";
import { BiDish } from "react-icons/bi";

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

export const Header = ({
  searchDishes,
  favoritesDishesFilter,
  pathName,
  handleFavorites,
}) => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const { shoppingCart, orders } = useShoppingCart();

  const handleSignOut = () => {
    signOut();
    navigate("/");
  };

  const handleSearch = (dish) => {
    searchDishes(dish);
  };

  const handleMobileMenu = () => {
    document.getElementById("hamburguer-menu").classList.toggle("isActive");
    document.getElementById("navigation-menu").classList.toggle("isActive");
    document.getElementById("user-menu").classList.remove("isActive");
  };

  const handleUserOptionsMenu = () => {
    document.getElementById("user-menu").classList.toggle("isActive");
  };

  const handleProfile = (pathName) => {
    if (pathName === "/profile") {
      alert("Você já está na página do seu perfil");
      return true;
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
        </Logo>

        <div className="navigation-menu" id="navigation-menu">
          <Search>
            <label>
              <FiSearch size={24} />
              <input
                type="text"
                placeholder="Busque nossas opções de pratos"
                onChange={(e) => {
                  searchDishes(e.target.value);
                }}
              ></input>
            </label>
          </Search>

          {user.isAdmin ? (
            <Link to="/ordersIndex">
              <Button type="button" className="">
                <BsReceipt size={24} />
                Ver pedidos <span>({orders.length})</span>
              </Button>
            </Link>
          ) : (
            <Link to="/shoppingCart">
              <Button type="button" disabled={true} className="">
                <BsReceipt size={24} />
                Pedidos<span>({shoppingCart.length})</span>
              </Button>
            </Link>
          )}

          {user.isAdmin ? (
            <Profile
              onClick={() => {
                handleUserOptionsMenu();
              }}
            >
              <div className="user-menu menuAdjust" id="user-menu">
                <Link to="/profile">
                  <ButtonMenu>
                    <FiUser size={24} />
                    Perfil
                  </ButtonMenu>
                </Link>

                <Link to="/orders">
                  <ButtonMenu onClick={favoritesDishesFilter}>
                    <FiShoppingBag size={24} />
                    Ver pedidos
                  </ButtonMenu>
                </Link>

                <Link to="/createDish">
                  <ButtonMenu>
                    <BiDish size={24} />
                    Novo Prato
                  </ButtonMenu>
                </Link>
                <Link
                  onClick={() => {
                    handleSignOut();
                  }}
                >
                  <ButtonMenu>
                    <IoExitOutline size={24} />
                    Sair
                  </ButtonMenu>
                </Link>
              </div>
              <FiUser className="iconHide" />
            </Profile>
          ) : (
            <Profile
              onClick={() => {
                handleUserOptionsMenu();
              }}
            >
              <FiUser className="iconHide" />
              <div className="user-menu" id="user-menu">
                <Link to="/profile">
                  <ButtonMenu
                    disabled={pathName === "/profile"}
                    onClick={() => {
                      if (handleProfile(pathName)) {
                        return;
                      }
                      handleUserOptionsMenu();
                    }}
                  >
                    <FiUser className="iconHide" size={24} />
                    Meu Perfil
                  </ButtonMenu>
                </Link>

                <Link to="/orders">
                  <ButtonMenu>
                    <FiShoppingBag size={24} />
                    Meus Pedidos
                  </ButtonMenu>
                </Link>

                <Link to="/">
                  <ButtonMenu onClick={favoritesDishesFilter}>
                    {handleFavorites ? (
                      <>
                        <FiHeart size={24} /> Meus favoritos
                      </>
                    ) : (
                      <>
                        <BsHeartbreak size={24} />
                        Ver todos os Pratos
                      </>
                    )}
                  </ButtonMenu>
                </Link>

                <Link
                  to="/"
                  onClick={() => {
                    handleSignOut();
                  }}
                >
                  <ButtonMenu>
                    <IoExitOutline size={24} />
                    Sair
                  </ButtonMenu>
                </Link>
              </div>
            </Profile>
          )}
        </div>
        <Switch className="switch" />
      </Content>
    </Container>
  );
};
