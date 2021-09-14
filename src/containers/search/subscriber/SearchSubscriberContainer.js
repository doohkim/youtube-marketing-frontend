import React from 'react';
import styled from 'styled-components';
import SearchFilterVideoContainer from '../../../components/search/video/SearchFilterVideoContainer';
import SearchFilterContainer from '../../SearchFilterContainer';
import SearchInputContainer from '../../SearchInputContainer';
import SearchResultContainer from '../../SearchResultContainer';
import SearchResultVideoContainer from '../video/SearchResultVideoContainer';

const SearchSubscriberContainerBlock = styled.div`
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
const SearchSubscriberContainer = ({ match }) => {
    // 여기서 데이터 관리 할까? api 날려도 되지 않을가?
    const { type } = match.params;
    return (
        <SearchSubscriberContainerBlock>
            <SearchInputContainer />
            {type === 'video' ? (
                <SearchFilterVideoContainer />
            ) : (
                <SearchFilterContainer />
            )}
            {type === 'video' ? (
                <SearchResultVideoContainer />
            ) : (
                <SearchResultContainer />
            )}
        </SearchSubscriberContainerBlock>
    );
};
export default SearchSubscriberContainer;
