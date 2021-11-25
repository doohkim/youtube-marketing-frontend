// import { createAction, handleActions } from 'redux-actions';
// import { takeLatest } from 'redux-saga/effects';
// import { createRequestActionTypes } from '../lib/createRequestSaga';
// import createSessionSaga from '../lib/createSessionSaga';
// import produce from 'immer';

// const [GET_CART, GET_CART_SUCCESS, GET_CART_FAILURE] =
//     createRequestActionTypes('cart/GET_CART');
// const REMOVE = 'cart/REMOVE';
// const TOGGLE = 'cart/TOGGLE';
// const INCREASE = 'cart/INCREASE';
// const DECREASE = 'cart/DECREASE';
// // const UNLOAD_CART = 'cart/UNLOAD_CART'; // 포스트 페이지에서 벗어날 때 데이터 비우기

// export const toggle = createAction(TOGGLE, (id) => id);
// export const remove = createAction(REMOVE, (id) => id);
// // export const increase = createAction(INCREASE);
// // export const decrease = createAction(DECREASE);
// export const increase = createAction(INCREASE, (id) => id);
// export const decrease = createAction(DECREASE, (id) => id);
// export const getCart = createAction(GET_CART);
// // export const unloadCart = createAction(UNLOAD_CART);

// const getCartSaga = createSessionSaga(GET_CART);

// export function* cartSaga() {
//     yield takeLatest(GET_CART, getCartSaga);
// }

// const initialState = {
//     cart: null,
//     cartError: null,
// };

// // const cart = handleActions(
// //     {
// //         [GET_CART_SUCCESS]: (state, { payload: cart }) => ({
// //             ...state,
// //             cart,
// //         }),
// //         [GET_CART_FAILURE]: (state, { payload: cartError }) => ({
// //             ...state,
// //             cartError,
// //         }),
// //         [TOGGLE]: (state, { payload: id }) => ({
// //             ...state,
// //             cartTest: state.cartTest.map((cartItem) =>
// //                 cartItem.id === id
// //                     ? { ...cartItem, checked: !cartItem.checked }
// //                     : cartItem,
// //             ),
// //         }),
// //         [REMOVE]: (state, { payload: id }) => ({
// //             ...state,
// //             cartTest: state.cartTest.filter((cartItem) => cartItem.id !== id),
// //         }),
// //         [INCREASE]: (state, { payload: id }) => ({
// //             ...state,
// //             cartTest: state.cartTest.map((cartItem) =>
// //                 cartItem.id === id
// //                     ? { ...cartItem, number: cartItem.number + 1 }
// //                     : cartItem,
// //             ),
// //         }),
// //         [DECREASE]: (state, { payload: id }) => ({
// //             ...state,
// //             cartTest: state.cartTest.map((cartItem) =>
// //                 cartItem.id === id
// //                     ? { ...cartItem, number: cartItem.number - 1 }
// //                     : cartItem,
// //             ),
// //         }),

// //         // [TOGGLE]: (state, { payload: id }) =>
// //         //     produce(state, (draft) => {
// //         //         const product = draft.cart.find((product) => {
// //         //             product.id === id;
// //         //         });
// //         //         product.checked = !product.checked;
// //         //     }),
// //         // [REMOVE]: (state, { payload: id }) =>
// //         //     produce(state, (draft) => {
// //         //         const index = draft.cart.findIndex((product) => {
// //         //             product.id === id;
// //         //         });
// //         //         draft.cart.splice(index, 1);
// //         //     }),
// //         // [INCREASE]: (state, { payload: id }) =>
// //         //     produce(state, (draft) => {
// //         //         console.log('increase');
// //         //         const product = draft.cart.find((product) => product.id === id);
// //         //         product.number = product.number + 1;
// //         //     }),
// //         // [DECREASE]: (state, { payload: id }) =>
// //         //     produce(state, (draft) => {
// //         //         const product = draft.cart.find((product) => product.id === id);
// //         //         if (product.number === 1) {
// //         //             product.number = 1;
// //         //         } else {
// //         //             product.number = product.number - 1;
// //         //         }
// //         //     }),
// //         // [UNLOAD_POST]: () => initialState,
// //     },
// //     initialState,
// // );
// const cart = handleActions(
//     {
//         [GET_CART_SUCCESS]: (state, { payload: cart }) => ({
//             ...state,
//             cart,
//         }),
//         [GET_CART_FAILURE]: (state, { payload: cartError }) => ({
//             ...state,
//             cartError,
//         }),
//         [TOGGLE]: (state, { payload: id }) => ({
//             ...state,
//             cart: state.cart.map((cartItem) =>
//                 cartItem.id === id
//                     ? { ...cartItem, checked: !cartItem.checked }
//                     : cartItem,
//             ),
//         }),
//         [REMOVE]: (state, { payload: id }) => ({
//             ...state,
//             cart: state.cart.filter((cartItem) => cartItem.id !== id),
//         }),
//         [INCREASE]: (state, { payload: id }) => ({
//             ...state,
//             cart: state.cart.map((cartItem) =>
//                 cartItem.id === id
//                     ? { ...cartItem, number: cartItem.number + 1 }
//                     : cartItem,
//             ),
//         }),
//         [DECREASE]: (state, { payload: id }) => ({
//             ...state,
//             cart: state.cart.map((cartItem) =>
//                 cartItem.id === id
//                     ? { ...cartItem, number: cartItem.number - 1 }
//                     : cartItem,
//             ),
//         }),
//     },
//     initialState,
// );
// export default cart;
