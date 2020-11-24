import { call, put } from "redux-saga/effects";
import {
  createProductsAddAction,
  createProductsFetchErrorAction,
  createSingleProductAddAction,
} from "../actions/products";
import { fetchProducts, fetchSingleProduct } from "../endpoints/products";

export function* handleFetchProducts() {
  try {
    const products = yield call(fetchProducts);

    yield put(createProductsAddAction(products));
  } catch (error) {
    yield put(createProductsFetchErrorAction(error));
  }
}

export function* handleFetchSingleProduct(action) {
  try {
    const product = yield call(fetchSingleProduct, action.payload.id);

    yield put(createSingleProductAddAction(product));
  } catch (error) {
    yield put(createProductsFetchErrorAction(error));
  }
}
