import React from 'react';
import styled from 'styled-components';
import VideoAnalysisListContentComponent from '../../../../components/search/video/VideoAnalysisListContentComponent';

const VideoAnalysisListContainerWrap = styled.div`
    width: 1061px;
    max-width: 1080px;

    /* height: 670px; */
    display: flex;
    flex-wrap: wrap;
`;

const VideoAnalysisListContainer = ({ channelDetail }) => {
    const { videos, title, logo } = channelDetail;

    return (
        <VideoAnalysisListContainerWrap>
            {videos &&
                videos.map((video) => (
                    <VideoAnalysisListContentComponent
                        key={video.id}
                        video={video}
                        channelTitle={title}
                        channelLogo={logo}
                    />
                ))}
        </VideoAnalysisListContainerWrap>
    );
};

export default VideoAnalysisListContainer;
