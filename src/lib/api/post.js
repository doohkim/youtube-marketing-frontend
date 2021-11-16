import client from './client';

// export const writePost = ({ title, notification, packing_type }) =>
//     client.post('/posts/', { title, notification, packing_type });

export const readPost = (id) => {
    return client.get(`/posts/detail/${id}/`);
};
