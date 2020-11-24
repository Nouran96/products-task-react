import { takeEvery, all } from "redux-saga/effects";
import { PRODUCTS_FETCH, SINGLE_PRODUCT_FETCH } from "../types/products";
import { handleFetchProducts, handleFetchSingleProduct } from "./products";

function* rootSaga() {
  yield all([
    takeEvery(PRODUCTS_FETCH, handleFetchProducts),
    takeEvery(SINGLE_PRODUCT_FETCH, handleFetchSingleProduct),
  ]);
}

export default rootSaga;
