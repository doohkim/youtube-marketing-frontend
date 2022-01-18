import React from 'react';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
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
    const { channelDetail, isLoading, channelDetailError } = useSelector(
        ({ channel }) => ({
            channelDetail: channel.channelDetail,
            isLoading: channel.isLoading,
            channelDetailError: channel.channelDetailError,
        }),
    );
    return (
        <AnalysisContainerBlock>
            {type === 'viewer' ? (
                <ViewersAnalysisContainer
                    channelDetail={channelDetail}
                    isLoading={isLoading}
                    Error={channelDetailError}
                />
            ) : type === 'video' ? (
                <VideoAnalysisContainer
                    channelDetail={channelDetail}
                    isLoading={isLoading}
                    Error={channelDetailError}
                />
            ) : type === 'channel' ? (
                <ChannelAnalysisContainer
                    channelDetail={channelDetail}
                    isLoading={isLoading}
                    Error={channelDetailError}
                />
            ) : null}
        </AnalysisContainerBlock>
    );
};

export default AnalysisContainer;
