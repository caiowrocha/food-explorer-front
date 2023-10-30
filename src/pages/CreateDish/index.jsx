/*
Hooks
*/
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

/*
Services
*/
import { api } from "../../services/api";

/*
Elements
*/
import { Content, Container, Form } from "./styles";

/*
Icons
*/
import { RiArrowLeftSLine } from "react-icons/ri";
import { FiUpload } from "react-icons/fi";
/*
Components
*/
import { IngredientsTag } from "../../components/IngredientsTag";
import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Textarea } from "../../components/Textarea";

export const CreateDish = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [dishTitle, setDishTitle] = useState("");
  const [dishDescription, setDishDescription] = useState("");
  const [dishPrice, setDishPrice] = useState("");
  const [dishCategory, setDishCategory] = useState("");
  const [dishImage, setDishImage] = useState(null);

  const handleReturn = () => {
    navigate("/");
  };

  const handleAddNewDish = async () => {
    if (!dishImage) {
      alert("Você precisa adicionar uma imagem para o prato.");
      return;
    }
    if (!dishTitle) {
      alert("Você precisa informar um nome para o prato.");
      return;
    }
    if (!dishCategory) {
      alert("Você precisa informar a categoria do prato.");
      return;
    }
    if (!dishPrice) {
      alert("Você precisa informar o preço do prato.");
      return;
    }
    if (!dishDescription) {
      alert("Você precisa informar a descrição do prato.");
      return;
    }
    if (ingredients.length < 1) {
      alert("Você precisa adicionar pelo menos um ingrediente");
      return;
    }
    setIsLoading(true);

    const formData = new FormData();
    formData.append("title", dishTitle);
    formData.append("description", dishDescription);
    formData.append("category", dishCategory);
    formData.append("price", dishPrice);
    formData.append("image", dishImage);

    ingredients.map((ingredient) => formData.append("ingredients", ingredient));

    await api
      .post("/dishes", formData)
      .then(alert("O Prato foi adicionado."), handleReturn())
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível criar o prato.");
        }
      });
    setIsLoading(false);
  };

  const handleAddNewIngredient = () => {
    if (newIngredient.length < 3) {
      alert("Insira um ingrediente com um nome válido");
      return;
    }
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  };

  const handleRemoveIngredient = (deletedIngredient) => {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deletedIngredient)
    );
  };

  return (
    <Container>
      <Header />
      <Content>
        <Form>
          <header>
            <Link to="/">
              <ButtonText
                title="voltar"
                icon={RiArrowLeftSLine}
                className="sizeAdjust"
              />
            </Link>
          </header>
          <h1>Novo prato</h1>

          <div className="dishDetails">
            <div className="dishImage">
              <p>Imagem do Prato</p>
              <label htmlFor="image">
                <FiUpload size={24} />
                Selecione imagem
              </label>
              <Input
                type="file"
                id="image"
                name="image"
                onChange={(e) => setDishImage(e.target.files[0])}
              />
            </div>

            <div className="dish">
              <p>Nome do prato</p>
              <Input
                placeholder="Ex.: Salada Caesar"
                type="text"
                onChange={(e) => setDishTitle(e.target.value)}
              />
            </div>

            <div className="dishCategory">
              <p>Categoria</p>

              <select
                defaultValue={"default"}
                onChange={(e) => setDishCategory(e.target.value)}
              >
                <option value="default" disabled>
                  Selecione a categoria
                </option>
                <option value="dish">Pratos</option>
                <option value="drinks">Bebidas</option>
                <option value="dessert">Sobremesas</option>
              </select>
            </div>
          </div>

          <div className="ingredientsTag">
            <div className="adjustSize">
              <p>Ingredientes</p>
              <div className="ingredients">
                {ingredients.map((ingredient, index) => (
                  <IngredientsTag
                    key={String(index)}
                    value={ingredient}
                    onClick={() => handleRemoveIngredient(ingredient)}
                  />
                ))}

                <IngredientsTag
                  isnew
                  placeholder="Adicionar"
                  onChange={(e) => setNewIngredient(e.target.value)}
                  value={newIngredient}
                  onClick={handleAddNewIngredient}
                />
              </div>
            </div>

            <div className="dishPrice">
              <p>Preço</p>
              <Input
                placeholder="R$ 00,00"
                type="number"
                onChange={(e) => setDishPrice(e.target.value)}
              />
            </div>
          </div>

          <div className="textarea">
            <p>Descrição</p>
            <Textarea
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(e) => setDishDescription(e.target.value)}
            />
          </div>
        </Form>

        <div className="button">
          <Button
            title={isLoading ? "Salvando alterações" : "Salvar alterações"}
            disabled={isLoading}
            onClick={handleAddNewDish}
          />
        </div>
      </Content>
      <Footer />
    </Container>
  );
};
