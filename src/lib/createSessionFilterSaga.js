import { put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';

export default function createSessionFilterSaga(type) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    return function* () {
        yield put(startLoading(type));

        try {
            const cartdata = JSON.parse(sessionStorage.getItem('cart')).filter(
                (cart_item) => cart_item.checked === true,
            );
            console.log('cartdata');

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
