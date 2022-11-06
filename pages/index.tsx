import { Grid } from "@mui/material";
import { GetStaticProps } from "next";
import ProductCard from "../components/ProductCard/ProductCard";
import Framed from "../layouts/Framed";

type Props = {
  products: Product[];
};

export default function ProductsListPage({ products }: Props) {
  return (
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
}

export const getStaticProps: GetStaticProps = async () => {
  const jsonData = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await jsonData.json();
  return { props: { products: products } };
};
