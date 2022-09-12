import React from "react";
import Board from "./components/Board";
import Title from "./components/Title";

const App = () => {
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }}>
      <Title />
      <Board/>
    </div>
  );
};

export default App;
