import React from 'react';
import styled from 'styled-components';
import SearchFilterContainer from './SearchFilterContainer';
import SearchInputContainer from './SearchInputContainer';
import SearchResultContainer from './SearchResultContainer';

const SearchRankBlock = styled.div`
    /* box-sizing: border-box; */
    width: 1080px;
    padding-bottom: 1rem;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const SearchRankContainer = ({ match }) => {
    const { type } = match.params;
    console.log(match);
    // 여기 받은 match로 Filter만 바꿔줘도 되고 여기서 api 날려도되나
    return (
        <SearchRankBlock>
            <SearchInputContainer />
            <SearchFilterContainer />
            <SearchResultContainer />
        </SearchRankBlock>
    );
};
export default SearchRankContainer;
