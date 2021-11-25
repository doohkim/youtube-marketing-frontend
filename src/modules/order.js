import { createAction, handleActions } from 'redux-actions';
import { createRequestActionTypes } from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import createSessionFilterSaga from '../lib/createSessionFilterSaga';

const [GET_CART_FILTER, GET_CART_FILTER_SUCCESS, GET_CART_FILTER_FAILURE] =
    createRequestActionTypes('order/GET_CART_FILTER');

export const getCartFilter = createAction(GET_CART_FILTER);

const getCartFilterSaga = createSessionFilterSaga(GET_CART_FILTER);

export function* CartFilterSaga() {
    yield takeLatest(GET_CART_FILTER, getCartFilterSaga);
}

const initialState = {
    order: null,
    orderError: null,
};

const order = handleActions(
    {
        [GET_CART_FILTER_SUCCESS]: (state, { payload: order }) => ({
            ...state,
            order,
        }),
        [GET_CART_FILTER_FAILURE]: (state, { payload: orderError }) => ({
            ...state,
            orderError,
        }),
    },
    initialState,
);
export default order;
