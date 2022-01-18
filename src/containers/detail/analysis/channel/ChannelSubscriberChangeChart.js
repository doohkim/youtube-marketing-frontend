import React from 'react';
import styled from 'styled-components';
import ChannelSubscriberChangeChartComponent from '../../../../components/detail/analysis/ChannelSubscriberChangeChartComponent';

const ChannelSubscriberChangeChartBlock = styled.div`
    width: 1080px;
    height: auto;
`;

const ChannelSubscriberChangeChart = ({ channelDetail }) => {
    return (
        <ChannelSubscriberChangeChartBlock>
            <ChannelSubscriberChangeChartComponent
                channelDetail={channelDetail}
            />
        </ChannelSubscriberChangeChartBlock>
    );
};

export default ChannelSubscriberChangeChart;
