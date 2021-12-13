import client from './client';

export const writePost = ({ title, notification, packing_type }) =>
    //http://127.0.0.1:8000/posts/?page=2
    client.post('/posts/', { title, notification, packing_type });

export const getListPosts = ({ page = 1, sort = 1 }) => {
    return client.get(`/posts/?page=${page}&sort=${sort}`);
};
