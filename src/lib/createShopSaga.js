import { put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';

export default function createShopSaga(type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    return function* (action) {
        yield put(startLoading(type));

        try {
            // 고쳐야함
            // 여기서 인서트 들어가야 하는거 아냐?
            // const cartdata = sessionStorage.getItem('cart');
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
