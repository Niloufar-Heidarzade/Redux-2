import { INCREMENT , DECREMENT , RESET  } from "../actions/actionTypes";
import { add , minus , reset } from "../actions/actionCreators";

const initialState = {
  count: 0
};

function countReducer(oldState = initialState , action) {
  switch (action.type) {
    case INCREMENT:
      return {
        count: oldState.count+1
      };
    case DECREMENT:
      return {
        count: oldState.count-1
      };
    case RESET:
      return {
        count: 0
      };
    default:
      return oldState;
  }
}

export default countReducer;