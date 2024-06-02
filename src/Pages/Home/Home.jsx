import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsAction } from "../../Redux/Store/getAllProducts";
import Card from "../../Components/Card/Card";
import "./Home.css";
import CustomButton from "../../Components/Button/Button";
import Headline from "../../Components/HeadLine/Headline";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.product.products);
  const Clothes = allProducts.filter(
    (product) => product.category.name === "Clothes"
  );
  const productsRoute = () => {
    navigate("/products");
  };
  const Elctronics = allProducts.filter(
    (product) => product.category.name === "Electronics"
  );
  const Furniture = allProducts.filter(
    (product) => product.category.name === "Furniture"
  );

  let label1 = "Discover More";
  let label2 = "Sign Up";
  let label3 = "Explore More";
  const viewedElctronics = Elctronics.slice(0, 4);
  const viewedClothes = Clothes.slice(0, 4);
  const viewedFurniture = Furniture.slice(0, 4);
  useEffect(() => {
    dispatch(productsAction());
  }, [dispatch]);
  const title1 = "Shop Our Collections";
  return (
    <>
      <div className="mb-3">
        <div>
          <img
            className="w-100"
            style={{ height: "100vh" }}
            src="img11.jpg"
            alt="website "
          ></img>
          <div className="overlay row">
            <div className="col-8">
              <h1>
                <span>Shop</span> the Latest Trends in<span>Fashion</span> ,
                <span>Electronics</span>, and<span>More</span>
              </h1>
              {/* <h3 className=" mt-5 subtitle">
                For Every Occasion: Find the Perfect Gift Here
              </h3> */}
              <div className="d-flex">
                <div className="imgContainer">
                  <img src="img20.jpg" alt="sub1"></img>
                </div>
                <div className="imgContainer">
                  <img src="img22.jpg" alt="sub1"></img>
                </div>
                <div className="imgContainer">
                  <img src="img23.jpg" alt="sub1"></img>
                </div>
              </div>
              <div className="mt-3 d-flex gap-3 ">
                <CustomButton Label={label1}></CustomButton>
                <CustomButton Label={label2}></CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Headline className="mt-4" title={"Our Collections"}></Headline>
        <div className="container mt-3 mb-4">
          <div className="row">
            <div className="col parentCard d-flex justify-content-center flex-column align-items-center">
              <h1>Clothes</h1>
              <div className="parentPoster d-flex justify-content-center">
                <img src="clothes.jpg" alt="clothes"></img>
              </div>
              <div className="detail">
                <h3>Discover More</h3>
              </div>
            </div>
            <div className="col parentCard d-flex justify-content-center flex-column align-items-center">
              <h1>Electronics</h1>
              <div className="parentPoster d-flex justify-content-center">
                <img src="electronics.jpg" alt="Electronics"></img>
              </div>
              <div className="detail">
                <h3>Discover More</h3>
              </div>
            </div>
            <div className="col parentCard d-flex justify-content-center flex-column align-items-center">
              <h1>Shoes</h1>
              <div className="parentPoster d-flex justify-content-center">
                <img src="shoes.jpg" alt="Shoes"></img>
              </div>
              <div className="detail">
                <h3>Discover More</h3>
              </div>
            </div>
            <div className="col parentCard d-flex justify-content-center flex-column align-items-center">
              <h1>Furniture</h1>
              <div className="parentPoster d-flex justify-content-center">
                <img src="furniture.jpg" alt="Furniture"></img>
              </div>
              <div className="detail">
                <h3>Discover More</h3>
              </div>
            </div>

            {/* <div className="col">
              <h1 className="text-center">Miscellaneous</h1>
              <img
                className="category"
                src="misc2.jpeg"
                alt="Miscellaneous"
              ></img>
            </div> */}
          </div>
        </div>
      </div>
      <Headline className="mt-4" title={title1}></Headline>
      <div className="container">
        <div className="row">
          <h1 style={{ color: "#3672FA" }}>Clothes</h1>
          {viewedClothes.map((product) => {
            return (
              <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 my-2">
                <Card product={product}></Card>
              </div>
            );
          })}
          <div
            onClick={productsRoute}
            className="mt-3 mb-4 d-flex justify-content-center"
          >
            {/* <Pagination
          productsPerPage={productsPerPage}
          totalProducts={Clothes.length}
          paginate={paginate}
        ></Pagination> */}
            <CustomButton Label={label3}></CustomButton>
          </div>
        </div>
        <div className="row">
          <h1 style={{ color: "#3672FA" }}>Elctronics</h1>
          {viewedElctronics.map((product) => {
            console.log(product);
            return (
              <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 my-2">
                <Card product={product}></Card>
              </div>
            );
          })}
          <div
            onClick={productsRoute}
            className="mt-3 mb-4 d-flex justify-content-center"
          >
            {/* <Pagination
          productsPerPage={productsPerPage}
          totalProducts={Clothes.length}
          paginate={paginate}
        ></Pagination> */}
            <CustomButton onClick={productsRoute} Label={label3}></CustomButton>
          </div>
        </div>
        <div className="row">
          <h1 style={{ color: "#3672FA" }}>Furniture</h1>
          {viewedFurniture.map((product) => {
            console.log(product);
            return (
              <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 my-2">
                <Card product={product}></Card>
              </div>
            );
          })}
          <div
            onClick={productsRoute}
            className="mt-3 mb-4 d-flex justify-content-center"
          >
            {/* <Pagination
          productsPerPage={productsPerPage}
          totalProducts={Clothes.length}
          paginate={paginate}
        ></Pagination> */}
            <CustomButton onClick={productsRoute} Label={label3}></CustomButton>
          </div>
        </div>
      </div>

      <div className=" text-center justify-content-center align-items-center row">
        <div className="col-6">
          <Headline title={"QUALITY YOU CAN TRUST"}></Headline>
          <img style={{ width: "250px" }} src="quality.png" alt="quality"></img>
        </div>
        <div className="col-6">
          <Headline title={"Your Satisfaction our Priority"}></Headline>
          <img
            style={{ width: "250px" }}
            src="customer.png"
            alt="customer"
          ></img>
        </div>
      </div>
    </>
  );
}
