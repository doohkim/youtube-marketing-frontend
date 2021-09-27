import React from 'react';
import styled from 'styled-components';
import VideoPerformanceSummaryComponent from '../../../../components/detail/analysis/video/VideoPerformanceSummaryComponent';
import VideoUploadTermComponent from '../../../../components/detail/analysis/video/VideoUploadTermComponent';
import VideoAnalysisListContainer from './VideoAnalysisListContainer';

const VideoAnalysisContainerBlock = styled.div`
    width: 1080px;
    height: auto;
`;

const VideoAnalysisContainer = () => {
    return (
        <VideoAnalysisContainerBlock>
            <VideoPerformanceSummaryComponent />
            <VideoUploadTermComponent />
            <VideoAnalysisListContainer />
        </VideoAnalysisContainerBlock>
    );
};

export default VideoAnalysisContainer;
