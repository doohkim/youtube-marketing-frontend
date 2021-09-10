import React from 'react';
import styled from 'styled-components';

const SearchResultSortBlock = styled.div`
    display: flex;
    background: white;
    align-items: center;
    justify-content: flex-end;
    border-bottom: 1px solid black;
    p {
        cursor: pointer;
        width: auto;
        font-size: 0.9rem;
        padding-left: 1rem;
    }
`;

const SearchResultHeader = ({ sortedDescending }) => {
    const subscriberCount = 'subscriberCount';
    return (
        <SearchResultSortBlock>
            <div onClick={() => sortedDescending()}>구독자 순</div>
            <p>일일조회수 순</p>
            <p>구독자 급상승 순</p>
            <p>영상 평균 조회수 순</p>
            <p>30일 조회수 순</p>
        </SearchResultSortBlock>
    );
};
export default SearchResultHeader;
