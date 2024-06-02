import React, { useEffect, useState } from "react";
import productStyle from "./Products.module.css";
import { useDispatch, useSelector } from "react-redux";
import { productsAction } from "../../Redux/Store/getAllProducts";
import Search from "../../Components/Search/Search";
import Card from "../../Components/Card/Card";
import CustomPagination from "../../Components/Pagination/Pagination";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Headline from "../../Components/HeadLine/Headline";
export default function Products() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsAction());
  }, [dispatch]);
  const [querry, setQuerry] = useState("");
  const allProducts = useSelector((state) => state.product.products);
  const Clothes = allProducts.filter((product) => {
    return product.category.name === "Clothes";
  });
  const Electronics = allProducts.filter((product) => {
    return product.category.name === "Electronics";
  });
  const Furniture = allProducts.filter((product) => {
    return product.category.name === "Furniture";
  });
  const Shoes = allProducts.filter((product) => {
    return product.category.name === "Shoes";
  });
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // const previewedProducts = allProducts.slice(
  //   indexOfFirstProduct,
  //   indexOfLastProduct
  // );
  const [value, setValue] = React.useState("All-Products");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  console.log(value);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    const searching = (word) => {
      let filter = allProducts.filter((product) => {
        return product?.title.toLowerCase().startsWith(word.toLowerCase());
      });
      setFilteredProducts(filter);
    };
    searching(querry); // Assuming 'query' is the input data for searching
  }, [querry, allProducts]); // Trigger the effect when 'query' or 'allProducts' change

  return (
    <div>
      <div className="d-flex text-center flex-column align-items-center justify-content-center">
        <Headline className="" title={"Discover All Products"}></Headline>
        <Search searching={setQuerry} className="mb-5"></Search>
      </div>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className={`col-2 ${productStyle.filteContainer}`}>
            <h1 className="text-center">Filter</h1>
            <FormControl className="ms-5">
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="All-Products"
                  control={<Radio />}
                  label="All Products"
                />
                <FormControlLabel
                  value="Clothes"
                  control={<Radio />}
                  label="Clothes"
                />
                <FormControlLabel
                  value="Furniture"
                  control={<Radio />}
                  label="Furniture"
                />
                <FormControlLabel
                  value="Electronics"
                  control={<Radio />}
                  label="Electronics"
                />
                <FormControlLabel
                  value="Shoes"
                  control={<Radio />}
                  label="Shoes"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="col-10">
            <div className="row">
              {filteredProducts
                .slice(indexOfFirstProduct, indexOfLastProduct)
                .map((product) => (
                  <div className="col-3 my-2" key="product.id">
                    <Card product={product}></Card>
                  </div>
                ))}
              <div className="mt-3">
                <CustomPagination
                  productsPerPage={productsPerPage}
                  totalProducts={allProducts.length}
                  paginate={paginate}
                ></CustomPagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
