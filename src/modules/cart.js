import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import { createRequestActionTypes } from '../lib/createRequestSaga';
import createSessionSaga from '../lib/createSessionSaga';

const [GET_CART, GET_CART_SUCCESS, GET_CART_FAILURE] =
    createRequestActionTypes('cart/GET_CART');
// const UNLOAD_CART = 'cart/UNLOAD_CART'; // 포스트 페이지에서 벗어날 때 데이터 비우기

export const getCart = createAction(GET_CART);
// export const unloadCart = createAction(UNLOAD_CART);

const getCartSaga = createSessionSaga(GET_CART);

export function* cartSaga() {
    yield takeLatest(GET_CART, getCartSaga);
}

const initialState = {
    cart: null,
    cartError: null,
};

const cart = handleActions(
    {
        [GET_CART_SUCCESS]: (state, { payload: cart }) => ({
            ...state,
            cart,
        }),
        [GET_CART_FAILURE]: (state, { payload: cartError }) => ({
            ...state,
            cartError,
        }),
        // [UNLOAD_POST]: () => initialState,
    },
    initialState,
);

export default cart;
