import texts from "../../../plugins/Texts/texts";
import useShoppingCartSlice from "../../../store/hooks/useShoppingCartSlice";
import { Container, Wrapper } from "./_styles/HeaderStyles";

const Header = () => {
  const { itemCount } = useShoppingCartSlice();

  return (
    <Container>
      <Wrapper>
        <h1>{texts.headerTitle}</h1>
        <p>Cart: {itemCount}</p>
      </Wrapper>
    </Container>
  );
};

export default Header;
