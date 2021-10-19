import { combineReducers } from 'redux';

import { all } from 'redux-saga/effects';

import channel from './channel';
import productDetailSelect from './productDetailSelect';
import posts, { postsSaga } from './posts';
import post, { postSaga } from './post';

import loading from './loading';

const rootReducer = combineReducers({
    channel,
    productDetailSelect,
    post,
    posts,
    loading,
});
export function* rootSaga() {
    yield all([postsSaga(), postSaga()]);
}

export default rootReducer;
