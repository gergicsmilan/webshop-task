import Badge from "../../../components/Badge/Badge";
import texts from "../../../plugins/Texts/texts";
import useShoppingCartSlice from "../../../store/hooks/useShoppingCartSlice";
import { Container, Wrapper } from "./_styles/HeaderStyles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  const { itemCount } = useShoppingCartSlice();

  return (
    <Container>
      <Wrapper>
        <h1>{texts.headerTitle}</h1>
        <Badge count={itemCount} Icon={<ShoppingCartIcon />} />
      </Wrapper>
    </Container>
  );
};

export default Header;
