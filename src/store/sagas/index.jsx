import { takeEvery, all } from "redux-saga/effects";
import { PRODUCTS_FETCH } from "../types/products";
import { handleFetchProducts } from "./products";

function* rootSaga() {
  yield all([takeEvery(PRODUCTS_FETCH, handleFetchProducts)]);
}

export default rootSaga;
