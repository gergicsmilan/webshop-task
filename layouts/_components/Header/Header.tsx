import texts from "../../../plugins/Texts/texts";
import { Container } from "./_styles/HeaderStyles";

const Header = () => {
  return (
    <Container>
      <h1>{texts.headerTitle}</h1>
      <p>Cart:1</p>
    </Container>
  );
};

export default Header;
