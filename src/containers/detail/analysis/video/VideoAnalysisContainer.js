import React from 'react';
import styled from 'styled-components';
import VideoPerformanceSummaryComponent from '../../../../components/detail/analysis/video/VideoPerformanceSummaryComponent';
import VideoUploadTermComponent from '../../../../components/detail/analysis/video/VideoUploadTermComponent';
import VideoAnalysisListContainer from './VideoAnalysisListContainer';

const VideoAnalysisContainerBlock = styled.div`
    width: 1080px;
    height: auto;
`;

const VideoAnalysisContainer = ({ channelDetail, isLoading, Error }) => {
    if (isLoading) {
        return <div> 준비중 </div>;
    }
    return (
        <VideoAnalysisContainerBlock>
            {channelDetail && (
                <VideoPerformanceSummaryComponent
                    channelDetail={channelDetail}
                />
            )}
            {channelDetail && (
                <VideoUploadTermComponent channelDetail={channelDetail} />
            )}
            {channelDetail && (
                <VideoAnalysisListContainer channelDetail={channelDetail} />
            )}
        </VideoAnalysisContainerBlock>
    );
};

export default VideoAnalysisContainer;
