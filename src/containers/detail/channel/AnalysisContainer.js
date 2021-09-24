import React from 'react';
import styled from 'styled-components';
import ChannelAnalysisContainer from '../analysis/channel/ChannelAnalysisContainer';
import VideoAnalysisContainer from '../analysis/video/VideoAnalysisContainer';
import ViewersAnalysisContainer from '../analysis/views/ViewersAnalysisContainer';

const AnalysisContainerBlock = styled.div`
    width: 1080px;
    padding-top: 1.6rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const AnalysisContainer = ({ match }) => {
    const { type } = match.params;
    console.log(match);
    return (
        <AnalysisContainerBlock>
            {type === 'channel' ? (
                <ChannelAnalysisContainer />
            ) : type === 'viewer' ? (
                <ViewersAnalysisContainer />
            ) : type === 'video' ? (
                <VideoAnalysisContainer />
            ) : null}
        </AnalysisContainerBlock>
    );
};

export default AnalysisContainer;
