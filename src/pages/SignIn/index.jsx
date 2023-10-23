import { useState } from "react";
import { Link } from "react-router-dom";

/*
Custom Hooks
*/
import { useAuth } from "../../hooks/useAuth";

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
import { Switch } from "../../components/Switch";

export function SignIn() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const { signIn, isLoading } = useAuth();

  function handleSignIn() {
    if (!userEmail || !userPassword) {
      alert("Preencha todos os campos");
      return;
    }
    signIn({ email: userEmail, password: userPassword });
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
        <h1 className="title">Faça login</h1>
        <div className="formInput">
          <p>Email</p>
          <Input
            placeholder="Exemplo: exemplo@exemplo.com"
            type="text"
            onChange={(e) => setUserEmail(e.target.value)}
          ></Input>
        </div>

        <div className="formInput">
          <p>Password</p>
          <Input
            placeholder="No mínimo 6 caracteres"
            type="password"
            onChange={(e) => setUserPassword(e.target.value)}
          ></Input>
        </div>

        <Button
          title={isLoading ? "Carregando..." : "Entrar"}
          onClick={handleSignIn}
          disabled={isLoading}
        ></Button>
        <Link to="/signUp">Criar conta</Link>
      </Form>
      <Switch className="switch"></Switch>
    </Container>
  );
}
