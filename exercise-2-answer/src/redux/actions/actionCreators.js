import {ADD , OPENMENU} from "./actionTypes";

export function add(data) {
  return {
    type: ADD,
    payload: data
  }
}
export function openMenu(data) {
  return {
    type: OPENMENU,
    payload: data
  }
}