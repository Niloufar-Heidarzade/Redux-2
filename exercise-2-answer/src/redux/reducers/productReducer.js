import { ADD } from "../actions/actionTypes";

const initialState = {
  count: 0,
  price: 0
};
export function productReducer(oldState=initialState , action) {
  switch (action.type){
    case ADD:
      return {
        ...oldState,
        count: oldState.count+1,
        price: oldState.price + action.payload.price
      };
    default:
      return oldState;
  }
}