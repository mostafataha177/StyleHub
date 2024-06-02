import { Link } from "react-router-dom";
import "./Navbar.css";
import { Badge, IconButton, MenuItem } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import { useSelector } from "react-redux";

export default function NewNav() {
  const favoritesList = useSelector((state) => state.favorites.favoriteList);
  const cartList = useSelector((state) => state.cart.cartList);
  return (
    <div>
      <nav className="navbar navbar-expand-lg  fixedmodified main">
        <div className="container-fluid">
          <a className="navbar-brand me-auto" href="#!">
            <img src="new.png" style={{ width: "150px" }} alt="Logo" />
          </a>
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <img
                  src="new.png"
                  style={{ width: "140px", height: "50px" }}
                  alt="Logo"
                />
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link active " aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="navStyles.nav-item">
                  <Link className="nav-link mx-lg-2" to="/products">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-lg-2" to="/offers">
                    Offers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-lg-2" to="/footer">
                    Contacts
                  </Link>
                </li>
              </ul>
              {/* <form className="d-flex" role="search">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    onChange={(event) => {
                                        setSearch(event.target.value);
                                    }}
                                />
                            </form> */}
            </div>
          </div>
          <MenuItem>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={cartList.length} color="error">
                <ShoppingCartIcon style={{ fontSize: "30px" }} />
              </Badge>
            </IconButton>
          </MenuItem>
          <MenuItem>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={favoritesList.length} color="error">
                <FavoriteIcon style={{ fontSize: "30px", fill: "black" }} />
              </Badge>
            </IconButton>
          </MenuItem>
          <a className="loginButton" href="/signup">
            SignUp
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
      </nav>
    </div>
  );
}
