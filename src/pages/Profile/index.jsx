/*
Hooks
*/
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
import { FiArrowLeft } from "react-icons/fi";

export const Profile = () => {
  const { user, updateUserProfile } = useAuth();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [userEmail, setUserEmail] = useState(user.email);
  const [userName, setUserName] = useState(user.name);
  const [userNewPassword, setUserNewPassword] = useState("");
  const [userOldPassword, setUserOldPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleUserUpdate = async () => {
    if (userNewPassword.length < 6) {
      alert("É necessário que a nova senha tenha no mínimo 6 caracteres.");
      return;
    }

    setIsLoading(true);

    const updatedInfo = {
      name: userName,
      email: userEmail,
      password: userNewPassword,
      old_password: userOldPassword,
    };
    const updatedUserInfo = Object.assign(user, updatedInfo);

    await updateUserProfile({ user: updatedUserInfo }).then(() => {
      resetFields();
      setIsLoading(false);
    });
  };

  const handleReturn = () => {
    navigate(-1);
  };

  const resetFields = () => {
    setUserNewPassword("");
    setUserOldPassword("");
  };

  return (
    <Container>
      <Header pathName={pathname} />
      <Content>
        <Form>
          <div className="alignTitle">
            <FiArrowLeft size={28} onClick={handleReturn} className="icon" />
            <h2 className="title">Dados Cadastrais</h2>
          </div>

          <div className="formInput">
            <p>Nome:</p>
            <Input
              className="inputReduce"
              placeholder={userName}
              type="text"
              onChange={(e) => setUserName(e.target.value)}
            ></Input>
          </div>

          <div className="formInput">
            <p>E-mail:</p>
            <Input
              className="inputReduce"
              placeholder={userEmail}
              type="text"
              onChange={(e) => setUserEmail(e.target.value)}
            ></Input>
          </div>

          <div className="formInput">
            <p>Nova senha:</p>
            <Input
              className="inputReduce"
              placeholder="No mínimo 6 caracteres"
              type="password"
              onChange={(e) => setUserNewPassword(e.target.value)}
            ></Input>
          </div>

          <div className="formInput">
            <p>Senha antiga:</p>
            <Input
              className="inputReduce"
              placeholder="Digite a senha antiga"
              type="password"
              onChange={(e) => setUserOldPassword(e.target.value)}
            ></Input>
          </div>

          <Button
            title={isLoading ? "Carregando..." : "Atualizar Dados"}
            onClick={() => {
              handleUserUpdate({
                name: userName,
                email: userEmail,
                password: userNewPassword,
                old_password: userOldPassword,
              });
            }}
          ></Button>
        </Form>
      </Content>
      <Footer />
    </Container>
  );
};
