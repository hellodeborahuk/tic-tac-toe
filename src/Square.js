import React from "react";

const Square = ({ winning, value, onClick }) => {
  let style = {
    background: "#EAF6F6",
    border: "2px solid #66BFBF",
    color: "#F76B8A",
    fontSize: "50px",
    fontWeight: "700",
    cursor: "pointer",
    outline: "none",
  };

  if (winning) {
    style.background = "#FCD2DB";
  }
  return (
    <button style={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
