import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';

const ChannelPerformanceSummaryChartComponentWrap = styled.div`
    width: 60%;
    border-right: 1px solid #dcdcdc;
`;

const ChannelPerformanceSummaryChartComponent = () => {
    const data = {
        labels: ['1900', '1950', '1999', '2050'],
        datasets: [
            {
                label: 'Europe',
                type: 'bar',
                backgroundColor: 'rgba(0,0,0,0.2)',
                data: [1, 181, -47, 23],
            },
        ],
    };

    return (
        <ChannelPerformanceSummaryChartComponentWrap>
            <Bar data={data} />
        </ChannelPerformanceSummaryChartComponentWrap>
    );
};

export default ChannelPerformanceSummaryChartComponent;
