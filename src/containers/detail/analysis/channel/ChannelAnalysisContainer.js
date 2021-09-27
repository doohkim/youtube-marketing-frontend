import React from 'react';
import styled from 'styled-components';
import ChannelPerformanceSummaryChart from './ChannelPerformanceSummaryChart';
import ChannelSubscriberChangeChart from './ChannelSubscriberChangeChart';

const ChannelAnalysisContainerBlock = styled.div`
    width: 1080px;
    height: auto;
`;

const ChannelAnalysisContainer = () => {
    return (
        <ChannelAnalysisContainerBlock>
            <ChannelPerformanceSummaryChart />
            <ChannelSubscriberChangeChart />
        </ChannelAnalysisContainerBlock>
    );
};

export default ChannelAnalysisContainer;
