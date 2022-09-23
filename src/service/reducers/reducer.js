import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants";

const initialState = {
  cardData: []
};

export default function cardItems(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("reducer",action)
      return [...state, { cardData: action.data }];
    case REMOVE_FROM_CART:
      state.pop();
      // console.warn("reducer",action)
      return [...state];
    default:
      return state;
  }
}
