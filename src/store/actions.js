import { INCREMENT, DECREMENT, LOADING } from "./types";

export function increment() {
  return {
    type: INCREMENT,
  };
}

export function decrement() {
  return {
    type: DECREMENT,
  };
}          

export function loading(newLoad) {
  return {
    type: LOADING,
    payload: newLoad
  }
}
