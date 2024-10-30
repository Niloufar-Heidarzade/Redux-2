import { INCREMENT , DECREMENT , RESET } from "./actionTypes";

export const add = () => {
  return {
    type: INCREMENT
  }
}

export const minus = () => {
  return {
    type: DECREMENT
  }
}

export const reset = () => {
  return {
    type: RESET
  }
}