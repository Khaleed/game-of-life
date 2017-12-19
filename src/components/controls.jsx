import React from "react";

function Play(props) {
  return (
    <div className="btn">
      <button type="button" onClick={() => props.generations()}>
        Play
      </button>
    </div>
  );
}

function Stop(props) {
  return (
    <div className="btn">
      <button type="button" onClick={() => props.stop()}>
        Stop
      </button>
    </div>
  );
}

function Clear(props) {
  return (
    <div className="btn">
      <button type="button" onClick={() => props.clear()}>
        Clear
      </button>
    </div>
  );
}

function Randomise(props) {
  return (
    <div className="btn">
      <button type="button" onClick={() => props.random()}>
        Randomise
      </button>
    </div>
  );
}
export { Play, Stop, Clear, Randomise };
