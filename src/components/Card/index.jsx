/*
Hooks
*/
import { Link } from "react-router-dom";
import { useGetFavorites } from "../../hooks/useFavoritesDishes";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

/*
Services
*/
import { api } from "../../services/api";

/*
Components
*/
import { ButtonText } from "../ButtonText";
import { Button } from "../Button";

/* 
Elements
*/
import { Container, Content, ShoppingCard } from "./styles";
import { FiMinus, FiPlus } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart, AiOutlineEdit } from "react-icons/ai";
import placeholderImg from "../../assets/not-found.svg";

export const Card = ({ data, ...rest }) => {
  const { user } = useAuth();

  const { favoriteDishes, includeFavoriteDish, removeFavoriteDish } =
    useGetFavorites();

  const imageURL = data.image
    ? `${api.defaults.baseURL}/files/${data.image}`
    : null;

  const dishIsFavorite = favoriteDishes.some(
    (dish) => dish.title === data.title
  );

  const [amount, setAmount] = useState(1);

  const addToCart = () => {
    if (amount > 14) {
      alert("A quantidade máxima permitida por item é de 15 unidades");
      return;
    }
    setAmount((currentAmount) => (currentAmount += 1));
  };

  const removeFromCart = () => {
    if (amount < 2) {
      alert("A quantidade mínima permitida por item é de 1 unidade");
      return;
    }
    setAmount((currentAmount) => (currentAmount -= 1));
  };

  return (
    <Container {...rest}>
      {user.isAdmin ? (
        <Content>
          <button className="editDishButton">
            <Link to={`/editDish/${data.id}`}>
              <AiOutlineEdit className="setColor" />
            </Link>
          </button>
          <div className="wrapper">
            <img src={imageURL} alt="Imagem do prato" />
            <Link to={`/details/${data.id}`}>
              <h3 className="product-title">
                {data.title}
                {" >"}
              </h3>
            </Link>
            <p className="product-description">{data.description}</p>
            <h1 className="product-price">R$ {data.price}</h1>
          </div>
        </Content>
      ) : (
        <Content>
          <button
            className="favoriteButton"
            onClick={() =>
              dishIsFavorite
                ? removeFavoriteDish(data)
                : includeFavoriteDish(data)
            }
          >
            {dishIsFavorite ? (
              <span className="favoritedDish">
                <AiFillHeart />
              </span>
            ) : (
              <AiOutlineHeart />
            )}
          </button>

          <div className="wrapper">
            <img src={imageURL} alt="Imagem do prato" />
            <Link to={`/details/${data.id}`}>
              <h3 className="product-title">
                {data.title}
                {" >"}{" "}
              </h3>
            </Link>
            <p className="product-description">{data.description}</p>
            <h1 className="product-price">R$ {data.price}</h1>

            <ShoppingCard>
              <div className="counter">
                <ButtonText icon={FiMinus} onClick={removeFromCart} />
                <span>{amount.toString().padStart(2, "0")}</span>
                <ButtonText icon={FiPlus} onClick={addToCart} />
              </div>

              <Button
                title="incluir"
                onClick={() => handleAddDishToCart(data, amount, imageURL)}
                style={{ height: 56, width: 92 }}
              />
            </ShoppingCard>
          </div>
        </Content>
      )}
    </Container>
  );
};
