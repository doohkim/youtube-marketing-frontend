import client from './client';

export const getVideoList = () => {
    return client.get(`/channels/video/`);
};

export const getVideoAnalysis = (videoId) => {
    return client.get(`/channels/video/${videoId}/`);
};
