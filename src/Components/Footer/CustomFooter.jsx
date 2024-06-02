import { Button, TextField } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./CustomFooter.css";
export default function CustomFooter() {
  return (
    <div className="footerParent container mb-3">
      <hr></hr>
      <div className="row mx-3 ">
        <div className="col-3 mt-3 mb-3">
          <h3 style={{ color: "#1F2A86" }}>Company</h3>
          <li>Who Are we</li>
          <li>Find A bless new year</li>
          <li>Shop</li>
          <li>Priacy & Polivy</li>
          <li>Terms & Conditions</li>
          <li>Accessibilty</li>
          <li>Statement</li>
        </div>
        <div className="col-3 mt-3 mb-3">
          <h3 style={{ color: "#1F2A86" }}>For You</h3>
          <li>Gift Cards</li>
          <li>Contact Us</li>
          <li>Shipping</li>
          <li>Returns</li>
          <li>Payment & Gift</li>
          <li>Cards</li>
        </div>
        <div className="col-3 mt-3 mb-3">
          <h3 style={{ color: "#1F2A86" }}>Quick Shop</h3>
          <li>Clothes</li>
          <li>Accessories</li>
          <li>Elctronics</li>
          <li>Furniture</li>
        </div>
        <div className=" col-3 mt-3 mb-3">
          <h3 style={{ color: "#1F2A86" }}>Stay In Touch</h3>
          <li>Sign Up for newsletter to get 20% off on your order </li>
          <TextField
            id="standard-basic"
            label="Standard"
            variant="standard"
            className="d-block mb-2"
          />
          <Button variant="contained" href="#contained-buttons">
            Sign Up
          </Button>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h2 style={{ color: "#1F2A86" }}>Follow Us</h2>
          <div>
            <FacebookIcon
              style={{ fontSize: "45px", fill: "#1F2A86" }}
              className="mx-2"
            ></FacebookIcon>
            <InstagramIcon
              style={{ fontSize: "45px", fill: "#1F2A86" }}
              className="mx-2"
            ></InstagramIcon>
            <XIcon
              style={{ fontSize: "45px", fill: "#1F2A86" }}
              className="mx-2"
            ></XIcon>
            <LinkedInIcon
              style={{ fontSize: "45px", fill: "#1F2A86" }}
              className="mx-2"
            ></LinkedInIcon>
          </div>
        </div>
      </div>
    </div>
  );
}
