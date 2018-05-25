import { combineReducers } from "redux";
import * as guid from "guid";
import * as _ from "lodash";

let shopStore = (
  state = {
    products: [
      {
        id: guid.raw(),
        name: "IPhone X",
        describe: "Sản phẩm chính hãng đến từ Apple",
        price: 1000000,
        image:
          "https://cdn.tgdd.vn/Products/Images/42/114111/iphone-x-256gb-h2-400x460.png"
      }
    ]
  },
  action: any
) => {
  switch (action.type) {
    case "ADD":
      action.payload.id = guid.raw();
      state.products.push(action.payload);
      break;
    case "DELETE":
      const productIndex = _.findIndex(
        state.products,
        product => product.id == action.payload.id
      );
      state.products.splice(productIndex, 1);
      break;
    case "CHECKOUT":
      break;
  }
  return state;
};

let cart = (
  state = {
    items: []
  },
  action: any
) => {
  switch (action.type) {
    case "ADD_CART_ITEM":
      state.items.push(action.payload);
      break;
    case "DELETE_CART_ITEM":
      const productIndex = _.findIndex(
        state.products,
        product => product.id == action.payload.id
      );
      state.items.splice(productIndex, 1);
      break;
    case "CHECKOUT_CART":
      state = {};
      break;
  }
  return state;
};

const shop = combineReducers({
  shopStore,
  cart
});

export default shop;
