/*
Hooks
*/
import { useAuth } from "../../hooks/useAuth";
import { useShoppingCart } from "../../hooks/useShoppingCart";
import { useGetFavorites } from "../../hooks/useFavoritesDishes";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

/*
Elements
*/
import { Container, Content, Ingredient, ShoppingCard } from "./styles";
import { FiMinus, FiPlus } from "react-icons/fi";
import { RiArrowLeftSLine } from "react-icons/ri";
import { BsReceipt } from "react-icons/bs";

/*
Components
*/
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Ingredients } from "../../components/Ingredients";
import { Footer } from "../../components/Footer";

/*
Services
*/
import { api } from "../../services/api";

export const Details = () => {
  const { user } = useAuth();
  const { favoriteDishes } = useGetFavorites();
  const { handleAddDish } = useShoppingCart();
  const navigate = useNavigate();
  const params = useParams();

  const [dishDetails, setDishDetails] = useState(null);
  const [amount, setAmount] = useState(1);

  const imageURL =
    dishDetails && `${api.defaults.baseURL}/files/${dishDetails.image}`;

  const handleReturn = () => {
    navigate(-1);
  };

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

  useEffect(() => {
    async function getDishDetails() {
      const response = await api.get(`/dishes/${params.id}`);
      console.log(response.data);
      setDishDetails(response.data);
    }
    getDishDetails();
  }, []);

  return (
    <Container>
      <Header />
      {dishDetails ? (
        <Content>
          <Link>
            <ButtonText
              title={"Voltar"}
              icon={RiArrowLeftSLine}
              onClick={handleReturn}
            ></ButtonText>
          </Link>

          <div className="content">
            <div className="dish">
              <img src={imageURL} alt="Explorer Logo" />
              <div className="product-description">
                <h1>{dishDetails.dish.title}</h1>
                <h3>{dishDetails.dish.description}</h3>

                <Ingredient>
                  {dishDetails.dish.ingredients.map((ingredient) => (
                    <Ingredients
                      key={String(ingredient.id)}
                      ingredient={ingredient.title}
                    />
                  ))}
                </Ingredient>
                <div className="product-price">
                  <div className="shoppingCard">
                    {user.isAdmin ? (
                      <ShoppingCard>
                        {dishDetails && (
                          <Link to={`/editdish/${dishDetails.dish.id}`}>
                            <Button title="editar prato" icon={BsReceipt} />
                          </Link>
                        )}
                      </ShoppingCard>
                    ) : (
                      <ShoppingCard>
                        <div className="counter">
                          <ButtonText icon={FiMinus} onClick={removeFromCart} />
                          <span>{amount.toString().padStart(2, "0")}</span>
                          <ButtonText icon={FiPlus} onClick={addToCart} />
                        </div>

                        <Button
                          title="incluir"
                          value={`• R$ ${dishDetails.dish.price}`}
                          onClick={() =>
                            handleAddDish(dishDetails, amount, imageURL)
                          }
                          style={{
                            height: 56,
                            width: 210,
                            padding: "12px 4px",
                          }}
                        />
                      </ShoppingCard>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Content>
      ) : null}
      <Footer></Footer>
    </Container>
  );
};
