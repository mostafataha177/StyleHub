import React from "react";
import "./ButtonMore.css";
export default function ButtonMore() {
  return (
    <div>
      <main id="btnparent">
        <div className="static">
          <button>
            <span>Find More</span>
            <svg
              viewBox="0 0 22 22"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1={5} y1={12} x2={19} y2={12} />
              <line x1={15} y1={16} x2={19} y2={12} />
              <line x1={15} y1={8} x2={19} y2={12} />
            </svg>
            <svg
              className="spinner"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z" />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
}
