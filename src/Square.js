import React from "react";

const style = {
  background: "#EAF6F6",
  border: "2px solid #66BFBF",
  color: "#F76B8A",
  fontSize: "50px",
  fontWeight: "700",
  cursor: "pointer",
  outline: "none",
};

const Square = ({ value, onClick }) => (
<button style={style} onClick={onClick}>
    {value}
    </button>
);

export default Square;