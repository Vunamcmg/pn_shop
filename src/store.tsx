import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import AppReducer from "./reducer";

const logger = createLogger();

const error = (store: any) => (next: any) => (action: any) => {
  try {
    next(action);
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

const createAppStore = applyMiddleware(logger, error, thunk)(createStore);

export function configureStore(initialState: any) {
  return createAppStore(AppReducer, initialState);
}
