import React from 'react';
import styled from 'styled-components';
import VideoContentHeaderContainer from './common/VideoContentHeaderContainer';
import VideoListContainer from './common/VideoListContainer';

const SearchResultVideoContainerBlock = styled.div`
    width: 1080px;
    height: 1114px;
    border-radius: 3px;
    background: white;
    display: flex;
    flex-direction: column;
    /* padding: 20px 25px 25px; */
    box-shadow: 0 3px 4.8px 0.2px;
    justify-content: center;
    align-items: center;
`;

const SearchResultVideoContainer = () => {
    return (
        <SearchResultVideoContainerBlock>
            <VideoContentHeaderContainer />
            <VideoListContainer />
        </SearchResultVideoContainerBlock>
    );
};
export default SearchResultVideoContainer;
