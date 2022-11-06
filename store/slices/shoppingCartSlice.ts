import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  products: [] as Product[],
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    setShoppingCart(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
  },
});

export const shoppingCartActions = shoppingCartSlice.actions;
export default shoppingCartSlice;
