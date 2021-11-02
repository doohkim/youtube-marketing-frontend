import { put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';

export default function createSessionSaga(type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    return function* (action) {
        yield put(startLoading(type));

        try {
            const cartdata = sessionStorage.getItem('cart');
            yield put({
                type: SUCCESS,
                payload: cartdata,
            });
        } catch (e) {
            yield put({
                type: FAILURE,
                payload: e,
                error: true,
            });
        }
        yield put(finishLoading(type));
    };
}
