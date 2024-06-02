import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cartList",
  initialState: { cartList: [] },
  reducers: {
    addToCartList: (state, action) => {
      state.cartList.push(action.payload);
    },
    removeFromCartList: (state, action) => {
      let index = state.cartList.findIndex(
        (product) => product.id === action.payload
      );
      state.cartList.splice(index, 1);
    },
    emptyCartList: (state, action) => {
      state.favoriteList = [];
    },
  },
});
export default CartSlice.reducer;

export const { addToCartList, removeFromCartList, emptyCartList } =
  CartSlice.actions;
