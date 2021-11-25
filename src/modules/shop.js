// import { createAction, handleActions } from 'redux-actions';
// import { takeLatest } from 'redux-saga/effects';
// import { createRequestActionTypes } from '../lib/createRequestSaga';
// import createShopSaga from '../lib/createShopSaga';

// const [INSERT, INSERT_SUCCESS, INSERT_FAILURE] =
//     createRequestActionTypes('shop/INSERT');
// const [CHANGE_INPUT, CHANGE_INPUT_SUCCESS, CHANGE_INPUT_FAILURE] =
//     createRequestActionTypes('shop/CHANGE_INPUT');
// const [REMOVE, REMOVE_SUCCESS, REMOVE_FAILURE] =
//     createRequestActionTypes('shop/REMOVE');
// const INCREASE = 'shop/INCREASE';
// const DECREASE = 'shop/DECREASE';
// const UNLOAD_CART_PRODUCT = 'shop/UNLOAD_CART_PRODUCT';

// export const increase = createAction(INCREASE);
// export const decrease = createAction(DECREASE);
// export const changeInput = createAction(CHANGE_INPUT, (input) => input);
// export const insert = createAction(INSERT, ({ id, name, number, price }) => ({
//     id,
//     name,
//     number,
//     price,
// }));
// const insertSaga = createShopSaga(INSERT);
