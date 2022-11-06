import { Grid } from "@mui/material";
import { GetStaticProps } from "next";
import ProductCard from "../components/ProductCard/ProductCard";
import Framed from "../layouts/Framed";
import { getProducts } from "../plugins/ApiService/get";

type Props = {
  products: Product[];
};

const ProductsListPage = ({ products }: Props) => (
  <Framed>
    <Grid container spacing={2}>
      {products.map(({ id, title, price, image }) => (
        <ProductCard
          key={id}
          id={id}
          title={title}
          price={price}
          image={image}
        />
      ))}
    </Grid>
  </Framed>
);

export default ProductsListPage;

export const getStaticProps: GetStaticProps = async () => {
  const products = await getProducts();
  return { props: { products: products } };
};
