import React from "react";

function Cell(props) {
  return (
    <div
      className={props.cellClass}
      coordinate={props.coordinate}
      onClick={() => props.seed(props.row, props.col)}
    />
  );
}

export { Cell };
