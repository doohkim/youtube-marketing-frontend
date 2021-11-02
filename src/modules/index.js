import { combineReducers } from 'redux';

import { all } from 'redux-saga/effects';

import channel from './channel';
import productDetailSelect from './productDetailSelect';
import posts, { postsSaga } from './posts';
import post, { postSaga } from './post';
import cart, { cartSaga } from './cart';
import loading from './loading';
import auth, { authSaga } from './auth';
import user, { userSaga } from './user';

const rootReducer = combineReducers({
    channel,
    productDetailSelect,
    post,
    posts,
    loading,
    cart,
    auth,
    user,
});
export function* rootSaga() {
    yield all([postsSaga(), postSaga(), cartSaga(), authSaga(), userSaga()]);
}

export default rootReducer;
