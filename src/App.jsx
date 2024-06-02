import "./App.css";
import { Provider } from "react-redux";
import Home from "./Pages/Home/Home";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Profile from "./Pages/Profile/Profile";
import Favorites from "./Pages/Favorites/Favorites";
import Cart from "./Pages/Cart/Cart";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Store from "./Redux/Store/Store";
import Products from "./Pages/Products/Products";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import CustomFooter from "./Components/Footer/CustomFooter";
import NewNav from "./Components/Navbar/NewNavbar";

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <NewNav></NewNav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/products/:id"
            element={<ProductDetails></ProductDetails>}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <CustomFooter></CustomFooter>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
