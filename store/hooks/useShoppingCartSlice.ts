import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shoppingCartActions } from "../slices/shoppingCartSlice";
import { RootState } from "../store";

const useShoppingCartSlice = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.shoppingCart);

  const itemCount = useMemo(() => products.length, [products.length]);

  const addProductToCart = useCallback(
    (product: Product) => {
      const newShoppingCart = [...products, product];
      dispatch(shoppingCartActions.setShoppingCart(newShoppingCart));
    },
    [dispatch, products]
  );

  return { itemCount, addProductToCart };
};

export default useShoppingCartSlice;
