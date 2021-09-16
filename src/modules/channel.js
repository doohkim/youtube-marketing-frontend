import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';

const LIST_CHANNEL_LOAD = 'channel/LIST_CHANNEL_LOAD';

const LIST_CHANNEL_SUCCESS = 'channel/LIST_CHANNEL_SUCCESS';

const LIST_CHANNEL_FAILURE = 'channel/LIST_CHANNEL_FAILURE';

export const listChannelLoad = createAction(LIST_CHANNEL_LOAD);

export const listChannelSuccess = createAction(
    LIST_CHANNEL_SUCCESS,
    (channelList) => channelList,
);
export const listChannelFailure = createAction(
    LIST_CHANNEL_FAILURE,
    (channelError) => channelError,
);
const initialState = {
    channel: [],
    // channel: {
    //     channelId: '',
    //     title: '',
    //     description: '',
    //     thumbnails: '',
    //     category: '',
    //     isFavorite: false,
    //     viewCount: 0,
    //     averageVideoViewCount: 0,
    //     subscriberCount: 0,
    //     dailyViewChange: 0,
    //     dailyViewCount: 0,
    //     video: [
    //         {
    //             publishedAt: '',
    //             videoId: '',
    //             title: '',
    //             thumbnails: '',
    //         },
    //     ],
    // },
    // video: {
    //     videoId: '',
    //     title: '',
    //     description: '',
    //     likeCount: 0,
    //     dislikeCount: 0,
    //     viewCount: 0,
    //     dailyViewCount: 0,
    //     publishedAt: '',
    //     tags: [],
    //     thumbnails: '',
    // },
    isLoading: false,
    channelError: null,
};
const channel = handleActions(
    {
        [LIST_CHANNEL_LOAD]: (state) =>
            produce(state, (draft) => {
                draft.isLoading = true;
            }),
        [LIST_CHANNEL_SUCCESS]: (state, { payload: channelList }) =>
            produce(state, (draft) => {
                draft.channel = channelList;
            }),
        [LIST_CHANNEL_FAILURE]: (state, { payload: channelError }) =>
            produce(state, (draft) => {
                draft.channelError = channelError;
            }),
    },
    initialState,
);

export default channel;
