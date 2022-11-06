import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Framed from "../../layouts/Framed";
import paths from "../../route/paths";

type Props = {
  product: Product;
};

const ProductDetailsPage = ({ product }: Props) => {
  return (
    <Framed>
      <Link href={paths.productsList}>Products List</Link>
      <h1>{product.title}</h1>
      <h2>{product.category}</h2>
      <p>{product.description}</p>
      <Image src={product.image} alt="product_img" width={100} height={100} />
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
