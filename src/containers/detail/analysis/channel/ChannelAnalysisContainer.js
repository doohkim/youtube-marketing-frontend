import React from 'react';
import styled from 'styled-components';
import ChannelDailyViewsChart from './ChannelDailyViewsChart';
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
            <ChannelDailyViewsChart />
        </ChannelAnalysisContainerBlock>
    );
};

export default ChannelAnalysisContainer;
