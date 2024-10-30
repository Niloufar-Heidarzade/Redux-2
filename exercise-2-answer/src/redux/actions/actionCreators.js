import {ADD} from "./actionTypes";

export function add(data) {
  return {
    type: ADD,
    payload: data
  }
}