import { call, put } from "redux-saga/effects";
import { createProductsAddAction } from "../actions/products";
import { fetchProducts } from "../endpoints/products";

export function* handleFetchProducts() {
  try {
    const products = yield call(fetchProducts);

    yield put(createProductsAddAction(products));
  } catch (error) {
    console.log(error);
  }
}
