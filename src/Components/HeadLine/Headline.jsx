import React from "react";
import "./Headline.css";

export default function Headline({ title }) {
  return (
    <div className=" container">
      <p class="large rise">{title}</p>
    </div>
  );
}
