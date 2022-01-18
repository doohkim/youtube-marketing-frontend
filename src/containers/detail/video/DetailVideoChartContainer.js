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
    const data = {
        labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
        ],
        datasets: [
            {
                label: 'Dataset of Months',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40],
            },
        ],
    };
    return (
        <DetailVideoChartContainerBlock>
            <Line width={1000} height={400} data={chartData} />
        </DetailVideoChartContainerBlock>
    );
};

export default DetailVideoChartContainer;
