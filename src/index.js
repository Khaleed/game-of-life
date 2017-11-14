import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Cell(props) {
    let className = "cell";
    if (props.isAlive) {
        className = className.concat(" alive")
    }
    return (
        <div className={ className } onClick= { props.onClick }>
        </div>
    )
};


ReactDOM.render(
<Cell isAlive="true" />,
document.getElementById("root")
);
