import React from "react";

function Play(props) {
  return (
    <div className="play-btn">
      <button type="button" onClick={() => props.generations()}>
        Play
      </button>
    </div>
  );
}

export { Play };
