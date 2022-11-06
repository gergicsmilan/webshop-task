import { API_URL } from "./config";

export const getProducts = async () => {
  const jsonData = await fetch(`${API_URL}/products`);
  const products: Product[] = await jsonData.json();
  return products;
};

export const getProductById = async (
  productId: string | string[] | undefined
) => {
  const jsonData = await fetch(`${API_URL}/products/${productId} `);
  const product: Product = await jsonData.json();
  return product;
};
