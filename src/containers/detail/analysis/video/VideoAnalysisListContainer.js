import React from 'react';
import styled from 'styled-components';
import VideoListContentComponent from '../../../../components/search/video/VideoListContentComponent';

const VideoAnalysisListContainerWrap = styled.div`
    width: 1061px;
    max-width: 1080px;

    /* height: 670px; */
    display: flex;
    flex-wrap: wrap;
    background: gray;
`;

const VideoAnalysisListContainer = () => {
    return (
        <VideoAnalysisListContainerWrap>
            <VideoListContentComponent />
            <VideoListContentComponent />
            <VideoListContentComponent />
            <VideoListContentComponent />
            <VideoListContentComponent />
            <VideoListContentComponent />
            <VideoListContentComponent />
            <VideoListContentComponent />
        </VideoAnalysisListContainerWrap>
    );
};

export default VideoAnalysisListContainer;
