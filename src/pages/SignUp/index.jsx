import { Link, useNavigate } from "react-router-dom";
/*
Hooks
*/
import { useState } from "react";

/*
Elements
*/
import { Container, Form, Logo } from "./styles";
import polygonLogo from "../../assets/polygon-logo.svg";

/*
Components
*/
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

/*
Services
*/
import { api } from "../../services/api";

export function SignUp() {
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
    navigate(-1);
  }

  return (
    <Container>
      <Logo>
        <div className="explorerLogo">
          <img src={polygonLogo} alt="" />
        </div>
        <h1>Food explorer</h1>
      </Logo>
      <Form>
        <h1 className="title">Crie sua conta</h1>
        <div className="formInput">
          <p>Nome</p>
          <Input
            placeholder="Exemplo: Caio Rocha"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          ></Input>
        </div>

        <div className="formInput">
          <p>E-mail</p>
          <Input
            placeholder="Exemplo: caio@email.com"
            type="text"
            onChange={(e) => setUserEmail(e.target.value)}
          ></Input>
        </div>

        <div className="formInput">
          <p>Senha</p>
          <Input
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

        <Link onClick={onReturn}>Já tenho uma conta</Link>
      </Form>
    </Container>
  );
}
