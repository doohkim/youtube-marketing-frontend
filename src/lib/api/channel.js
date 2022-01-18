import client from './client';

export const getChannelList = () => {
    return client.get(`/channels/list/`);
};

export const getChannelAnalysis = (channelId) => {
    return client.get(`/channels/detail/${channelId}/`);
};
