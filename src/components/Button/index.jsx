/*
Elements
*/
import { Container } from "./styles";

export const Button = ({ icon: Icon, title, value, ...rest }) => {
  return (
    <Container type="button" {...rest}>
      {Icon ? <Icon size={20} /> : null}
      <strong>{title}</strong> {value}
    </Container>
  );
};
