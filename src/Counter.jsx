import React from "react";
import store from "./store/store";
import { increment, decrement } from "./store/actions";

function Counter() {
  return (
    <div className="main">
      <h1>GitHub users (With Redux technologie)</h1>
      <button type="button" onClick={() => store.dispatch(increment())}>
        Plus
      </button>
      <button type="button" onClick={() => store.dispatch(decrement())}>
        Minus
      </button>
      <br />
      <span>{store.getState().counter}</span>
    </div>
  );
}

export default Counter;
