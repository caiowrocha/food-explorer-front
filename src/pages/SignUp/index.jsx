/*
Hooks
*/
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

/*
Elements
*/
import { Container, Form, Logo } from "./styles";
import explorerLogo from "../../assets/polygon-logo.svg";

/*
Components
*/
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Switch } from "../../components/Switch";
/*
Services
*/
import { api } from "../../services/api";

export const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();

  function handleSignUp() {
    if (!userName || !userEmail || !userPassword) {
      return alert("É necessário que você preencha todos os campos.");
    }
    if (userPassword.length < 6) {
      return alert("É necessário uma senha com no mínimo 6 caracteres.");
    }
    setIsLoading(true);

    api
      .post("/users", {
        name: userName,
        email: userEmail,
        password: userPassword,
      })
      .then(() => {
        alert("Usuário cadastrado.");
        navigate(-1);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível realizar o cadastro");
        }
      });
    setIsLoading(false);
  }

  function onReturn() {
    navigate("/");
  }

  return (
    <Container>
      <Logo>
        <div className="explorerLogo">
          <img src={explorerLogo} alt="" />
        </div>
        <h1>Food explorer</h1>
      </Logo>
      <Form>
        <h1 className="title">Crie sua conta</h1>
        <div className="formInput">
          <p>Nome:</p>
          <Input
            className="border"
            placeholder="Exemplo: Caio Rocha"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          ></Input>
        </div>

        <div className="formInput">
          <p>E-mail:</p>
          <Input
            className="border"
            placeholder="Exemplo: caio@email.com"
            type="text"
            onChange={(e) => setUserEmail(e.target.value)}
          ></Input>
        </div>

        <div className="formInput">
          <p>Senha:</p>
          <Input
            className="border"
            placeholder="No mínimo 6 dígitos"
            type="password"
            onChange={(e) => setUserPassword(e.target.value)}
          ></Input>
        </div>
        <Button
          title={isLoading ? "Carregando..." : "Criar conta"}
          disabled={isLoading}
          onClick={handleSignUp}
        ></Button>

        <Link to="/">Já tenho uma conta</Link>
      </Form>
      <Switch className="switch"></Switch>
    </Container>
  );
};
