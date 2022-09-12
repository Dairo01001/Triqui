import react from "react";

const Cell = ({ letter, onClick }) => {
  return <div onClick={onClick} style={{border: "1px solid black"}}>{letter}</div>;
};

export default Cell;
