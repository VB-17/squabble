import React, { useContext } from "react";
import Letter from "./Letter";

function Board() {
  return (
    <div className="board board__self">
      {" "}
      {Array.from(Array(6).keys()).map((val) => (
        <div key={val} className="row">
          <Letter col={0} row={val} />
          <Letter col={1} row={val} />
          <Letter col={2} row={val} />
          <Letter col={3} row={val} />
          <Letter col={4} row={val} />
        </div>
      ))}
    </div>
  );
}

export default Board;
