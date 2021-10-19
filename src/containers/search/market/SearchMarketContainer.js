import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import GoodListComponent from '../../../components/search/market/GoodListComponent';
import { getListPosts } from '../../../modules/posts';

const SearchMarketContainerBlock = styled.div`
    width: 1080px;
    height: auto;
    .title {
        width: 1080px;
        font-size: 32px;
        background: white;
        text-align: center;

        padding-top: 26px;
        font-family: noto sans;
        font-weight: 400;
        letter-spacing: 0;
    }
`;

const SearchMarketContainer = () => {
    const dispatch = useDispatch();
    const { posts, postsError, loading } = useSelector(
        ({ posts, loading }) => ({
            posts: posts.posts,
            postsError: posts.postsError,
            loading: loading['posts/GET_POSTS'],
        }),
    );

    useEffect(() => {
        dispatch(getListPosts());
    }, [dispatch]);
    return (
        <SearchMarketContainerBlock>
            <div className="title">신상품</div>
            <GoodListComponent
                posts={posts}
                postsError={postsError}
                loading={loading}
            />
        </SearchMarketContainerBlock>
    );
};

export default SearchMarketContainer;
