import { ADD , OPENMENU } from "../actions/actionTypes";

const initialState = {
  count: 0,
  price: 0,
  openMenu: false
};
export function productReducer(oldState=initialState , action) {
  switch (action.type){
    case ADD:
      return {
        ...oldState,
        count: oldState.count+1,
        price: oldState.price + action.payload.price
      };
    case OPENMENU:
      return {
        ...oldState,
        openMenu: action.payload
      }
    default:
      return oldState;
  }
}