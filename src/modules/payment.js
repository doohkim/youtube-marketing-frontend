import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as paymentAPI from '../lib/api/payment';

const [CREATE_PAYMENT, CREATE_PAYMENT_SUCCESS, CREATE_PAYMENT_FAILURE] =
    createRequestActionTypes('payment/CREATE_PAYMENT');
const [GET_PAYMENT, GET_PAYMENT_SUCCESS, GET_PAYMENT_FAILURE] =
    createRequestActionTypes('payment/GET_PAYMENT');
const [CANCEL_PAYMENT, CANCEL_PAYMENT_SUCCESS, CANCEL_PAYMENT_FAILURE] =
    createRequestActionTypes('payment/CANCEL_PAYMENT');
const CHANGE_FIELD = 'payment/CHANGE_FIELD';
const UNLOAD_PAYMENT = 'payment/UNLOAD_PAYMENT';

// createAction 액션 생성
export const createPayment = createAction(
    CREATE_PAYMENT,
    ({ order_items, jumin, cardPwd, cardAvailMonthYear, cardNumber }) => ({
        jumin,
        cardPwd,
        cardAvailMonthYear,
        cardNumber,
        order_items,
    }),
);
export const getPayment = createAction(GET_PAYMENT, (id) => id);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
    key,
    value,
}));
export const cancelPayment = createAction(CANCEL_PAYMENT, (id) => id);
export const unloadPayment = createAction(UNLOAD_PAYMENT);

// saga 생성
const getPaymentSaga = createRequestSaga(GET_PAYMENT, paymentAPI.getPayment);
const createPaymentSaga = createRequestSaga(
    CREATE_PAYMENT,
    paymentAPI.createPayment,
);
const cancelPaymentSaga = createRequestSaga(
    CANCEL_PAYMENT,
    paymentAPI.cancelPayment,
);

export function* paymentSaga() {
    yield takeLatest(GET_PAYMENT, getPaymentSaga);
    yield takeLatest(CREATE_PAYMENT, createPaymentSaga);
    yield takeLatest(CANCEL_PAYMENT, cancelPaymentSaga);
}

// 초기 값
const initialState = {
    order_number: '',
    cardNumber1: '',
    cardNumber2: '',
    cardNumber3: '',
    cardNumber4: '',
    cardPwd: '',
    cardAvailMonth: '',
    cardAvailYear: '',
    jumin: '',
    order_items: null,
    payment: null,
    paymentError: null,
};

// handle action 구현

const payment = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
            ...state,
            [key]: value,
        }),
        [GET_PAYMENT_SUCCESS]: (state, { payload: payment }) => ({
            ...state,
            payment,
        }),
        [GET_PAYMENT_FAILURE]: (state, { payload: paymentError }) => ({
            ...state,
            paymentError,
        }),
        [CREATE_PAYMENT_SUCCESS]: (state, { payload: payment }) => ({
            ...state,
            payment,
        }),
        [CREATE_PAYMENT_FAILURE]: (state, { payload: paymentError }) => ({
            ...state,
            paymentError,
        }),
        [CANCEL_PAYMENT_SUCCESS]: (state, { payload: payment }) => ({
            ...state,
            payment,
        }),
        [CANCEL_PAYMENT_FAILURE]: (state, { payload: paymentError }) => ({
            ...state,
            paymentError,
        }),
        [UNLOAD_PAYMENT]: () => initialState,
    },
    initialState,
);
export default payment;
