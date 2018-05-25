const initialState: any = {
  items: []
};
const cart = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_CART":
      state.items.push(action.payload);
    case "DELETE_CART_ITEMS":
      break;
    case "CHECKOUT_CART":
      break;
  }
  return state;
};

export default cart;
