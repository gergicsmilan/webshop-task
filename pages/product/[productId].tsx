import { useRouter } from "next/router";
import Framed from "../../layouts/Framed";

const ProductDetailsPage = () => {
  const { query } = useRouter();
  return <Framed>ProductDetails: {query.productId}</Framed>;
};

export default ProductDetailsPage;
