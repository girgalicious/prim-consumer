import { combineReducers } from 'redux';

const INITIAL_STATE = {
  currentUser: null,
  cart: [],
  cartTotal: 0,
  displayCartButton: false
};

const globalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_VIEW_CART_BUTTON':
      return {
        ...state,
        displayCartButton: action.payload
      }
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: [
            ...state.cart.slice(0, action.payload),
            ...state.cart.slice(action.payload + 1)
        ],
      }
      case 'INCREMENT_CART_TOTAL':
        return {
          ...state,
          cartTotal: state.cartTotal + action.payload
        }
        case 'DECREMENT_CART_TOTAL':
          return {
            ...state,
            cartTotal: state.cartTotal - action.payload
          }
    default:
      return state
  }
};

export default combineReducers({
  global: globalReducer,
});
