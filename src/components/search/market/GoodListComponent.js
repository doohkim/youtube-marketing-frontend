import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ListSortMenuComponent from './ListSortMenuComponent';
import InnerGoodsListComponent from './InnerGoodsListComponent';
import GoodsItem from './GoodsItem';
const GoodListComponentBlock = styled.div`
    width: 1080px;
`;
const InnerGoodsListComponentBlock = styled.div`
    width: 1070px;
    /* background: white; */
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    overflow: hidden;
    margin-left: 10px;
    .list {
        float: left;
        width: 1070px;
        display: flex;
        flex-wrap: wrap;
        li {
            list-style: none;
            margin: 0;
            padding: 0;
            text-indent: 0;
            list-style-type: 0;

            width: 338px;
            height: 682px;
            padding: 0 18px 0 0;
        }
    }
`;
const GoodListComponent = ({ posts, postsError, loading }) => {
    if (postsError) {
        return (
            <InnerGoodsListComponentBlock>
                에러가 발생했습니다.
            </InnerGoodsListComponentBlock>
        );
    }
    return (
        <GoodListComponentBlock>
            <ListSortMenuComponent />
            <InnerGoodsListComponentBlock>
                <ul className="list">
                    {!loading &&
                        posts &&
                        posts.results.map((post) => (
                            <li key={post.id}>
                                <GoodsItem post={post} />
                            </li>
                        ))}
                </ul>
            </InnerGoodsListComponentBlock>
        </GoodListComponentBlock>
    );
};
export default GoodListComponent;
