import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import NavButton from "../../components/Buttons/NavButton";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import Framed from "../../layouts/Framed";
import texts from "../../plugins/Texts/texts";
import paths from "../../route/paths";
import useShoppingCartSlice from "../../store/hooks/useShoppingCartSlice";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  DetailsContainer,
  ImgWrapper,
  InfoWrapper,
} from "../../styles/pages/ProductDetailsPageStyles";

type Props = {
  product: Product;
};

const ProductDetailsPage = ({ product }: Props) => {
  const { addProductToCart } = useShoppingCartSlice();

  return (
    <Framed>
      <NavButton
        path={paths.productsList}
        text={texts.navToProductsList}
        startIcon={<ArrowBackIosIcon />}
      />
      <DetailsContainer>
        <ImgWrapper>
          <Image
            src={product.image}
            alt="product_img"
            width={180}
            height={220}
          />
        </ImgWrapper>
        <InfoWrapper>
          <h1>{product.title}</h1>
          <h2>{product.category}</h2>
          <p>{product.description}</p>
          <PrimaryButton
            text={texts.addToCart}
            clickHandler={() => addProductToCart(product)}
          />
        </InfoWrapper>
      </DetailsContainer>
    </Framed>
  );
};

export default ProductDetailsPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const productId = context.params?.productId;
  const jsonData = await fetch(
    `https://fakestoreapi.com/products/${productId} `
  );
  const product: Product = await jsonData.json();

  return { props: { product: product } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const jsonData = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await jsonData.json();
  const params = products.map((p) => ({
    params: { productId: p.id.toString() },
  }));

  return { paths: params, fallback: false };
};
