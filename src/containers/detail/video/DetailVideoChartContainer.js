import React from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';

const DetailVideoChartContainerBlock = styled.div`
    width: 1000px;
    height: 400px;
    margin-bottom: 8rem;
    /* background: black; */
`;

export const DetailVideoChartContainer = ({ chartData }) => {
    return (
        <DetailVideoChartContainerBlock>
            <Line width={1000} height={400} data={chartData} />
        </DetailVideoChartContainerBlock>
    );
};

export default DetailVideoChartContainer;
