import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import createSessionSaga from '../lib/createSessionSaga';

const [GET_CART_TEST, GET_CART_TEST_SUCCESS, GET_CART_TEST_FAILURE] =
    createRequestActionTypes('cartTest/GET_CART');
const TOGGLE = 'cartTest/TOGGLE';
const REMOVE = 'cartTest/REMOVE';
const INCREASE = 'cartTest/INCREASE';
const DECREASE = 'cartTest/DECREASE';

export const getCartTest = createAction(GET_CART_TEST);
export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);
export const increase = createAction(INCREASE, (id) => id);
export const decrease = createAction(DECREASE, (id) => id);

const getCartListTestSaga = createSessionSaga(GET_CART_TEST);

export function* getCartTestSaga() {
    yield takeLatest(GET_CART_TEST, getCartListTestSaga);
}

const initialState = {
    cartTest: null,
    cartError: null,
};

const cartTest = handleActions(
    {
        [GET_CART_TEST_SUCCESS]: (state, { payload: cartTest }) => ({
            ...state,
            cartTest,
        }),
        [GET_CART_TEST_FAILURE]: (state, { payload: cartError }) => ({
            ...state,
            cartError,
        }),
        [TOGGLE]: (state, { payload: id }) => ({
            ...state,
            cartTest: state.cartTest.map((cartItem) =>
                cartItem.id === id
                    ? { ...cartItem, checked: !cartItem.checked }
                    : cartItem,
            ),
        }),
        [REMOVE]: (state, { payload: id }) => ({
            ...state,
            cartTest: state.cartTest.filter((cartItem) => cartItem.id !== id),
        }),
        [INCREASE]: (state, { payload: id }) => ({
            ...state,
            cartTest: state.cartTest.map((cartItem) =>
                cartItem.id === id
                    ? { ...cartItem, number: cartItem.number + 1 }
                    : cartItem,
            ),
        }),
        [DECREASE]: (state, { payload: id }) => ({
            ...state,
            cartTest: state.cartTest.map((cartItem) => {
                if (cartItem.id === id) {
                    if (cartItem.number === 1) {
                        return { ...cartItem, number: 1 };
                    } else {
                        return { ...cartItem, number: cartItem.number - 1 };
                    }
                } else {
                    return cartItem;
                }
            }),
        }),
    },
    initialState,
);
export default cartTest;
