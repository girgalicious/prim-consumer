export function updateShowCartButton(payload) {
    return {
          type: "UPDATE_VIEW_CART_BUTTON",
		      payload: payload
    };
}


export function addToCart(payload) {
    return {
          type: "ADD_TO_CART",
		      payload: payload
    };
}


export function removeFromCart(payload) {
    return {
          type: "REMOVE_FROM_CART",
		      payload: payload
    };
}

export function incrementCartTotal(payload) {
    return {
          type: "INCREMENT_CART_TOTAL",
		      payload: payload
    };
}


export function decrementCartTotal(payload) {
    return {
          type: "DECREMENT_CART_TOTAL",
		      payload: payload
    };
}
