import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import productsReducer from "./reducers/products";
import orderReducer from "./reducers/order";
import rootSaga from "./sagas";

const saga = createSagaMiddleware();
const logger = createLogger();

const store = createStore(
  combineReducers({
    productsState: productsReducer,
    orderState: orderReducer,
  }),
  undefined,
  applyMiddleware(saga, logger)
);

saga.run(rootSaga);

export default store;
