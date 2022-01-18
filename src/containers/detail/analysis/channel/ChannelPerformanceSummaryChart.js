import React from 'react';
import styled from 'styled-components';
import ChannelPerformanceSummaryChartComponent from '../../../../components/detail/analysis/ChannelPerformanceSummaryChartComponent';
import ChannelPerformanceSummaryInfoComponent from '../../../../components/detail/analysis/ChannelPerformanceSummaryInfoComponent';
const ChannelPerformanceSummaryChartBlock = styled.div`
    width: 1080px;
    height: auto;
    display: flex;
`;

const ChannelPerformanceSummaryChart = ({ channelDetail }) => {
    return (
        <ChannelPerformanceSummaryChartBlock>
            <ChannelPerformanceSummaryChartComponent
                channelDetail={channelDetail}
            />
            <ChannelPerformanceSummaryInfoComponent
                channelDetail={channelDetail}
            />
        </ChannelPerformanceSummaryChartBlock>
    );
};

export default ChannelPerformanceSummaryChart;
