import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import productsReducer from "./reducers/products";
import rootSaga from "./sagas";

const saga = createSagaMiddleware();
const logger = createLogger();

const store = createStore(
  productsReducer,
  undefined,
  applyMiddleware(saga, logger)
);

saga.run(rootSaga);

export default store;
