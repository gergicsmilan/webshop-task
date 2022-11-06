import texts from "../../../plugins/Texts/texts";
import { Container, Wrapper } from "./_styles/HeaderStyles";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <h1>{texts.headerTitle}</h1>
        <p>Cart:1</p>
      </Wrapper>
    </Container>
  );
};

export default Header;
