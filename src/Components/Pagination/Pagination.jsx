import React, { useState } from "react";
import "./pagination.css";

export default function Pagination({
  productsPerPage,
  totalProducts,
  paginate,
}) {
  const pagenumbers = [];
  const [activePage, setActivePage] = useState(1);

  const handlePageClick = (number) => {
    setActivePage(number);
    paginate(number);
  };

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pagenumbers.push(i);
  }

  return (
    <div>
      <div>
        <ul>
          {pagenumbers.map((number) => (
            <li key={number}>
              {/* Apply a custom style to the active number */}
              <span
                className={number === activePage ? "active" : ""}
                onClick={() => handlePageClick(number)}
              >
                {number}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
