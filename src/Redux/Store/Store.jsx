import { configureStore } from "@reduxjs/toolkit";
import allProducts from "./getAllProducts";
import favorites from "./Favorites";
import cart from "./Cart";

const Store = configureStore({
  reducer: {
    product: allProducts,
    favorites: favorites,
    cart: cart,
  },
});
export default Store;
