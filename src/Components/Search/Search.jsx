import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "./Search.css";
export default function Search({ searching }) {
  const [word, setWord] = useState("");
  const handleChange = (event) => {
    setWord(() => event.target.value);
  };
  console.log(word);
  searching(word);
  return (
    <div class="search-box">
      <input
        onChange={handleChange}
        type="text"
        class="search-txt"
        placeholder="Search"
      />
      <span class="Search-btn">
        <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
      </span>
    </div>
  );
}
