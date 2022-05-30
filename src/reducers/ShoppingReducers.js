import { TYPES } from "../actions/Shoppingactions";

export const shoppingInitialState = {
  cart: [],
  total: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_CART: {
      let itemincart = state.cart.find(item => item.id === action.payload.id)
      return itemincart ? { ...state, cart: state.cart.map(item => item.id === action.payload.id ? {...item, quantity: item.quantity + 1}: item)} : { ...state, cart: [...state.cart, {...action.payload, quantity: 1 }]}
    }
    case TYPES.REMOVE_ITEM: {
      let removeitem = state.cart.find((item) => item.id === action.payload.id);
      return removeitem.quantity > 1 ? { ...state, cart: state.cart.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item) } : {...state, cart: state.cart.filter((item) => item.id !== action.payload.id)}
     }
    case TYPES.REMOVE_ALL_ITEM: { return shoppingInitialState}
    default: return state;
  }
}