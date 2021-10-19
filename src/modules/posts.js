import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as postsAPI from '../lib/api/posts';
import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';

const [GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE] =
    createRequestActionTypes('posts/GET_POSTS');
export const getListPosts = createAction(GET_POSTS);

const getPostsSaga = createRequestSaga(GET_POSTS, postsAPI.getListPosts);

export function* postsSaga() {
    yield takeLatest(GET_POSTS, getPostsSaga);
}

const initialState = {
    posts: null,
    postsError: null,
    sortNumber: 0,
};

const posts = handleActions(
    {
        [GET_POSTS_SUCCESS]: (state, action) => ({
            ...state,
            posts: action.payload,
        }),
        [GET_POSTS_FAILURE]: (state, action) => ({
            ...state,
            postsError: action.payload,
        }),
    },
    initialState,
);

export default posts;
