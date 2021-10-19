import qs from 'qs';
import client from './client';

export const writePost = ({ title, notification, packing_type }) =>
    //http://127.0.0.1:8000/posts/?page=2
    client.post('/posts/', { title, notification, packing_type });

export const getListPosts = () => {
    return client.get(`http://127.0.0.1:8000/posts/`);
};
