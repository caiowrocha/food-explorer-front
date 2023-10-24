/*
Hooks
*/
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import { useLocation } from "react-router-dom";

/*
Components
*/
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

/*
Elements
*/
import { Container, Content, Form } from "./styles";

export function Profile() {
  const { user, updateUserProfile } = useAuth();
  const { pathname } = useLocation();

  const [userEmail, setUserEmail] = useState(user.email);
  const [userName, setUserName] = useState(user.name);
  const [userNewPassword, setUserNewPassword] = useState();
  const [userOldPassword, setUserOldPassword] = useState();

  const handleUserUpdate = async () => {
    const updatedInfo = {
      name: userName,
      email: userEmail,
      password: userNewPassword,
      old_password: userOldPassword,
    };
    const updatedUserInfo = Object.assign(user, updatedInfo);

    await updateUserProfile({ user: updatedUserInfo });
  };

  return (
    <Container>
      <Header pathName={pathname} />
      <Content>
        <Form>
          <h2 className="title">Atualize o seu cadastro</h2>

          <div className="formInput">
            <p>Nome:</p>
            <Input placeholder="Exemplo: Caio Rocha" type="text"></Input>
          </div>

          <div className="formInput">
            <p>E-mail:</p>
            <Input
              placeholder="Exemplo: exemplo@exemplo.com"
              type="text"
            ></Input>
          </div>

          <div className="formInput">
            <p>Nova senha:</p>
            <Input placeholder="No mínimo 6 caracteres" type="password"></Input>
          </div>

          <div className="formInput">
            <p>Senha antiga:</p>
            <Input placeholder="Digite a antiga senha" type="password"></Input>
          </div>

          <Button title="Teste"></Button>
        </Form>
      </Content>
      <Footer />
    </Container>
  );
}
