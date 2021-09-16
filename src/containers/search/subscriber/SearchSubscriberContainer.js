import React from 'react';
import styled from 'styled-components';
import SearchFilterContainer from '../../SearchFilterContainer';
import SearchInputContainer from '../../SearchInputContainer';
import SearchResultContainer from '../../SearchResultContainer';
import SearchFilterVideoContainer from '../../../components/search/video/SearchFilterVideoContainer';
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
