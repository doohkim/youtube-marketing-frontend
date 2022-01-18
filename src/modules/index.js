import { combineReducers } from 'redux';

import { all } from 'redux-saga/effects';

import channel, { channelListSaga } from './channel';
import productDetailSelect from './productDetailSelect';
import posts, { postsSaga } from './posts';
import post, { postSaga } from './post';
// import cart, { cartSaga } from './cart';
import loading from './loading';
import auth, { authSaga } from './auth';
import user, { userSaga } from './user';
import cartTest, { getCartTestSaga } from './cartTest';
import order, { CartFilterSaga } from './order';
import payment, { paymentSaga } from './payment';
import video, { videoListSaga } from './videos';
const rootReducer = combineReducers({
    channel,
    productDetailSelect,
    post,
    posts,
    loading,
    // cart,
    video,
    order,
    auth,
    user,
    cartTest,
    payment,
});
export function* rootSaga() {
    yield all([
        postsSaga(),
        postSaga(),
        // cartSaga(),
        channelListSaga(),
        videoListSaga(),
        CartFilterSaga(),
        authSaga(),
        userSaga(),
        getCartTestSaga(),
        paymentSaga(),
    ]);
}

export default rootReducer;
