import React from 'react';
import styled from 'styled-components';
import VideoListContentComponent from '../../../../components/search/video/VideoListContentComponent';

const VideoListContainerWrap = styled.div`
    width: 1061px;
    max-width: 1080px;

    /* height: 1016px; */
    display: flex;
    flex-wrap: wrap;
    /* background: gray; */
`;

const VideoListContainer = () => {
    return (
        <VideoListContainerWrap>
            <VideoListContentComponent />
            <VideoListContentComponent />
            <VideoListContentComponent />
            <VideoListContentComponent />
            <VideoListContentComponent />
            <VideoListContentComponent />
            <VideoListContentComponent />
            <VideoListContentComponent />
            <VideoListContentComponent />
            <VideoListContentComponent />
            <VideoListContentComponent />
            <VideoListContentComponent />
            <VideoListContentComponent />
            <VideoListContentComponent />
            <VideoListContentComponent />
            <VideoListContentComponent />
        </VideoListContainerWrap>
    );
};

export default VideoListContainer;
