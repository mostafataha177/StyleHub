import React from "react";
import "./Button.css";
export default function CustomButton({ Label }) {
  console.log(Label);
  return (
    <div>
      <button className="glowing-btn">
        <span className="glowing-txt">{Label}</span>
      </button>
    </div>
  );
}
