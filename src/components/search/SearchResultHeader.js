import React from 'react';
import styled from 'styled-components';

const SearchResultSortBlock = styled.div`
    display: flex;
    background: white;
    align-items: center;
    justify-content: flex-end;
    border-bottom: 1px solid black;
    button {
        cursor: pointer;
        width: auto;
        font-size: 0.9rem;
        padding-left: 1rem;
    }
`;

const SearchResultHeader = ({ sortedDescending }) => {
    return (
        <SearchResultSortBlock>
            <button name="subscriberCount" onClick={sortedDescending}>
                구독자 순
            </button>
            <button name="dailyViewChange" onClick={sortedDescending}>
                일일조회수 순
            </button>
            <button name="subscriberChange" onClick={sortedDescending}>
                구독자 급상승 순
            </button>
            <button name="averageVideoViewCount" onClick={sortedDescending}>
                영상 평균 조회수 순
            </button>
            <button name="viewCount" onClick={sortedDescending}>
                30일 조회수 순
            </button>
        </SearchResultSortBlock>
    );
};
export default SearchResultHeader;
