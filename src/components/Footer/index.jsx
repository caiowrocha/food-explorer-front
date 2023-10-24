import { Container, Content, Logo } from "./style";
import explorerLogoGray from "../../assets/polygon-logo-gray.svg";

export function Footer() {
  return (
    <Container>
      <Content>
        <Logo>
          <div className="explorerLogo">
            <img src={explorerLogoGray} alt="Explorer Logo Gray" />
            <span>Food explorer</span>
          </div>
        </Logo>
        <p>© 2023 - Todos os direitos reservados.</p>
      </Content>
    </Container>
  );
}
