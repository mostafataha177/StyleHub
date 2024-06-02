import React, { useState } from "react";
import "./Card.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavoriteList,
  removeFromFavoriteList,
} from "../../Redux/Store/Favorites";
import { addToCartList, removeFromCartList } from "../../Redux/Store/Cart";
export default function Card({ product }) {
  const [isFav, setIsFav] = useState(false);
  const [inCart, setInCart] = useState(false);
  const favoritesList = useSelector((state) => state.favorites.favoriteList);
  const cartList = useSelector((state) => state.cart.cartList);
  console.log(cartList);
  const dispatch = useDispatch();
  const handleToggleHeart = (product) => {
    setIsFav(!isFav);
    if (!isFav) dispatch(addToFavoriteList(product));
    else if (isFav) dispatch(removeFromFavoriteList(product.id));
  };
  const handleToggleCart = () => {
    setInCart(!inCart);
    if (!inCart) dispatch(addToCartList(product));
    else if (inCart) dispatch(removeFromCartList(product.id));
  };
  console.log(cartList.length);

  return (
    <div className="card">
      <div className="poster">
        {/* You need to use curly braces to interpolate the value of product.images[0] */}
        <img src={product.images[0]} alt="" />
      </div>
      <div className="details">
        <h4>{product.title.split(" ").slice(0, 5).join(" ")}</h4>
        <h5>Product Details</h5>
        {/* Adjust the syntax to properly use string interpolation */}
        <p>{product.description.split(" ").slice(0, 10).join(" ")}</p>
        <h5>Price: {product.price}</h5>
        {/* Adjust the style attribute syntax */}
        <div
          style={{
            marginTop: "25px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Use proper component names (camelCase) */}
          {!inCart ? (
            <ShoppingCartIcon
              className="cart"
              style={{ fontSize: "40px", fill: "white" }}
              onClick={handleToggleCart}
            />
          ) : (
            <RemoveShoppingCartIcon
              className="cart"
              style={{ fontSize: "40px", fill: "black" }}
              onClick={handleToggleCart}
            ></RemoveShoppingCartIcon>
          )}
          {!isFav ? (
            <FavoriteBorderIcon
              className="heart"
              style={{ fontSize: "40px", fill: "white" }}
              onClick={() => handleToggleHeart(product)}
            />
          ) : (
            <FavoriteIcon
              className="heart"
              style={{ fontSize: "40px", fill: "red" }}
              onClick={handleToggleHeart}
            ></FavoriteIcon>
          )}
        </div>
      </div>
    </div>
  );
}
