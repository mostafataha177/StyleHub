import { createSlice } from "@reduxjs/toolkit";

const FavSlice = createSlice({
  name: "favoritesList",
  initialState: { favoriteList: [], arr: [] },
  reducers: {
    addToFavoriteList: (state, action) => {
      console.log(state.arr);
      state.favoriteList.push(action.payload);
      console.log(action.payload);
      state.arr.push(action.payload);
    },
    removeFromFavoriteList: (state, action) => {
      let index = state.favoriteList.findIndex(
        (product) => product.id === action.payload
      );
      state.favoriteList.splice(index, 1);
    },
    emptyFavoriteList: (state, action) => {
      state.favoriteList = [];
    },
  },
});
export default FavSlice.reducer;

export const { addToFavoriteList, removeFromFavoriteList, emptyFavoriteList } =
  FavSlice.actions;
