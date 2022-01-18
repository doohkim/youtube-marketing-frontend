import React from 'react';
import styled from 'styled-components';
import ChannelPerformanceSummaryChart from './ChannelPerformanceSummaryChart';
import ChannelSubscriberChangeChart from './ChannelSubscriberChangeChart';

const ChannelAnalysisContainerBlock = styled.div`
    width: 1080px;
    height: auto;
`;

const ChannelAnalysisContainer = ({ channelDetail, isLoading, Error }) => {
    if (isLoading) {
        return <div> 준비중 </div>;
    }
    return (
        <ChannelAnalysisContainerBlock>
            {channelDetail && (
                <ChannelPerformanceSummaryChart channelDetail={channelDetail} />
            )}
            {channelDetail && (
                <ChannelSubscriberChangeChart channelDetail={channelDetail} />
            )}
        </ChannelAnalysisContainerBlock>
    );
};

export default ChannelAnalysisContainer;
