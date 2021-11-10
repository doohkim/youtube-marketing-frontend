import client from './client';

// export const writePost = ({ title, notification, packing_type }) =>
//     client.post('/posts/', { title, notification, packing_type });

export const readPost = (id) => {
    return client.get(`http://127.0.0.1:8000/posts/detail/${id}/`);
};
