import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import MarketGoodsInfoComponent from '../../../components/detail/market/MarketGoodsInfoComponent';
import MarketGoodsSectionComponent from '../../../components/detail/market/MarketGoodsSectionComponent';
import { readPost, unloadPost } from '../../../modules/post';
// import { product_list } from '../../../utils/market/marketData';
const MarketDetailContainerBlock = styled.div`
    width: 1080px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    padding-top: 30px;
    background: white;
`;

const MarketDetailContainer = ({ match }) => {
    const { postId } = match.params;
    const dispatch = useDispatch();
    const { post, postError, loading } = useSelector(({ post, loading }) => ({
        post: post.post,
        postError: post.postError,
        loading: loading['post/READ_POST'],
    }));
    useEffect(() => {
        dispatch(readPost(postId));
        // 언마운트될 때 리덕스에서 포스트 데이터 없애기
        return () => {
            dispatch(unloadPost());
        };
    }, [dispatch, postId]);
    return (
        <MarketDetailContainerBlock>
            <MarketGoodsSectionComponent
                post={post}
                postError={postError}
                loading={loading}
            />
            <MarketGoodsInfoComponent
                post={post}
                postError={postError}
                loading={loading}
            />
        </MarketDetailContainerBlock>
    );
};

export default withRouter(MarketDetailContainer);
